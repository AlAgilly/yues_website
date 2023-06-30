import express from "express";
import http from "http";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { port, instagram, notionapi } from "./config/index.js";
import posts from "./data/index.js"
import upcoming from "./data/upcoming.js"
import recent from "./data/recent.js"
import events from "./data/events.js"
import admin from "./data/admin.js"
import competitive from "./data/competitive.js"
import marketing from "./data/marketing.js"
import operations from "./data/operations.js"
import partnerships from "./data/partnerships.js"
import { Client } from '@notionhq/client';
import fetch from "node-fetch";
import fs from 'fs/promises'
import cron from 'node-cron'


var date = new Date().toISOString().substring(0,10);
const notion = new Client({auth: notionapi});
const app = express();

app.use(cors({origin: true, credentials: true}))
app.use(helmet())
app.use(compression());

// NOTION START get the pages
let upcomingPageIds;
const upcomingArray = [0, 0, 0];

let recentPageIds;
const recentArray = [0, 0, 0];

let eventsPageIds;
const eventsArray = [0, 0, 0, 0];

let adminPageIds;
let adminArray = [];

let marketingPageIds;
let marketingArray = [];

let partnershipsPageIds;
let partnershipsArray = [];

let operationsPageIds;
let operationsArray = [];

let competitivePageIds;
let competitiveArray = [];

async function upcomingUpdate() {
    const databaseId = '3e4d3d86e5644511a000300583ecdb98';
    const dbResponse = await notion.databases.query({
        database_id: databaseId,
        filter: { 
            and: [
                {
                    property: 'Date',
                    date: {
                        on_or_after: date,
                    },
                },
                {
                    property: 'Game',
                    select: { 
                        is_not_empty: true,
                    },
                }, 
                {
                    property: 'Team',
                    select: { 
                    is_not_empty: true,
                    },
                },
            ],
        },
        sorts: [
            {
                property: 'Date',
                direction: 'ascending'
            }
        ]
    })
    upcomingPageIds = dbResponse.results.map((resp) => resp.id)
    for (let i = 0; i < 3; i++) {
        const pageId = upcomingPageIds[i];

        const gameId = "vq%7CF";
        const game = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: gameId})

        const teamId = "%3DbFt";
        const team = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: teamId})

        const dateId = "ynaI";
        const date = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: dateId})

        const eventId = "title";
        const event = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: eventId})

        if (event == null || date.date == null || team.select == null || game.select == null) {
            upcomingArray[i] = {}
        } else {
            upcomingArray[i] = {
                id: pageId,
                eventname: event.results[0].title.text.content,
                date: date.date.start,
                team: team.select.name,
                game: game.select.name
            }
        }
    }
};

async function recentUpdate() {
    const databaseId = '3e4d3d86e5644511a000300583ecdb98';
    const dbResponse = await notion.databases.query({
        database_id: databaseId,
        filter: {
            and: [
                {
                    property: 'Date',
                    date: {
                        before: date
                    },
                }, 
                {
                    property: 'Game',
                    select: { 
                        is_not_empty: true 
                    },
                }, 
                {
                    property: 'Team',
                    select: { 
                    is_not_empty: true 
                    },
                },
            ]
        },
        sorts: [
            {
                property: 'Date',
                direction: 'descending'
            }
        ]
    })
    recentPageIds = dbResponse.results.map((resp) => resp.id)
    for (let i = 0; i < 3; i++) {
        const pageId = recentPageIds[i];

        const gameId = "vq%7CF";
        const game = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: gameId})

        const teamId = "%3DbFt";
        const team = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: teamId})

        const dateId = "ynaI";
        const date = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: dateId})

        const eventId = "title";
        const event = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: eventId})

        if (event == null || date.date == null || team.select == null || game.select == null) {
            recentArray[i] = {}
        } else {
            recentArray[i] = {
                id: pageId,
                eventname: event.results[0].title.text.content,
                date: date.date.start,
                team: team.select.name,
                game: game.select.name
            };
        }
    }
};

async function eventsUpdate() {
    const databaseId = '218b1eb243774e5b8c23b29a23db0df6';
    const dbResponse = await notion.databases.query({
        database_id: databaseId,
        filter: {
            or: [
                {
                    property: 'Status',
                    status: {
                        equals: "Upcoming"
                    }
                }
            ]
        },
        sorts: [
            {
                property: 'Date',
                direction: 'descending'
            }
        ]
    })
    eventsPageIds = dbResponse.results.map((resp) => resp.id)
    for (let i = 0; i < 4; i++) {
        const pageId = eventsPageIds[i];

        const roomId = "WAf%3F";
        const room = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: roomId})

        const dateId = "mh%7D%5E";
        const date = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: dateId})

        const eventId = "title";
        const event = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: eventId})

        if (event == null || date.date == null || room.results[0] == undefined) {
            eventsArray[i] = {}
        } else {
            eventsArray[i] = {
                id: pageId,
                event: event.results[0].title.text.content,
                date: date.date.start.substring(0,10),
                time: date.date.start.substring(11,16) + " - " + date.date.end.substring(11,16),
                room : room.results[0].rich_text.content,
            }
        }
    }
};

