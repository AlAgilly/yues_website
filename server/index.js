var express = require('express');
var http = require('http');
var cors = require('cors');
var helmet = require('helmet');
var compression = require('compression');
var allowedDomains = require('./config/index.js');
var instagram = require('./config/index.js');
var posts = require('./data/index.js');
var fetch = require('node-fetch');

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

var apiURL = `https://graph.instagram.com/me/media?fields=id,media_type,media_url&limit=8&access_token=${ instagram }`

app.get('/api/insta', async(req, res) => {

    var data = await fetch(apiURL).then(res => {
        return res.json()
    }).catch(() => {
        return res.json("hello")
    })
    return res.json(data)
})

const server = http.createServer(app);
server.listen(5000);
