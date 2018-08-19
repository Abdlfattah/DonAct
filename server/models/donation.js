mongoose = require('mongoose')

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
    isTaken:{
        type:Boolean,
        default:false
    },
    ownerId:{
        type:String
    },
    associationId:{
        type:String
    },
    image:{
        type:String,
        data:Buffer
    }
},{timestamps:true})


const Donation = mongoose.model('Donation',donationSchema)

module.exports={
    Donation
}