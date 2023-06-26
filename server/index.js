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
                room : room.results[0],
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

cron.schedule('0 * * * *', () => {
    console.log('Updating from notion (every hour)');
    gateway();
});

app.get('/api/upcoming', async(req, res) => {
    return res.json(upcoming)
})

app.get('/api/recent', async(req, res) => {
    return res.json(recent)
})

app.get('/api/events', async(req, res) => {
    return res.json(events)
})

app.get('/api/posts', (req, res) => {
    return res.json(posts)
})

const apiURL = `https://graph.instagram.com/me/media?fields=id,media_type,media_url&limit=8&access_token=${instagram}`

app.get('/api/insta', async(req, res) => {

    const data = await fetch(apiURL).then(res => {
        return res.json()
    })
    return res.json(data)
})

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})