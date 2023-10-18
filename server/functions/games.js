import { notionapi } from "../config/index.js";
import { Client } from '@notionhq/client';
import { todaysDate, dateFormater, timeFormater } from "./date.js";

const notion = new Client({auth: notionapi});

let upcomingPageIds;
let upcomingArray = [];

async function upcomingUpdate() {
    console.log("upcoming")
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
    console.log(upcomingPageIds)
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
        console.log(upcomingArray[i])
    }
};

let recentPageIds;
let recentArray = [];

async function recentUpdate() {
    console.log("recent")
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
    console.log(recentPageIds)
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

        if (event == null ||  team.select == null || game.select == null) {
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
        console.log(recentArray[i])
    }
};

export {recentArray, recentUpdate, upcomingArray, upcomingUpdate }