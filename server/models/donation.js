mongoose = require('mongoose')
//status : 0-waiting => 1-accepted => 2-delivering 1 => 3-delivered 2 => 4-confirmed
const donationSchema = mongoose.Schema({

    status:{
        type:Number,
        default:0
    },
    charity:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    donor:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Post',
        required:true
    },
    
},{timestamps:true})


const Donation = mongoose.model('Donation',donationSchema)

module.exports={
    Donation
}