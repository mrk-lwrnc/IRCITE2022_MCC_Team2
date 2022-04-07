const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 4000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (request, response) => {
    response.send('Welcome to MCC Team 2\'S API for IRCITE!')
})

app.listen(port, () => {
    console.log(`MCC Team 2's Backend Server listening to port ${port}`)
})