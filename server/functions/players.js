import { notionapi } from "../config/index.js";
import { Client } from '@notionhq/client';

const notion = new Client({auth: notionapi});

let playersPageIds;
let playersArray = [];

// async function playersUpdate() {
//     console.log("players")
//     const databaseId = '218b1eb243774e5b8c23b29a23db0df6';
//     const dbResponse = await notion.databases.query({
//         database_id: databaseId,
//         filter:{
//             and: [
        
//             {
//                 property: 'Status',
//                 status: {
//                     equals: "Upcoming"
//                 }
//             },
//             {
//                 property: 'Tags',
//                 multi_select: {
//                     does_not_contain: "Tabling"
//                 }
//             },
//             {
//                 property: 'Date',
//                 date: {
//                     on_or_after: todaysDate,
//                 },
//             },
//         ]},
//         sorts: [
//             {
//                 property: 'Date',
//                 direction: 'ascending'
//             }
//         ]
//     })
//     // console.log(dbResponse)
//     playersPageIds = dbResponse.results.map((resp) => resp.id)
//     console.log(playersPageIds)
//     playersArray = [];
//     for (let i = 0; i < playersPageIds.length; i++) {
//         const pageId = playersPageIds[i];

//         const roomId = "WAf%3F";
//         const room = await notion
//             .pages
//             .properties
//             .retrieve({page_id: pageId, property_id: roomId})

//         let roomDisp = room.results[0] == undefined ? '' : room.results[0].rich_text.text.content

//         const dateId = "mh%7D%5E";
//         const date = await notion
//             .pages
//             .properties
//             .retrieve({page_id: pageId, property_id: dateId})
//         let dateDisp = date.date == null ? '' : dateFormater(date.date.start, 'players')
//         let timeDisp = (date.date == null) || (date.date.start.length < 11) ? '' : timeFormater(date.date, 'players')
        
//         const eventId = "title";
//         const event = await notion
//             .pages
//             .properties
//             .retrieve({page_id: pageId, property_id: eventId})
        
//         let titleDisp = event == null ? '' : event.results[0].title.text.content
        
//         const descId = "cdbQ";
//         const desc = await notion
//             .pages
//             .properties
//             .retrieve({page_id: pageId, property_id: descId})

//         let descDisp = desc.results[0] == null ? "" : desc.results[0].rich_text.text.content

//         const signupId = "rm%7CY";
//         const signup = await notion
//             .pages
//             .properties
//             .retrieve({page_id: pageId, property_id: signupId})

//         let signupDisp = signup.url == null ? "" : signup.url

//         playersArray[i] = {
//             id: pageId,
//             name: titleDisp,
//             role: dateDisp,
//             ign: timeDisp,
//             socials: roomDisp,
//         }
        
//     }
// };
let structuredData = {};
async function playersUpdate() {
    console.log("players")
    const databaseId = 'b2e92fa2fde24844877f404772880ba1';
    const dbResponse = await notion.databases.query({
        database_id: databaseId,
        filter:{
            and: [
            {
                property: 'Status',
                multi_select: {
                    is_empty: true
                }
            }
        ]}
    })
    let eventsPageIds = dbResponse.results.map((resp) => resp.id)
    // Iterate through each player
    eventsPageIds.forEach((respp) => {
    // for (const respp of eventsPageIds) {
        // console.log(child);
        // }
      // Get the team ID from the player's team property
    //   const gamename = respp.properties.G;
    //   const gameId = "%5Ek~R";
    //   const gamename = await notion
    //         .pages
    //         .properties
    //         .retrieve({page_id: respp.id, property_id: gameId})

    let gamename = respp
        console.log(gamename)

    //   if (!structuredData[gamename]) {

    //     structuredData[gamename] = {
    //       id: 1,
    //       name: gamename.title,
    //       players: [],
    //     };
    //   }

    //   const playerData = {
    //     id: respp.id,
    //     name: respp.properties.name.title[0].text.content,
    //   };

    //   structuredData[gamename].players.push(respp); 
})}


export { structuredData, playersUpdate }