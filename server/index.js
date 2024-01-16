// These imports are what we need to run the server
import express from "express";
import http from "http";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
// Other things we need
import { Client } from '@notionhq/client';
import fetch from "node-fetch";
import fs from 'fs/promises'
import cron from 'node-cron'
// These are just importing our API keys and other dotenv variables
import { port, instagram, notionapi } from "./config/index.js";
// These are the files that hold the information.
// The way I set it up was:
// 1. The app has files with data
// 2. The app fetches the required information at scheduled intervals
// 3. The app replaces the files it had originally with the new information 
//    it fetched
// 4. When the Client app tries to access the information, it will see 
//    information that was recently updated without the need to fetch the 
//    information every time the client is accessed.
import { 
    upcoming, 
    recent, 
    events, 
    pastevents, 
    copresident, 
    secretary, 
    treasurer, 
    hr, 
    competitive, 
    marketing, 
    operations, 
    partnerships 
} from "./data/yge/index.js"
import { eventsArray, eventsUpdate, pasteventsArray, pasteventsUpdate } from "./functions/events.js";
import { recentArray, recentUpdate, upcomingArray, upcomingUpdate } from "./functions/games.js";
import { 
    copresidentArray, 
    copresidentUpdate, 
    hrArray, 
    hrUpdate, 
    treasurerArray, 
    treasurerUpdate, 
    secretaryArray, 
    secretaryUpdate,
    operationsArray,
    operationsUpdate,
    competitiveArray,
    competitiveUpdate,
    partnershipsArray,
    partnershipsUpdate,
    marketingArray,
    marketingUpdate 
} from "./functions/staff.js"
import { 
    commonIPs, 
    commonURLs, 
    sharePointIPs, 
    sharePointURLs, 
    skypeIPs, 
    skypeURLs, 
    exchangeIPs, 
    exchangeURLs 
} from './data/ats/index.js'
import { playersUpdate, structuredData } from "./functions/players.js";
////////////////////////////////////////////////////////////////////////////

// Connect to NotionAPI
const notion = new Client({auth: notionapi});
// Start the Express server
const app = express();

app.use(cors({origin: true, credentials: true}))
app.use(helmet())
app.use(compression());

////////////////////////////////////////////////////////////////////////////

// If you need to check the prop IDs, uncomment the next few lines

async function checkProps() {
    // Database for Games
    // const databaseId = '3e4d3d86e5644511a000300583ecdb98';
    // Database for Events
    // const databaseId = '218b1eb243774e5b8c23b29a23db0df6';
    // Database for Staff
    // const databaseId = '02cb5f77092c413483cc744d04f6a87a';
    // Database for Players
    const databaseId = 'b2e92fa2fde24844877f404772880ba1';
    const dbResponse = await notion.databases.retrieve({
        database_id: databaseId,
    })
    console.log(dbResponse)
}
// checkProps()

////////////////////////////////////////////////////////////////////////////


// async function games() {
//     try {
//         console.log("try")
//         await upcomingUpdate();
//         await recentUpdate();
//     } catch (err) {
//       console.log(err);
//     }
//     finally {
//         await fs.writeFile('./data/yge/upcoming.js', "export default " + JSON.stringify(upcomingArray));
//         await fs.writeFile('./data/yge/recent.js', "export default " + JSON.stringify(recentArray));
//     }
// };

// async function eventsEdit() {
//     try {
//         console.log("try")
//         await eventsUpdate();
//         await pasteventsUpdate();
//     } catch (err) {
//       console.log(err);
//     }
//     finally {
//         console.log("writing files!")
//         await fs.writeFile('./data/yge/events.js', "export default " + JSON.stringify(eventsArray));
//         await fs.writeFile('./data/yge/pastevents.js', "export default " + JSON.stringify(pasteventsArray));
//     }
// };
async function playaEdit() {
    try {
        console.log("try")
        await playersUpdate();
    } catch (err) {
      console.log(err);
    }
    finally {
        console.log("writing files!")
        await fs.writeFile('./data/yge/events.js', "export default " + JSON.stringify(structuredData));
    }
};

// async function staff() {
//     try {
//         await copresidentUpdate();
//         await secretaryUpdate();
//         await treasurerUpdate();
//         await hrUpdate();
//         await marketingUpdate();
//         await partnershipsUpdate();
//         await operationsUpdate();
//         await competitiveUpdate();
//     } catch (err) {
//       console.log(err);
//     }
//     finally {
//         await fs.writeFile('./data/yge/copresident.js', "export default " + JSON.stringify(copresidentArray));
//         await fs.writeFile('./data/yge/secretary.js', "export default " + JSON.stringify(secretaryArray));
//         await fs.writeFile('./data/yge/treasurer.js', "export default " + JSON.stringify(treasurerArray));
//         await fs.writeFile('./data/yge/hr.js', "export default " + JSON.stringify(hrArray));
//         await fs.writeFile('./data/yge/marketing.js', "export default " + JSON.stringify(marketingArray));
//         await fs.writeFile('./data/yge/partnerships.js', "export default " + JSON.stringify(partnershipsArray));
//         await fs.writeFile('./data/yge/operations.js', "export default " + JSON.stringify(operationsArray));
//         await fs.writeFile('./data/yge/competitive.js', "export default " + JSON.stringify(competitiveArray));
//     }
// };
// YGE End
//ATS


let microsoftAPI = ''
let exchangeURLsArray = [];
let exchangeIPsArray = [];
let skypeURLsArray = [];
let skypeIPsArray = [];
let sharePointURLsArray = [];
let sharePointIPsArray = [];
let commonURLsArray = [];
let commonIPsArray = [];

