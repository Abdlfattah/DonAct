const { User } = require('../models/user')

const Auth = (req,res,next)=>{
    const token = req.cookies.auth
    User.findByToken(token,(err,user)=>{
        if(err) return res.send({
            isAuth:false,
            msg:'Something wrong happend'
        })
        if(!user) return res.json({
            isAuth:false,
            msg:`Coud'nt find the user by this token` 
        })
        req.token = token 
        req.user = user
        next()
    })
}



module.exports = {
    Auth
}