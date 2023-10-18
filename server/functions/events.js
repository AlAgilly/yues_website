import { notionapi } from "../config/index.js";
import { Client } from '@notionhq/client';
import { todaysDate, dateFormater, timeFormater } from "./date.js";

const notion = new Client({auth: notionapi});

let eventsPageIds;
let eventsArray = [];

async function eventsUpdate() {
    console.log("events")
    const databaseId = '218b1eb243774e5b8c23b29a23db0df6';
    const dbResponse = await notion.databases.query({
        database_id: databaseId,
        filter:{
            and: [
        
            {
                property: 'Status',
                status: {
                    equals: "Upcoming"
                }
            },
            {
                property: 'Tags',
                multi_select: {
                    does_not_contain: "Tabling"
                }
            },
            {
                property: 'Date',
                date: {
                    on_or_after: todaysDate,
                },
            },
        ]},

        
        sorts: [
            {
                property: 'Date',
                direction: 'ascending'
            }
        ]
    })
    // console.log(dbResponse)
    eventsPageIds = dbResponse.results.map((resp) => resp.id)
    console.log(eventsPageIds)
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
    console.log("past events")
    const databaseId = '218b1eb243774e5b8c23b29a23db0df6';
    const dbResponse = await notion.databases.query({
        database_id: databaseId,
        filter: 
                {
                    and: [ 
                        {
                            property: 'Status',
                            status: {
                                equals: "Done"
                            }
                        }, 
                        {
                            property: 'Tags',
                            multi_select: {
                                does_not_contain: "Tabling"
                            }
                        }, 
                        {
                            property: 'Tags',
                            multi_select: {
                                does_not_contain: "Tryout"
                            }
                        },
                        {
                            property: 'Date',
                            date: {
                                before: todaysDate,
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
    pasteventsPageIds = dbResponse.results.map((resp) => resp.id)
    console.log(pasteventsPageIds)
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
        console.log(pasteventsArray[i])
    }
    console.log("event update done!")
};

export { eventsArray, eventsUpdate, pasteventsArray, pasteventsUpdate}