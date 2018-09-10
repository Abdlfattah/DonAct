const { Post } = require('../models/post')

module.exports = {

    getMyPosts : function(req,res){
        const posterId = req.query.posterId
        Post.find()
        .populate({
            path:'poster',
            match:{_id:posterId}
        })
        .exec((err,docs)=>{
            if(err) return res.json({
                type:'internal-err',
                msg:err.message
            })
            let posts = docs.filter(function(doc){
                return doc.poster != null;
              }) 
            return res.json({
                success:true,
                posts
            })
        })
    },

    getAllPosts : function(req,res){
        const limit = parseInt(req.query.limit)
        const skip = parseInt(req.query.skip)
        const order = req.query.order
        const type = req.query.type
        const text = req.query.text
        let query = Post
        .find({ $or:[
                    {name: { $regex:`${text}` }},
                    {description: { $regex:`${text}` }},
                    {type: { $regex:`${text}` },}
                ],
            })
        .limit(limit)
        .skip(skip)
        .sort(order)
        .populate({
            path:'poster',
            select:'name lastname role avatar'
        })
        if(type!='') query = query.find({
            type:type       
        })
        query.exec((err,docs)=>{
            if(err) return res.json({
                type:'internal-err',
                msg:err.message
            })
            let posts = docs.filter(function(doc){
                return doc.poster != null;
              })
            res.json({
                success:true,
                posts,
            })
        })
    },

    update : function(req,res){
        Post.findByIdAndUpdate(req.query.id,req.body,{new:true},(err,newDonation)=>{
            if(err) return res.send(err).json({
                type:'internal-err',
                msg:err.message
            })
            return res.json({
                success:true,
                donation:newDonation
            })
        })
    },

    post : function(req,res){
        const post = new Post({
                title:req.body.title,
                type:req.body.type,
                image:req.file.filename,
                description:req.body.description,
                poster:req.body.poster,
        })
        post.save((err,post)=>{
            if(err) return res.json({
                type:'internal-err',
                msg:err.message
            })
            return res.json({
                success:true,
                id:post._id
            })
        })
    },

    getPost :function(req,res){
        const postId = req.query.postId
        Post.findById(postId)
        .populate('poster')
        .exec((err,post)=>{
            if(err) return res.send({
                tye:'interna-err',
                msg:err.message
            })
            res.json({
                success:true,
                post
            })
        })
    }

}