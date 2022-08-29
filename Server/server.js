const express = require('express')
const { ConnectDB } = require('./Config/ConnectDB')
require('dotenv').config()
const UserRouter = require('./Routes/UserRouter')

const app = express()
app.use(express.json())

app.use('/api/users', UserRouter)

ConnectDB()

const PORT = process.env.PORT || 7000

app.listen(PORT,err=> err? console.log(err) : console.log(`the server is running on ${PORT}`))