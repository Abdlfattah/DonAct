const { Donation } = require('../models/donation')


module.exports = {

    getDonation : function(req,res){
        Donation.findById(req.query.id,(err,donation)=>{
            if(err) return res.send(err).json({
                success:false
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
        let query = Donation.find({$or:[
            {name: { $regex:`${text}` }},
            {description: { $regex:`${text}` }},
            {type: { $regex:`${text}` }}
        ],})
        .limit(limit)
        .skip(skip)
        .sort(order)
        if(type) query = query.find({
            type:type          
        })
        query.exec((err,donations)=>{
            if(err) return res.send(err).json({
                success:false
            })
            return res.json({
                success:true,
                donations
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
        const donation = new Donation(req.body)
        donation.save((err,doc)=>{
            if(err) return res.send(err).json({
                success:false
            })
            return res.json({
                success:true,
                donation:doc
            })
        })
    }





}