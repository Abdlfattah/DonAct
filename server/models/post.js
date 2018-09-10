mongoose = require('mongoose')

const postSchema = mongoose.Schema({

    title:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:true,
    },
    poster:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
    },
},{timestamps:true})


const Post = mongoose.model('Post',postSchema)

module.exports={
    Post
}