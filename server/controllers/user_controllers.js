const { User } = require('../models/user')
const { Token } = require('../models/token_email')


module.exports = {
    
    registerUser :function(req,res){
        user = new User(req.body)
        user.save((err,user)=>{
            if(err) return res.send({
                type:'invalid',
                msg:'This email already exist'
            })
            const token = new Token({ _userId: user._id, token: '' });
            token.generateToken(user,req.headers.host,(err)=>{
                if (err) return res.status(500).send({ 
                    type:'internal-err',
                    msg: err.message })
                res.status(200).send({
                    success:true,
                    msg:`A verification email has been sent to ${user.email}.`,
                    id:user._id
                })
            })
        })
    },

    logout:function(req,res){
        User.findByToken(req.cookies.auth,(err,user)=>{
            if(err) return res.json({
                msg:err.message
            })
            user.deleteToken((err,user)=>{
                if(err) return res.send({
                    msg:err.message
                })
                res.json({
                    isAuth:false,
                    success:true
                })
            })
        })
       
    },

    login :function(req,res){
        User.findOne({ email: req.body.email }, (err, user)=> {
            if(err) return res.send({
                type:'internal-err',
                msg:err.message
            })
            if (!user) return res.send({
                type:'invalid',
                msg: `The email address ${req.body.email} is not associated with any account. Double-check your email address and try again.` 
            });
            user.comparePassword(req.body.password, function (err, isMatch) {
                if(err) return res.send({
                    type:'internal-err',
                    msg:err.message
                })
                if (!isMatch) return res.send({
                    type:'invalid',
                    msg: 'Invalid email or password' 
                });
     
                // Make sure the user has been verified
                if (!user.isVerified) return res.status(401).send({ 
                    type: 'not-verified', 
                    msg: 'Your account has not been verified.' 
                }); 
     
                // Login successful, write token, and send back user
                user.generateTokenAuth((err,user)=>{
                    if(err) return res.send({
                        type:'internal-err',
                        msg:err.message
                    })
                    res.cookie('auth',user.tokenAuth).json({
                        success:true,
                        role:user.role
                    })
                })
            });
        });
    },

    confirmation :function(req,res){
        Token.findOne({ token: req.query.token }, function (err, token) {
            if(err) return res.json({
                success:false,
                type:'internal-err',
                msg:err.message
            })
            if (!token) return res.json({
                success:false, 
                type: 'expired', 
                msg: 'We were unable to find a valid token. Your token may have expired.' 
            });
     
            // If we found a token, find a matching user
            User.findOne({ _id: token._userId }, function (err, user) {
                if(err) return res.json({
                    success:false,
                    type:'internal-err',
                    msg:err.message
                })
                if (!user) return res.send({ 
                    type:'invalid',
                    success:false,
                    msg: 'We were unable to find a user for this token.' 
                });
                if (user.isVerified) return res.json({
                    success:false, 
                    type: 'verified',
                    msg: 'This user has already been verified' 
                });
     
                // Verify and save the user
                user.isVerified = true;
                user.save(function (err) {
                    if (err) return res.json({ 
                        msg: err.message,
                        type:false,
                        success:false 
                    })
                    res.status(200).json({
                        success:true,
                        msg:"The account has been verified"
                    });
                });
            });
        });
    },

    resendConfirmation : function (req, res) {
        User.findOne({ email: req.body.email }, function (err, user) {
            if(err) return res.send({
                msg:err.message,
                type:'internal-err',
            })
            if (!user) return res.send({
                type:'ivalid',
                msg: 'We were unable to find a user with that email.' 
            });
            if (user.isVerified) return res.send({ 
                type:'verified',
                msg: 'This account has already been verified. Please log in.' 
            });
            const token = new Token({ _userId: user._id, token: '' });
            token.generateToken(user,req.headers.host,(err)=>{
                if (err) return res.send({ 
                    type:'internal-err',
                    msg: err.message })
                res.status(200).send({
                    success:true,
                    msg:`A verification email has been sent to ${user.email}.`,
                    id:user._id
                })
            })
     
        });
    },

    authentification :function(req,res){
        res.json({
            isAuth:true,
            ...req.user._doc
        })
    },

    getUser : function(req,res){
        User.findById(req.query.id,(err,user)=>{
            if(err) return res.json({
                type:'internal-err',
                msg:err.message
            })
            res.json({
                success:true,
                user
            })
        })
    },


    donate :function(req,res){
        const donationId = req.query.donationId
        const userId = req.query.userId
        User.update(
            { _id: userId },
            { $push: { donations: donationId } }
        )
        .exec((err,user)=>{
            if(err) return res.json({
                err:message.err,
                type:'internal-err'
            })
            return res.json({
                success:true,
                user
            })
        })
    },

    update :function(req,res){
        const id = req.query.id
        User.findOneAndUpdate(id,req.body,(err,user)=>{
            if(err) return res.send({
                type:'internal-err',
                msg:err.message
            })
            res.json({
                success:true,
                user
            })
        })
    }




}