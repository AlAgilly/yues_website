import express from "express";
import http from "http";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { port, instagram, notionapi } from "./config/index.js";
// import posts from "./data/index.js"
// import upcoming from "./data/upcoming.js"
// import recent from "./data/recent.js"
// import events from "./data/events.js"
import { upcoming, recent, events, copresident, secretary, treasurer, hr, competitive, marketing, operations, partnerships } from "./data/yge/index.js"
import { Client } from '@notionhq/client';
import fetch from "node-fetch";
import fs from 'fs/promises'
import cron from 'node-cron'


var todaysDate = new Date().toISOString().substring(0,10);
const notion = new Client({auth: notionapi});
const app = express();

app.use(cors({origin: true, credentials: true}))
app.use(helmet())
app.use(compression());

// NOTION START get the pages
let upcomingPageIds;
let upcomingArray = [];

async function upcomingUpdate() {
    const databaseId = '3e4d3d86e5644511a000300583ecdb98';
    const dbResponse = await notion.databases.query({
        database_id: databaseId,
        filter: { 
            and: [
                {
                    property: 'Date',
                    date: {
                        on_or_after: todaysDate,
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
    upcomingArray = [];
    for (let i = 0; i < 3 && upcomingPageIds[i] != undefined; i++) {
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

let recentPageIds;
let recentArray = [];

async function recentUpdate() {
    const databaseId = '3e4d3d86e5644511a000300583ecdb98';
    const dbResponse = await notion.databases.query({
        database_id: databaseId,
        filter: {
            and: [
                {
                    property: 'Date',
                    date: {
                        before: todaysDate
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
    recentArray = [];
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

let eventsPageIds;
let eventsArray = [];

async function eventsUpdate() {
    const databaseId = '218b1eb243774e5b8c23b29a23db0df6';
    const dbResponse = await notion.databases.query({
        database_id: databaseId,
        filter: 
                {
                    property: 'Status',
                    status: {
                        equals: "Upcoming"
                    }
                },
        
        sorts: [
            {
                property: 'Date',
                direction: 'descending'
            }
        ]
    })
    eventsPageIds = dbResponse.results.map((resp) => resp.id)
    eventsArray = [];
    for (let i = 0; i < 4 && eventsPageIds[i] != undefined; i++) {
        const pageId = eventsPageIds[i];

        const roomId = "WAf%3F";
        const room = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: roomId})

        let roomDisp = room.results[0] == undefined ? '' : room.results[0].rich_text.text.content

        const dateId = "mh%7D%5E";
        const date = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: dateId})

        let dateDisp = date.date == null ? '' : (date.date.end == null ? date.date.start.substring(0,10) : (date.date.start.substring(0,10) + " - " + date.date.end.substring(0,10)))
        let timeDisp = date.date == null ? '' : (date.date.start.length > 10 ? (date.date.end != null ? (date.date.start.substring(11,16) + ' - ' + date.date.end.substring(11,16)): date.date.start.substring(11,16)): '')

        const eventId = "title";
        const event = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: eventId})
            // console.log(event)
        
        let titleDisp = event == null ? '' : event.results[0].title.text.content
        
        eventsArray[i] = {
            id: pageId,
            event: titleDisp,
            date: dateDisp,
            time: timeDisp,
            room: roomDisp,
        }
        
    }
};

let copresidentPageIds;
let copresidentArray = [];

async function copresidentUpdate() {
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
                    property: 'Position',
                    select: {
                        equals: "Co-President"
                    }
                },
            ]
        },
        sorts:[
            {
                property: 'Name',
                direction: 'ascending'
            },
        ]
    })
    copresidentPageIds = dbResponse.results.map((resp) => resp.id)
    console.log("copres:" + copresidentPageIds.length)
    copresidentArray = [];
    for (let i = 0; i < copresidentPageIds.length; i++) {
        const pageId = copresidentPageIds[i];

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
            copresidentArray[i] = {}
        } else {
            copresidentArray[i] = {
                id: pageId,
                name: name.results[0].title.text.content,
                position: position.select.name,
                team : team.multi_select[0].name,
            }
        }
    }
};

let secretaryPageIds;
let secretaryArray = [];

async function secretaryUpdate() {
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
                    property: 'Position',
                    select: {
                        equals: "Secretary"
                    }
                },
            ]
        },
        sorts:[
            {
                property: 'Team',
                direction: 'ascending'
            },
            {
                property: 'Name',
                direction: 'ascending'
            },
        ]
    })
    secretaryPageIds = dbResponse.results.map((resp) => resp.id)
    console.log("secretary" + secretaryPageIds.length)
    secretaryArray = [];
    for (let i = 0; i < secretaryPageIds.length; i++) {
        const pageId = secretaryPageIds[i];

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
            secretaryArray[i] = {}
        } else {
            secretaryArray[i] = {
                id: pageId,
                name: name.results[0].title.text.content,
                position: position.select.name,
                team : team.multi_select[0].name,
            }
        }
    }
};

let treasurerPageIds;
let treasurerArray = [];

