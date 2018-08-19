const { User } = require('../models/user')
const { Token } = require('../models/token_email')


module.exports = {
    
    registerUser :function(req,res){
        user = new User(req.body)
        user.save((err,user)=>{
            if(err) return res.send(err)
            const token = new Token({ _userId: user._id, token: '' });
            token.generateToken(user,req.headers.host,(err)=>{
                if (err) return res.status(500).send({ msg: err.message })
                res.status(200).send(`A verification email has been sent to ${user.email}.`)
            })
        })
    },



    login :function(req,res){
        User.findOne({ email: req.body.email }, (err, user)=> {
            if(err) return res.send(err)
            if (!user) return res.status(401)
                                 .send({ msg: `The email address ${req.body.email} is not associated with any account. Double-check your email address and try again.` });
            user.comparePassword(req.body.password, function (err, isMatch) {
                if(err) return res.send(err)
                if (!isMatch) return res.status(401).send({ msg: 'Invalid email or password' });
     
                // Make sure the user has been verified
                if (!user.isVerified) return res.status(401).send({ 
                    type: 'not-verified', 
                    msg: 'Your account has not been verified.' 
                }); 
     
                // Login successful, write token, and send back user
                user.generateTokenAuth((err,user)=>{
                    if(err) return res.send(err)
                    res.cookie('auth',user.tokenAuth).json({
                        user
                    })
                })
            });
        });
    },

    confirmation :function(req,res){
        Token.findOne({ token: req.query.token }, function (err, token) {
            if(err) return res.send(err)
            if (!token) return res.status(400).send({ 
                type: 'not-verified', 
                msg: 'We were unable to find a valid token. Your token may have expired.' 
            });
     
            // If we found a token, find a matching user
            User.findOne({ _id: token._userId }, function (err, user) {
                if(err) return res.send(err)
                if (!user) return res.status(400).send({ msg: 'We were unable to find a user for this token.' });
                if (user.isVerified) return res.status(400).send({ 
                    type: 'already-verified', 
                    msg: 'This user has already been verified.' 
                });
     
                // Verify and save the user
                user.isVerified = true;
                user.save(function (err) {
                    if (err) { return res.status(500).send({ msg: err.message }); }
                    res.status(200).send("The account has been verified. Please log in.");
                });
            });
        });
    }



}