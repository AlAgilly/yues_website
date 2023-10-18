import { notionapi } from "../config/index.js";
import { Client } from '@notionhq/client';

const notion = new Client({auth: notionapi});

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

        const discordId = "J%60%3Db"
        const discord = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: discordId})
        

        if (name == null || position == null || team == undefined) {
            copresidentArray[i] = {}
        } else {
            copresidentArray[i] = {
                id: pageId,
                name: name.results[0].title.text.content,
                discord: discord.results[0].rich_text.text.content,
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
                    property: 'Team',
                    multi_select: {
                        contains: "Finance"
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

            const discordId = "J%60%3Db"
            const discord = await notion
                .pages
                .properties
                .retrieve({page_id: pageId, property_id: discordId})
            

        if (name == null || position == null || team == undefined) {
            treasurerArray[i] = {}
        } else {
            treasurerArray[i] = {
                id: pageId,
                discord: discord.results[0].rich_text.text.content,
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

        const discordId = "J%60%3Db"
        const discord = await notion
            .pages
            .properties
            .retrieve({page_id: pageId, property_id: discordId})
        

        if (name == null || position == null || team == undefined) {
            marketingArray[i] = {}
            // console.log('oop')
        } else {
            marketingArray[i] = {
                id: pageId,
                name: name.results[0].title.text.content,
                discord: discord.results[0].rich_text.text.content,
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

            const discordId = "J%60%3Db"
            const discord = await notion
                .pages
                .properties
                .retrieve({page_id: pageId, property_id: discordId})
            

        if (name == null || position == null || team == undefined) {
            partnershipsArray[i] = {}
        } else {
            partnershipsArray[i] = {
                id: pageId,
                name: name.results[0].title.text.content,
                discord: discord.results[0].rich_text.text.content,
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

            const discordId = "J%60%3Db"
            const discord = await notion
                .pages
                .properties
                .retrieve({page_id: pageId, property_id: discordId})
            

        if (name == null || position == null || team == undefined) {
            operationsArray[i] = {}
        } else {
            operationsArray[i] = {
                id: pageId,
                name: name.results[0].title.text.content,
                discord: discord.results[0].rich_text.text.content,
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

            const discordId = "J%60%3Db"
            const discord = await notion
                .pages
                .properties
                .retrieve({page_id: pageId, property_id: discordId})
            

        if (name == null || position == null || team == undefined) {
            competitiveArray[i] = {}
        } else {
            competitiveArray[i] = {
                id: pageId,
                name: name.results[0].title.text.content,
                discord: discord.results[0].rich_text.text.content,
                position: position.select.name,
                team: team.multi_select[0].name,
            }
        }
    }
};

export {
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
    marketingUpdate,
}