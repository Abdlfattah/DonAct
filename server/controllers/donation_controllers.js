const { Donation } = require('../models/donation')


module.exports = {

    getDonations : function(req,res){
        const userId = req.query.userId
        const role = req.query.role
        const oppositeRole = role === 'donor' ? 'charity':'donor'
        Donation.find({[role]:userId})
        .populate(oppositeRole)
        .populate('post')
        .exec((err,donations)=>{
            if(err) return res.send({
                type:'internal-err',
                msg:err.message
            })
            return res.json({
                success:true,
                donations
            })
        })
    },

    getDonation : function(req,res){
        const donationId = req.query.donationId
        const role = req.query.role
        const oppositeRole = role === 'donor' ? 'charity':'donor'
        Donation.findOne({_id:donationId})
        .populate(oppositeRole)
        .populate({
            path:'post',
            populate:{path:'poster'}
        })
        .exec((err,donation)=>{
            if(err) return res.send({
                type:'interna-err',
                msg:err.message
            })
            res.json({
                success:true,
                donation
            })
        })
    },

    update : function(req,res){
        const donationId = req.query.donationId
        const newStatus = req.body
        Donation.findByIdAndUpdate(donationId, newStatus,{new:true},(err,donation)=>{
            if(err) return res.send({
                type:'internal-err',
                msg:err.message
            })
            res.json({
                success:true,
                donation
            })
        })
    },

    donate : function(req,res){
        const donation = new Donation(req.body)
        const donorId = req.body.donor
        const postId = req.body.post
        Donation.findOne({donor:donorId,post:postId},(err,doc)=>{
            if(err) return res.send({
                type:'internal-err',
                msg:err.message
            })
            if(doc){
                return res.json({
                    success:true,
                    exist:true,
                    donationId:doc._id
                })
            }
            donation.save((err,donation)=>{
                if(err) return res.send({
                    type:'internal-err',
                    msg:err.message
                })
                res.json({
                    success:true,
                    exist:false,
                    donationId:donation._id
                })
            })
        })
        
    }

}