const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const loginRoute = require('./routes/login.route')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set("view engine", "ejs")

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.render('home')
})

app.use(loginRoute)

app.use((req, res) => {
    res.send('404 Page not found')
})

module.exports = app