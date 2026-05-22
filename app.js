const express = require('express')
const app = express()
const connectToDatabase = require('./Database')

connectToDatabase()

app.get('/', (req, res) => {
    res.json({
        message: 'This is home page'
    })
})

app.get('/about', (req, res) => {
    res.json({
        message: 'This is about page'
    })
})

app.listen(3000, () => {
    console.log('Node.js project has started')
})



// mongodb+srv://bipinkhonma:<db_password>@cluster0.esdjrqj.mongodb.net/?appName=Cluster0