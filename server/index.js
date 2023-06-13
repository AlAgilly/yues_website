import express from "express";
import http from "http";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import {port, allowedDomains, instagram, notionapi} from "./config/index.js";
import posts from "./data/index.js"
import {Client} from '@notionhq/client';
import fetch from "node-fetch";

var date = new Date().toISOString().substring(0,10);

const notion = new Client({auth: notionapi});

const app = express();

app.use(cors({origin: true, credentials: true}))

// const corsOptions = {     origin: 'http://127.0.0.1:5173/',     credentials:
// true, //access-control-allow-credentials:true     optionSuccessStatus: 200 }
// app.use((req, res, next) => {
// res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5173/");
// res.setHeader(       "Access-Control-Allow-Methods",       "OPTIONS, GET,
// POST, PUT, PATCH, DELETE"     );
// res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//     next();   }); app.use(cors(corsOptions))

app.use(helmet())
app.use(compression());

// NOTION START get the pages
let upcomingres;
(async() => {
    const databaseId = '3e4d3d86e5644511a000300583ecdb98';
    const response = await notion.databases.query({
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
        upcomingres = response.results.map((resp) => resp.id)
})();

app.get('/api/upcoming', async(req, res) => {
    const full = [0, 0, 0]
    for (let i = 0; i < 3; i++) {
        const pageId = upcomingres[i];
        const game = "vq%7CF";
        const gameres = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: game})

        const team = "%3DbFt";
        const teamres = await notion.pages.properties.retrieve({page_id: pageId, property_id: team})

        const date = "ynaI";
        const dateres = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: date})

        const eventname = "title";
        const eventres = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: eventname})


            full[i] = {
                eventname: eventres.results[0].title.text.content,
                date: dateres.date.start,
                team: teamres.select.name,
                game: gameres.select.name
            };


    }

    return res.send(full)
})
//recent games
let recentres;
(async() => {
    const databaseId = '3e4d3d86e5644511a000300583ecdb98';
    const response = await notion
        .databases
        .query({
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
        recentres = response
        .results
        .map((resp) => resp.id)
})();

app.get('/api/recent', async(req, res) => {
    const rec = [0, 0, 0]
    for (let i = 0; i < 3; i++) {
        const pageId = recentres[i];
        const game = "vq%7CF";
        const gameres = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: game})

        const team = "%3DbFt";
        const teamres = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: team})

        const date = "ynaI";
        const dateres = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: date})

        const eventname = "title";
        const eventres = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: eventname})

        if (eventres == null || dateres.date == null || teamres.select == null || gameres.select == null) {
            rec[i] = {}
        } else {
            rec[i] = {
                eventname: eventres.results[0].title.text.content,
                date: dateres.date.start,
                team: teamres.select.name,
                game: gameres.select.name
            };

        }

    }

    return res.send(rec)
});
//events 
let eventsres;
(async() => {
    const databaseId = '218b1eb243774e5b8c23b29a23db0df6';
    const response = await notion
        .databases
        .query({
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
        eventsres = response
        .results
        .map((resp) => resp.id)
        console.log(eventsres)
})();

app.get('/api/events', async(req, res) => {
    const eve = [0, 0, 0]
    for (let i = 0; i < 3; i++) {
        const pageId = eventsres[i];
        const room = "WAf%3F";
        const roomres = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: room})

        const time = "mh%7D%5E";
        const timeres = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: time})

        const date = "mh%7D%5E";
        const dateres = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: date})

        const eventname = "title";
        const eventres = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: eventname})

        eve[i] = {
                  eventname: eventres.results[0].title.text.content,
                  date: dateres.date.start.substring(0,10),
                  time: timeres.date.start.substring(11,16) + " - " + timeres.date.end.substring(11,16),
                  room : roomres.results[0].rich_text.text.content,
              };

    }

    return res.send(eve)
})
// (async () => {
//   const databaseId = '218b1eb243774e5b8c23b29a23db0df6';
//   const response = await notion.databases.retrieve({ database_id: databaseId });
//   console.log(response);
// })();
// NOTION END
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