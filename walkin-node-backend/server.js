const express = require('express')
const app = express()
const request = require('request');
const cors = require('cors')

// Mahdollistetaan yhteys react-frontin ja node-sovelluksen välillä
app.use(cors())

// Määritellään node-sovellus tarjoamaan API:n lisäksi react-frontin kansiosta 'build'
app.use(express.static('build'))

const { getData } = require('./fetch')

let data;

app.get('/api/events', async (req, res) =>  {
  if (req.query.distance_filter) {
    let distance_filter = encodeURIComponent(req.query.distance_filter)
    let url = 'http://open-api.myhelsinki.fi/v1/events/?distance_filter='
  
        data = await getData(url + distance_filter,'filtteriOn') 
        //App.js tiedostossa on events.data.map funktio joka parsettaa JSON:t kasaat.     
        res.json(JSON.stringify(data))
      
  } else {
    let url = 'http://open-api.myhelsinki.fi/v1/events/'
    request(url, async function (error, response, body) {
      if (!error && response.statusCode == 200) {
        data = await getData(url,'filtteriOff')
        //tämä tieto tulee api/eventsiin
        res.json(JSON.parse(data))
      }
    })
  }
}) 



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