async function microsoftParse() {
    console.log('we\'re in')
    microsoftAPI = await fetch(microURL).then(res => {
        console.log('get it. got it? good.')
        return res.json()
    })
    for (let i = 0; i < microsoftAPI.length; i++) {
        if (microsoftAPI[i].serviceArea == "Exchange"){
            if(microsoftAPI[i].urls != undefined) {
                for(let x = 0; x < microsoftAPI[i].urls.length; x++) {
                    exchangeURLsArray[exchangeURLsArray.length] = microsoftAPI[i].urls[x]
                }
            }
            if(microsoftAPI[i].ips != undefined) {
                for(let x = 0; x < microsoftAPI[i].ips.length; x++) {
                    if(microsoftAPI[i].ips[x].includes(':')) {
                        break;
                    } else {
                    exchangeIPsArray[exchangeIPsArray.length] = microsoftAPI[i].ips[x]
                    }
                }
            }
        } else if (microsoftAPI[i].serviceArea == "Skype"){
            if(microsoftAPI[i].urls != undefined) {
                for(let x = 0; x < microsoftAPI[i].urls.length; x++) {
                    skypeURLsArray[skypeURLsArray.length] = microsoftAPI[i].urls[x]
                }
            }
            if(microsoftAPI[i].ips != undefined) {
                for(let x = 0; x < microsoftAPI[i].ips.length; x++) {
                    if(microsoftAPI[i].ips[x].includes(':')) {
                        break;
                    } else {
                    skypeIPsArray[skypeIPsArray.length] = microsoftAPI[i].ips[x]
                }}
            }
        } else if (microsoftAPI[i].serviceArea == "SharePoint"){
            if(microsoftAPI[i].urls != undefined) {
                for(let x = 0; x < microsoftAPI[i].urls.length; x++) {
                    sharePointURLsArray[sharePointURLsArray.length] = microsoftAPI[i].urls[x]
                }
            }
            if(microsoftAPI[i].ips != undefined) {
                for(let x = 0; x < microsoftAPI[i].ips.length; x++) {
                    if(microsoftAPI[i].ips[x].includes(':')) {
                        break;
                    } else {
                        sharePointIPsArray[sharePointIPsArray.length] = microsoftAPI[i].ips[x]
                    }
                }
            }
        } else if (microsoftAPI[i].serviceArea == "Common"){
            if(microsoftAPI[i].urls != undefined) {
                for(let x = 0; x < microsoftAPI[i].urls.length; x++) {
                    commonURLsArray[commonURLsArray.length] = microsoftAPI[i].urls[x]
                }
            }
            if(microsoftAPI[i].ips != undefined) {
                for(let x = 0; x < microsoftAPI[i].ips.length; x++) {
                    if(microsoftAPI[i].ips[x].includes(':')) {
                        break;
                    } else {
                    commonIPsArray[commonIPsArray.length] = microsoftAPI[i].ips[x]
                    }
                }
            }
        } else {
            console.log(microsoftAPI[i].serviceArea)
        }
    }

}

async function exchange() {
    try {
        await microsoftParse();
    } catch (err) {
      console.log(err);
    }
    finally {
        await fs.writeFile('./data/ats/ExchangeURLs.js', "export default " + JSON.stringify(exchangeURLsArray));
        await fs.writeFile('./data/ats/ExchangeIPs.js', "export default " + JSON.stringify(exchangeIPsArray));
        await fs.writeFile('./data/ats/SkypeURLs.js', "export default " + JSON.stringify(skypeURLsArray));
        await fs.writeFile('./data/ats/SkypeIPs.js', "export default " + JSON.stringify(skypeIPsArray));
        await fs.writeFile('./data/ats/SharePointURLs.js', "export default " + JSON.stringify(sharePointURLsArray));
        await fs.writeFile('./data/ats/SharePointIPs.js', "export default " + JSON.stringify(sharePointIPsArray));
        await fs.writeFile('./data/ats/CommonURLs.js', "export default " + JSON.stringify(commonURLsArray));
        await fs.writeFile('./data/ats/CommonIPs.js', "export default " + JSON.stringify(commonIPsArray));
    }
};

cron.schedule('10 * * * *', () => {
    console.log('Updating games from notion (every hour)');
    games();
});
cron.schedule('47 * * * *', () => {
    console.log('Updating events from notion (every hour)');
    eventsEdit();
});

cron.schedule('30 0 * * *', () => {
    console.log('Updating staff from notion (every day at 12:30 AM)');
    staff();
});

cron.schedule('45 1 1 * *', () => {
    console.log('Updating Microsoft stuff every month on the first at 1:45AM');
    exchange();
});

cron.schedule('* * * * *', () => {
    console.log('WEEWOOO');
    playaEdit();
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

app.get('/api/pastevents', (req, res) => {
    return res.json(pastevents)
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


const microURL = `https://endpoints.office.com/endpoints/Worldwide?ClientRequestId=b10c5ed1-bad1-445f-b386-b919946339a7`

app.get('/api/exchangeURLs', async(req, res) => {
    return res.json(exchangeURLs)
})

app.get('/api/exchangeIPs', async(req, res) => {
    return res.json(exchangeIPs)
})

app.get('/api/skypeIPs', async(req, res) => {
    return res.json(skypeIPs)
})

app.get('/api/skypeURLs', async(req, res) => {
    return res.json(skypeURLs)
})
app.get('/api/sharePointIPs', async(req, res) => {
    return res.json(sharePointIPs)
})

app.get('/api/sharePointURLs', async(req, res) => {
    return res.json(sharePointURLs)
})
app.get('/api/commonIPs', async(req, res) => {
    return res.json(commonIPs)
})

app.get('/api/commonURLs', async(req, res) => {
    return res.json(commonURLs)
})


const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})

// staff()
// gateway()