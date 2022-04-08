const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 4000

// Import Employees route
const employeesRoute = require('./src/routes/employees.route')

// Import Accounts route
const accountsRoute = require('./src/routes/accounts.route')

app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.get('/', (request, response) => {
    response.send('Welcome to MCC Team 2\'S API for IRCITE!')
})

// Link API's
app.use('/management/employee/', employeesRoute)
app.use('/management/account', accountsRoute)

app.listen(port, () => {
    console.log(`MCC Team 2's Backend Server listening to port ${port}`)
})