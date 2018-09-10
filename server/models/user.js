const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SALT_I = 10
const config = require('../config/config').get(process.env.NODE_ENV)



//role : user /charity/admin
const userSchema = mongoose.Schema({

    name:{
        type:String,
        required:true,
        maxlength:100
    },
    lastname:{
        type:String,
        maxlength:100
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:1,
        lowercase:true
    },
    phoneNumber:{
        type:Number,
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    tokenAuth:{
        type:String
    },
    avatar:{
        type:String,
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
    },
    adress:{
        type:String,
    },
    type:{
        type:String
    },
    website:{
        type:String,
    },
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


userSchema.statics.findByToken = function(token,cb){
    const user = this
    jwt.verify(token,config.SECRET_AUTH,(err,decode)=>{
        if(err) return cb(err)
        user.findOne({'_id':decode,'tokenAuth':token})
        .select('name lastname _id avatar role')
        .exec((err,doc)=>{
            if(err) return cb(err)
            cb(null,doc)
        })
    })
    
}

userSchema.methods.deleteToken = function(cb){
    const user = this
    user.update({$unset:{tokenAuth:1}},(err,user)=>{
        if(err) return cb(err)
        cb(null,user)
    })
}

const User = mongoose.model('User',userSchema)

module.exports={
    User
}