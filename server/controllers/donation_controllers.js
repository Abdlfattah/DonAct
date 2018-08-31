const { Donation } = require('../models/donation')


module.exports = {

    getDonation : function(req,res){
        Donation.findById(req.query.id).populate('poster').exec((err,donation)=>{
            if(err) return res.json({
                success:false,
                msg:err.message
            })
            return res.json({
                success:true,
                donation
            })
        })
    },

    getAllDonations : function(req,res){
        const limit = parseInt(req.query.limit)
        const skip = parseInt(req.query.skip)
        const order = req.query.order
        const type = req.query.type
        const text = req.query.text
        const role = req.query.role
        let query = Donation.find({$or:[
            {name: { $regex:`${text}` }},
            {description: { $regex:`${text}` }},
            {type: { $regex:`${text}` }}
        ],})
        .limit(limit)
        .skip(skip)
        .sort(order)
        .populate({
            path:'poster',
            match:{role:role}
        })
        if(type!='') query = query.find({
            type:type       
        })
        query.find({poster:{$ne:null}}).exec((err,donations)=>{
            if(err) return res.json({
                type:'internal-err',
                msg:err.message
            })
            res.json({
                success:true,
                donations,
            })
        })
    },

    updateDonation : function(req,res){
        Donation.findByIdAndUpdate(req.query.id,req.body,{new:true},(err,newDonation)=>{
            if(err) return res.status(400).send(err).json({
                success:false
            })
            return res.json({
                success:true,
                donation:newDonation
            })
        })
    },

    postDonation : function(req,res){
        const donation = new Donation({
                title:req.body.title,
                type:req.body.type,
                donation_image:req.file.filename,
                description:req.body.description,
                poster:req.body.poster,
        })
        donation.save((err,post)=>{
            if(err) return res.json({
                type:'internal-err',
                msg:err.message
            })
            return res.json({
                success:true,
                ...post._doc
            })
        })
    },






}