async function treasurerUpdate() {
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
                    property: 'Position',
                    select: {
                        equals: "Treasurer"
                    }
                },
            ]
        },
        sorts:[
            {
                property: 'Team',
                direction: 'ascending'
            },
            {
                property: 'Name',
                direction: 'ascending'
            },
        ]
    })
    treasurerPageIds = dbResponse.results.map((resp) => resp.id)
    console.log("treasurer" + treasurerPageIds.length)
    treasurerArray = [];
    for (let i = 0; i < treasurerPageIds.length; i++) {
        const pageId = treasurerPageIds[i];

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
            treasurerArray[i] = {}
        } else {
            treasurerArray[i] = {
                id: pageId,
                name: name.results[0].title.text.content,
                position: position.select.name,
                team : team.multi_select[0].name,
            }
        }
    }
};

let hrPageIds;
let hrArray = [];

async function hrUpdate() {
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
                    property: 'Position',
                    select: {
                        equals: "Human Resources"
                    }
                },
            ]
        },
        sorts:[
            {
                property: 'Team',
                direction: 'ascending'
            },
            {
                property: 'Name',
                direction: 'ascending'
            },
        ]
    })
    hrPageIds = dbResponse.results.map((resp) => resp.id)
    console.log("hr: " + hrPageIds.length)
    hrArray = [];
    for (let i = 0; i < hrPageIds.length; i++) {
        const pageId = hrPageIds[i];

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
            hrArray[i] = {}
        } else {
            hrArray[i] = {
                id: pageId,
                name: name.results[0].title.text.content,
                position: position.select.name,
                team : team.multi_select[0].name,
            }
        }
    }
};

let marketingPageIds;
let marketingArray = [];

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
    console.log("marketing: " + marketingPageIds.length)
    marketingArray = [];
    // console.log('Got Notion')
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
        // console.log('In for loop')


        if (name == null || position == null || team == undefined) {
            marketingArray[i] = {}
            // console.log('oop')
        } else {
            marketingArray[i] = {
                id: pageId,
                name: name.results[0].title.text.content,
                position: position.select.name,
                team: team.multi_select[0].name,
            }
            // console.log(marketingArray[i])
        }
    }
};

let partnershipsPageIds;
let partnershipsArray = [];

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
    console.log("partnerships: " + partnershipsPageIds.length)
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
                team: team.multi_select[0].name,
            }
        }
    }
};

let operationsPageIds;
let operationsArray = [];

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
    console.log("operations: " + operationsPageIds.length)
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
                team: team.multi_select[0].name,
            }
        }
    }
};

let competitivePageIds;
let competitiveArray = [];

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
    console.log("competitive: " + competitivePageIds.length)
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
                team: team.multi_select[0].name,
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
        await fs.writeFile('./data/yge/upcoming.js', "export default " + JSON.stringify(upcomingArray));
        await fs.writeFile('./data/yge/recent.js', "export default " + JSON.stringify(recentArray));
        await fs.writeFile('./data/yge/events.js', "export default " + JSON.stringify(eventsArray));
    }
};

async function staff() {
    try {
        await copresidentUpdate();
        await secretaryUpdate();
        await treasurerUpdate();
        await hrUpdate();
        await marketingUpdate();
        await partnershipsUpdate();
        await operationsUpdate();
        await competitiveUpdate();
    } catch (err) {
      console.log(err);
    }
    finally {
        await fs.writeFile('./data/yge/copresident.js', "export default " + JSON.stringify(copresidentArray));
        await fs.writeFile('./data/yge/secretary.js', "export default " + JSON.stringify(secretaryArray));
        await fs.writeFile('./data/yge/treasurer.js', "export default " + JSON.stringify(treasurerArray));
        await fs.writeFile('./data/yge/hr.js', "export default " + JSON.stringify(hrArray));
        await fs.writeFile('./data/yge/marketing.js', "export default " + JSON.stringify(marketingArray));
        await fs.writeFile('./data/yge/partnerships.js', "export default " + JSON.stringify(partnershipsArray));
        await fs.writeFile('./data/yge/operations.js', "export default " + JSON.stringify(operationsArray));
        await fs.writeFile('./data/yge/competitive.js', "export default " + JSON.stringify(competitiveArray));
    }
};

cron.schedule('0 * * * *', () => {
    console.log('Updating Events and games from notion (every hour)');
    gateway();
});

cron.schedule('30 0 * * *', () => {
    console.log('Updating staff from notion (every day at 12:30 AM)');
    staff();
});

const apiURL = `https://graph.instagram.com/me/media?fields=id,media_type,media_url&limit=8&access_token=${instagram}`

app.get('/api/insta', async(req, res) => {
    const data = await fetch(apiURL).then(res => {
        return res.json()
    })
    return res.json(data)
})

app.get('/api/upcoming', (req, res) => {
    return res.json(upcoming)
})

app.get('/api/recent', (req, res) => {
    return res.json(recent)
})

app.get('/api/events', (req, res) => {
    return res.json(events)
})

app.get('/api/copresident', (req, res) => {
    return res.json(copresident)
})

app.get('/api/secretary', (req, res) => {
    return res.json(secretary)
})

app.get('/api/treasurer', (req, res) => {
    return res.json(treasurer)
})

app.get('/api/hr', (req, res) => {
    return res.json(hr)
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


const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})