async function adminUpdate() {
    const databaseId = '02cb5f77092c413483cc744d04f6a87a';
    const dbResponse = await notion.databases.query({
        database_id: databaseId,
        filter: {
            and: [
                {
                    property: 'Status',
                    select: {
                        is_empty: true
                    }
                },
                {
                    or: [
                        {
                            property: 'Team',
                            multi_select: {
                                contains: "Administration"
                            }
                        },
                        {
                            property: 'Team',
                            multi_select: {
                                contains: "Secretary"
                            }
                        },
                        {
                            property: 'Team',
                            multi_select: {
                                contains: "Treasurer"
                            }
                        },
                        {
                            property: 'Team',
                            multi_select: {
                                contains: "Human Resources"
                            }
                        },
                    ]
                }
            ]
        },
        sorts:[
            {
                property: 'Team',
                direction: 'ascending'
            },
            {
                property: 'Position',
                direction: 'ascending'
            },
            {
                property: 'Name',
                direction: 'ascending'
            },
        ]
    })
    partnershipsPageIds = dbResponse.results.map((resp) => resp.id)
    console.log(partnershipsPageIds)
    adminArray = [];
    for (let i = 0; i < partnershipsPageIds.length; i++) {
        const pageId = partnershipsPageIds[i];

        const nameId = "title";
        const name = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: nameId})
            
        const teamId = "%7B%5Evf";
        const team = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: teamId})

        const positionId = "EkNg";
        const position = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: positionId})



        if (name == null || position == null || team == undefined) {
            adminArray[i] = {}
        } else {
            adminArray[i] = {
                id: pageId,
                name: name.results[0].title.text.content,
                position: position.select.name,
                team : team.multi_select[0].name,
            }
        }
    }
};

async function marketingUpdate() {
    const databaseId = '02cb5f77092c413483cc744d04f6a87a';
    const dbResponse = await notion.databases.query({
        database_id: databaseId,
        filter: {
            and: [
                {
                    property: 'Status',
                    select: {
                        is_empty: true
                    }
                },
                {
                    property: 'Team',
                    multi_select: {
                        contains: "Marketing"
                    }
                },
            ]
        },
        sorts:[
            {
                property: 'Position',
                direction: 'ascending'
            },
            {
                property: 'Name',
                direction: 'ascending'
            },
        ]
    })
    marketingPageIds = dbResponse.results.map((resp) => resp.id)
    console.log(marketingPageIds)
    marketingArray = [];
    for (let i = 0; i < marketingPageIds.length; i++) {
        const pageId = marketingPageIds[i];

        const nameId = "title";
        const name = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: nameId})
            
        const teamId = "%7B%5Evf";
        const team = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: teamId})

        const positionId = "EkNg";
        const position = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: positionId})



        if (name == null || position == null || team == undefined) {
            marketingArray[i] = {}
        } else {
            marketingArray[i] = {
                id: pageId,
                name: name.results[0].title.text.content,
                position: position.select.name,
            }
        }
    }
};

async function partnershipsUpdate() {
    const databaseId = '02cb5f77092c413483cc744d04f6a87a';
    const dbResponse = await notion.databases.query({
        database_id: databaseId,
        filter: {
            and: [
                {
                    property: 'Status',
                    select: {
                        is_empty: true
                    }
                },
                {
                    property: 'Team',
                    multi_select: {
                        contains: "Partnerships"
                    }
                },
            ]
        },
        sorts:[
            {
                property: 'Position',
                direction: 'ascending'
            },
            {
                property: 'Name',
                direction: 'ascending'
            },
        ]
    })
    partnershipsPageIds = dbResponse.results.map((resp) => resp.id)
    console.log("partnerships: " + partnershipsPageIds)
    partnershipsArray = [];
    for (let i = 0; i < partnershipsPageIds.length; i++) {
        const pageId = partnershipsPageIds[i];

        const nameId = "title";
        const name = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: nameId})
            
        const teamId = "%7B%5Evf";
        const team = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: teamId})

        const positionId = "EkNg";
        const position = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: positionId})



        if (name == null || position == null || team == undefined) {
            partnershipsArray[i] = {}
        } else {
            partnershipsArray[i] = {
                id: pageId,
                name: name.results[0].title.text.content,
                position: position.select.name,
            }
        }
    }
};

