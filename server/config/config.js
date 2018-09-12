const config={
    production:{
        SECRET_AUTH:'secretpassword',
        SECRET_EMAIL:'secretEmail',
        DATABASE:process.env.MONGODB_URI,
        PORT:process.env.PORT
    },
    default:{
        SECRET_AUTH:'secretpassword',
        SECRET_EMAIL:'secretEmail',
        DATABASE:'mongodb://localhost:27017/donact',
        PORT:3001
    }
}


exports.get = function get (env){
    return config[env] || config.default
}