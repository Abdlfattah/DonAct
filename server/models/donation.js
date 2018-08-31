mongoose = require('mongoose')
//status : waiting => accepted => delivering => delivered => confirmed
const donationSchema = mongoose.Schema({

    title:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        default:'waiting'
    },
    poster:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    description:{
        type:String,
        required:true
    },
    donation_image:{
        type:String,
    },
    confirmation_image:{
        type:String,
    }
},{timestamps:true})

// donationSchema.index({ 'name':'text' })
const Donation = mongoose.model('Donation',donationSchema)

module.exports={
    Donation,
    donationSchema
}