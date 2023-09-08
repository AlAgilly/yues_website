import express from "express";
import http from "http";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { port, instagram, notionapi } from "./config/index.js";
import { upcoming, recent, events, pastevents, copresident, secretary, treasurer, hr, competitive, marketing, operations, partnerships } from "./data/yge/index.js"
import { commonIPs, commonURLs, sharePointIPs, sharePointURLs, skypeIPs, skypeURLs, exchangeIPs, exchangeURLs } from './data/ats/index.js'
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
    for (let i = 0; i < upcomingPageIds.length; i++) {
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
            
        let dateDisp = date.date == null ? '' : dateFormater(date.date.start, 'upcoming')
        let timeDisp = ((date.date == null) || (date.date.start < 11)) ? '' : timeFormater(date.date, 'upcoming')


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
                date: dateDisp + timeDisp,
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
    // console.log(dbResponse)
    recentPageIds = dbResponse.results.map((resp) => resp.id)
    recentArray = [];
    for (let i = 0; i < recentPageIds.length; i++) {
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
    
        let dateDisp = date.date == null ? '' : dateFormater(date.date.start, 'recent')

        const eventId = "title";
        const event = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: eventId})

        const winsId = "JID%3D"
        const wins = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: winsId})
        let winsDisp = wins.number == null ? "0" : wins.number

        const lossesId = "tZ%7B%5C"
        const losses = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: lossesId})
        let lossesDisp = losses.number == null ? "0" : losses.number

        if (event == null || date.date == null || team.select == null || game.select == null) {
            recentArray[i] = {}
        } else {
            recentArray[i] = {
                id: pageId,
                eventname: event.results[0].title.text.content,
                wins: winsDisp,
                losses: lossesDisp,
                date: dateDisp,
                game: game.select.name,
                team: team.select.name,
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
                direction: 'ascending'
            }
        ]
    })
    // console.log(dbResponse)
    eventsPageIds = dbResponse.results.map((resp) => resp.id)
    eventsArray = [];
    for (let i = 0; i < eventsPageIds.length; i++) {
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
        let dateDisp = date.date == null ? '' : dateFormater(date.date.start, 'events')
        let timeDisp = (date.date == null) || (date.date.start.length < 11) ? '' : timeFormater(date.date, 'events')
        
        const eventId = "title";
        const event = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: eventId})
        
        let titleDisp = event == null ? '' : event.results[0].title.text.content
        
        const descId = "cdbQ";
        const desc = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: descId})

        let descDisp = desc.results[0] == null ? "" : desc.results[0].rich_text.text.content

        const signupId = "rm%7CY";
        const signup = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: signupId})

        let signupDisp = signup.url == null ? "" : signup.url

        eventsArray[i] = {
            id: pageId,
            event: titleDisp,
            date: dateDisp,
            time: timeDisp,
            room: roomDisp,
            desc: descDisp,
            signup: signupDisp,
        }
        
    }
};

let pasteventsPageIds;
let pasteventsArray = [];

async function pasteventsUpdate() {
    const databaseId = '218b1eb243774e5b8c23b29a23db0df6';
    const dbResponse = await notion.databases.query({
        database_id: databaseId,
        filter: 
                {
                    and: [ {
                        property: 'Status',
                        status: {
                            equals: "Done"
                    }
                }, {
                    property: 'Tags',
                    multi_select: {
                        does_not_contain: "Tabling"
                    }
                }, {
                    property: 'Tags',
                    multi_select: {
                        does_not_contain: "Tryout"
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
    pasteventsPageIds = dbResponse.results.map((resp) => resp.id)
    pasteventsArray = [];
    for (let i = 0; i < pasteventsPageIds.length; i++) {
        const pageId = pasteventsPageIds[i];

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
        let dateDisp = date.date == null ? '' : dateFormater(date.date.start, 'events')
        let timeDisp = (date.date == null) || (date.date.start.length < 11) ? '' : timeFormater(date.date, 'events')
        
        const eventId = "title";
        const event = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: eventId})
            // console.log(event)
        
        let titleDisp = event == null ? '' : event.results[0].title.text.content
        
        const descId = "cdbQ";
        const desc = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: descId})

            let descDisp = desc.results[0] == null ? "" : desc.results[0].rich_text.text.content
            
        const galleryId = "cNMT";
        const gallery = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: galleryId})

        let galleryDisp = gallery.url == null ? "" : gallery.url

        pasteventsArray[i] = {
            id: pageId,
            event: titleDisp,
            date: dateDisp,
            time: timeDisp,
            room: roomDisp,
            desc: descDisp,
            gallery: galleryDisp
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

function dateFormater(dateStr, options){
    let newDate = new Date(dateStr)
    let returnDate = ''
    switch(options){
        case 'events':
            returnDate = newDate.toLocaleString('en-US', {weekday: 'long'})
            returnDate += ' ' + newDate.toLocaleString('en-US', {month: 'short', day: "numeric"})
            break;
        case 'recent':
            returnDate = newDate.toLocaleString('en-US', {month: 'short', day: "numeric"})
            break;
        case 'update':
            returnDate = newDate.toLocaleString('en-US', {month: 'short', day: "numeric"})
            break;
        default:
            returnDate = 'TBD'
    }
    return returnDate;  
}

function timeFormater(dateObj, options){
    let timeStart = new Date(dateObj.start)
    let timeEnd = dateObj.end == null ? '' : new Date(dateObj.end)
    let returnTime = ''
    switch(options){
        case 'events':
            returnTime = timeStart.toLocaleString('en-US', {hour12: true, hour: 'numeric', minute:'2-digit'})
            returnTime = returnTime.replace(/ AM/g, '').replace(/ PM/g, '')
            let returnTime2 = timeEnd == '' ? '' : ' - ' + timeEnd.toLocaleString('en-US', {hour12: true, hour: 'numeric', minute:'2-digit'})
            returnTime += returnTime2.replace(/ AM/g, '').replace(/ PM/g, '')
            break;
        case 'update':
            returnTime = timeStart.toLocaleString('en-US', {hour12: true, hour: 'numeric', minute:'2-digit'})
            returnTime = returnTime.replace(/ /g, '').replace(/ /g, '')
            break;
        default:
            returnTime = 'XX:XX'
    }
    return returnTime;   
}

async function gateway() {
    try {
        await upcomingUpdate();
        await recentUpdate();
        await eventsUpdate();
        await pasteventsUpdate();
    } catch (err) {
      console.log(err);
    }
    finally {
        await fs.writeFile('./data/yge/upcoming.js', "export default " + JSON.stringify(upcomingArray));
        await fs.writeFile('./data/yge/recent.js', "export default " + JSON.stringify(recentArray));
        await fs.writeFile('./data/yge/events.js', "export default " + JSON.stringify(eventsArray));
        await fs.writeFile('./data/yge/pastevents.js', "export default " + JSON.stringify(pasteventsArray));
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

cron.schedule('*/3 * * * *', () => {
    console.log('Updating Events and games from notion (every hour)');
    gateway();
});

cron.schedule('30 0 * * *', () => {
    console.log('Updating staff from notion (every day at 12:30 AM)');
    staff();
});

cron.schedule('45 1 1 * *', () => {
    console.log('Updating Microsoft stuff every month on the first at 1:45AM');
    exchange();
});

const apiURL = `https://graph.instagram.com/me/media?fields=id,media_type,media_url&limit=8&access_token=${instagram}`

app.get('/api/insta', async(req, res) => {
    const data = await fetch(apiURL).then(res => {
        return res.json()
    })
    return res.json(data)
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


const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})
