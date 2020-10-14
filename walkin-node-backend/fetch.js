
const fetch = require('node-fetch')

async function getData(data,mode) {
    
    let response = await fetch(data)
    let json = await response.json()
    let info = json

    if (mode=='filtteriOff'){
    return JSON.stringify(info)
    } else {
    return info.data
    }
}

module.exports = { getData }