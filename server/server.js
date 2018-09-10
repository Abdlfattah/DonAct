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
mongoose.connect(config.DATABASE, { useNewUrlParser: true })

const app = express()
//Set middlewares
app.use(bodyParser.json())
app.use(cookieParser())


app.use('/api/public',express.static('server/uploads/donation_images/'))
app.use('/api/public',express.static('server/uploads/user_avatrs/'))
app.use('/api/public',express.static('server/uploads/other'))
app.use('/api/public',express.static('server/uploads/confirmation_images/'))
//import routes
const userRoutes = require('./routes/user_routes')
const postRoutes = require('./routes/post_routes')
const donationRoutes = require('./routes/donation_routes')

app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);
app.use('/api/donation',donationRoutes)




app.listen(config.PORT,()=>{
    console.log(`server is running at the port ${config.PORT}`)
})


