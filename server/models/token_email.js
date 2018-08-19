const mongoose = require('mongoose')
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken')
const SALT_I = 10
const config = require('../config/config').get(process.env.NODE_ENV)


const tokenSchema = mongoose.Schema({
    _userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: 'User' 
    },
    token: { 
        type: String, 
        required: true 
    },
    createdAt: { 
        type: Date, 
        required: true, 
        default: Date.now, 
        expires: 43200 
    }
})


tokenSchema.methods.generateToken = function(user,host,cb){
    const token = jwt.sign(user._id.toHexString(),config.SECRET_EMAIL)
    this.token = token
    // Save the verification token
    this.save(function (err) {
        if (err)  return cb(err)
     // Send the email
        const transporter = nodemailer.createTransport({ 
            service: 'Gmail', 
            auth: { user: 'donact1234@gmail.com', pass: 'Donact1996' } 
        });
        const mailOptions = { 
            from: 'no-reply@donact.com', 
            to: user.email, 
            subject: 'Account Verification Token', 
            text: `Hello,\n\n+ Please verify your account by clicking the link: http://${host}/confirmation/${token}'`
        };
        transporter.sendMail(mailOptions, (err)=>{
            if(err) return cb(err)
            return cb(null)
        });
    });
}
const Token = mongoose.model('Token',tokenSchema)

module.exports = {
    Token
}