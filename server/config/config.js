const config={
    production:{
        SECRET_AUTH:process.env.SECRET_AUTH,
        SECRET_EMAIL:process.env.SECRET_EMAIL,
        DATABASE:process.env.MONGOLAB_CRIMSON_URI,
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