
import express from "express";
import http from "http";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { port, allowedDomains } from "./config/index.js";
import posts from "./data/index.js"

const app = express();

app.use(cors({origin: allowedDomains, credentials: true}))
app.use(helmet())
app.use(compression())

app.get('/api/posts', (req, res) => {
    return res.json(posts)
})

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})