async function operationsUpdate() {
    const databaseId = '02cb5f77092c413483cc744d04f6a87a';
    const dbResponse = await notion.databases.query({
        database_id: databaseId,
        filter: {
            and: [
                {
                    property: 'Status',
                    select: {
                        is_empty: true
                    }
                },
                {
                    property: 'Team',
                    multi_select: {
                        contains: "Operations"
                    }
                },
            ]
        },
        sorts:[
            {
                property: 'Position',
                direction: 'ascending'
            },
            {
                property: 'Name',
                direction: 'ascending'
            },
        ]
    })
    operationsPageIds = dbResponse.results.map((resp) => resp.id)
    console.log(operationsPageIds)
    operationsArray = [];
    for (let i = 0; i < operationsPageIds.length; i++) {
        const pageId = operationsPageIds[i];

        const nameId = "title";
        const name = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: nameId})
            
        const teamId = "%7B%5Evf";
        const team = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: teamId})

        const positionId = "EkNg";
        const position = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: positionId})



        if (name == null || position == null || team == undefined) {
            operationsArray[i] = {}
        } else {
            operationsArray[i] = {
                id: pageId,
                name: name.results[0].title.text.content,
                position: position.select.name,
            }
        }
    }
};

async function competitiveUpdate() {
    const databaseId = '02cb5f77092c413483cc744d04f6a87a';
    const dbResponse = await notion.databases.query({
        database_id: databaseId,
        filter: {
            and: [
                {
                    property: 'Status',
                    select: {
                        is_empty: true
                    }
                },
                {
                    property: 'Team',
                    multi_select: {
                        contains: "Competitive"
                    }
                },
            ]
        },
        sorts:[
            {
                property: 'Position',
                direction: 'ascending'
            },
            {
                property: 'Name',
                direction: 'ascending'
            },
        ]
    })
    competitivePageIds = dbResponse.results.map((resp) => resp.id)
    console.log(competitivePageIds)
    competitiveArray = [];
    for (let i = 0; i < competitivePageIds.length; i++) {
        const pageId = competitivePageIds[i];

        const nameId = "title";
        const name = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: nameId})
            
        const teamId = "%7B%5Evf";
        const team = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: teamId})

        const positionId = "EkNg";
        const position = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: positionId})



        if (name == null || position == null || team == undefined) {
            competitiveArray[i] = {}
        } else {
            competitiveArray[i] = {
                id: pageId,
                name: name.results[0].title.text.content,
                position: position.select.name,
            }
        }
    }
};

async function gateway() {
    try {
        await upcomingUpdate();
        await recentUpdate();
        await eventsUpdate();
    } catch (err) {
      console.log(err);
    }
    finally {
        await fs.writeFile('./data/upcoming.js', "export default " + JSON.stringify(upcomingArray));
        await fs.writeFile('./data/recent.js', "export default " + JSON.stringify(recentArray));
        await fs.writeFile('./data/events.js', "export default " + JSON.stringify(eventsArray));
    }
};

async function staff() {
    try {
        await adminUpdate();
        await marketingUpdate();
        await partnershipsUpdate();
        await operationsUpdate();
        await competitiveUpdate();
    } catch (err) {
      console.log(err);
    }
    finally {
        await fs.writeFile('./data/admin.js', "export default " + JSON.stringify(adminArray));
        await fs.writeFile('./data/marketing.js', "export default " + JSON.stringify(marketingArray));
        await fs.writeFile('./data/partnerships.js', "export default " + JSON.stringify(partnershipsArray));
        await fs.writeFile('./data/operations.js', "export default " + JSON.stringify(operationsArray));
        await fs.writeFile('./data/competitive.js', "export default " + JSON.stringify(competitiveArray));
    }
};

cron.schedule('0 * * * *', () => {
    console.log('Updating from notion (every hour)');
    gateway();
});

cron.schedule('5 * * * *', () => {
    console.log('Updating from notion (every hour)');
    staff();
});

const apiURL = `https://graph.instagram.com/me/media?fields=id,media_type,media_url&limit=8&access_token=${instagram}`

app.get('/api/insta', async(req, res) => {
    const data = await fetch(apiURL).then(res => {
        return res.json()
    })
    return res.json(data)
})

app.get('/api/upcoming', async(req, res) => {
    return res.json(upcoming)
})

app.get('/api/recent', async(req, res) => {
    return res.json(recent)
})

app.get('/api/events', async(req, res) => {
    return res.json(events)
})

app.get('/api/admin', (req, res) => {
    return res.json(admin)
})

app.get('/api/marketing', (req, res) => {
    return res.json(marketing)
})

app.get('/api/partnerships', (req, res) => {
    return res.json(partnerships)
})

app.get('/api/operations', (req, res) => {
    return res.json(operations)
})

app.get('/api/competitive', (req, res) => {
    return res.json(competitive)
})

app.get('/api/posts', (req, res) => {
    return res.json(posts)
})

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})