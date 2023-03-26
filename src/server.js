require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const app = express()
const webRoutes = require('./routes/web')
const port = process.env.PORT || 8888
const hostname = process.env.HOSTNAME
//congif template engine
configViewEngine(app)
//khai bao route
app.use('/v1', webRoutes)
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})