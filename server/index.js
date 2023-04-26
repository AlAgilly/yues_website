import express from "express";
import http from "http";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import {port, allowedDomains, instagram} from "./config/index.js";
import posts from "./data/index.js"
import fetch from 'cross-fetch';

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
app.use(compression())

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