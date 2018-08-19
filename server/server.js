const express = require('express')

//import the environnement config 
const config = require('./config/config').get(process.env.NODE_ENV)

//import mongoose for mongodb
const mongoose = require('mongoose')

//import parsers
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

//connect mongodb
mongoose.Promise = global.Promise
mongoose.connect(config.DATABASE)

const app = express()
//Set middlewares
app.use(bodyParser.json())
app.use(cookieParser())



//import routes
const userRoutes = require('./routes/user_routes')
const donationRoutes = require('./routes/donation_routes')
const associationRoutes = require('./routes/association_routes')

app.use('/api/user', userRoutes);
app.use('/api/donation', donationRoutes);
app.use('/api/association', associationRoutes);



app.listen(config.PORT,()=>{
    console.log(`server is running at the port ${config.PORT}`)
})


