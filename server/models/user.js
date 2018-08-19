const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SALT_I = 10
const config = require('../config/config').get(process.env.NODE_ENV)

const userSchema = mongoose.Schema({

    name:{
        type:String,
        required:true,
        maxlength:100
    },
    lastname:{
        type:String,
        required:true,
        maxlength:100
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:1,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    tokenAuth:{
        type:String
    },
    image:{
        type:String,
        data:Buffer
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    role:{
        type:Number,
        default:0
    }
},{timestamps:true})


//--------------------------------------User methods -----------------------------------------------------
userSchema.pre('save',function(next){
    const user = this
    if(user.isModified('password')){
        bcrypt.genSalt(SALT_I,(err,salt)=>{
            if(err) return next(err)
            bcrypt.hash(user.password,salt,(err,hash)=>{
                if(err) return next(err)
                user.password = hash
                next()
            })
        })
    }
    else{
        next()
    }
})

userSchema.methods.comparePassword = function(candidatePassword,cb){
    bcrypt.compare(candidatePassword,this.password,(err,isMatch)=>{
        if(err) return cb(err)
        cb(null,isMatch)
    })
}

userSchema.methods.generateTokenAuth = function(cb){
    const tokenAuth = jwt.sign(this._id.toHexString(),config.SECRET_AUTH)
    this.tokenAuth = tokenAuth
    this.save((err,user)=>{
        if(err) return cb(err)
        return cb(null,user)
    })
}


userSchema.methods.compareToken = function(token,cb){
    
}


const User = mongoose.model('User',userSchema)

module.exports={
    User
}