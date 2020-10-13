const express = require('express')
const app = express()
const request = require('request');
const axios = require('axios')
const cors = require('cors')

// Mahdollistetaan yhteys react-frontin ja node-sovelluksen välillä
app.use(cors())

// Määritellään node-sovellus tarjoamaan API:n lisäksi react-frontin kansiosta 'build'
app.use(express.static('build'))

// ?distance_filter=60.1%2C24.9%2C6
app.get('/api/events', (req, res) =>  {
  if (req.query.distance_filter) {
    let distance_filter = encodeURIComponent(req.query.distance_filter)
    request('http://open-api.myhelsinki.fi/v1/events/?distance_filter=' + distance_filter, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body)
      }
    })
  } else {
    request('http://open-api.myhelsinki.fi/v1/events/?limit=44', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body)
      }
    })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
