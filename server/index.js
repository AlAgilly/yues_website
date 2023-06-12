import express from "express";
import http from "http";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import {port, allowedDomains, instagram, notionapi} from "./config/index.js";
import posts from "./data/index.js"
import { Client } from '@notionhq/client';
import fetch from "node-fetch";

var date = new Date();
date.toISOString();

const notion = new Client({ auth: notionapi });

const app = express();

app.use(cors({origin: true, credentials: true}))

// const corsOptions = {
//     origin: 'http://127.0.0.1:5173/',
//     credentials: true, //access-control-allow-credentials:true
//     optionSuccessStatus: 200
// }
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5173/");
//     res.setHeader(
//       "Access-Control-Allow-Methods",
//       "OPTIONS, GET, POST, PUT, PATCH, DELETE"
//     );
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//     next();
//   });
// app.use(cors(corsOptions))

app.use(helmet())
app.use(compression());


// NOTION START
// get the pages
let resu;
(async () => {
  const databaseId = '3e4d3d86e5644511a000300583ecdb98';
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      or: [
        {
          property: 'Date',
          date: {
            after: date,
        },
        },
      ],
    },
    sorts: [
      {
        property: 'Date',
        direction: 'ascending',
      },
    ],
  })
  resu = response.results.map((resp) => resp.id)})
  ();

  app.get('/api/upcoming', async(req, res) => {
    const full = [0,0,0]
    for(let i = 0; i < 3; i++) {
      const pageId = resu[i];
      const game = "vq%7CF";
      const gameres = await notion.pages.properties.retrieve({ page_id: pageId, property_id: game })

      const team = "%3DbFt";
      const teamres = await notion.pages.properties.retrieve({ page_id: pageId, property_id: team })

      const date = "ynaI";
      const dateres = await notion.pages.properties.retrieve({ page_id: pageId, property_id: date })

      const eventname = "title";
      const eventres = await notion.pages.properties.retrieve({ page_id: pageId, property_id: eventname })

      if(eventres == null || dateres.date == null || teamres.select == null || gameres.select == null){
        full[i] = {}
      } else {
        full[i] = {
          eventname: eventres.results[0].title.text.content,
          date: dateres.date.start,
          team: teamres.select.name,
          game: gameres.select.name,
        };

      }

    }
    
    return res.send(full)
})
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