mongoose = require('mongoose')


//status : waiting => accepted => delivering => delivered => confirmed
const donationSchema = mongoose.Schema({

    name:{
        type:String,
        required:true,
        maxlength:100
    },
    type:{
        type:String,
        required:true,
        maxlength:100
    },
    status:{
        type:String,
        default:'waiting'
    },
    associationId:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true,
        data:Buffer
    },
    confirmationImage:{
        type:String,
        data:Buffer
    }
},{timestamps:true})

// donationSchema.index({ 'name':'text' })
const Donation = mongoose.model('Donation',donationSchema)

module.exports={
    Donation,
    donationSchema
}