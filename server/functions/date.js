// Grabbing todays date so that we can update the notion information 
// with info before/after today
var todaysDate = new Date().toISOString().substring(0,10);

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

export {todaysDate, dateFormater, timeFormater}