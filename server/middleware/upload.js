const multer = require('multer')


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        console.log(req.body)
        if(req.body.imageType==='donation_image'){
            cb(null, './server/uploads/donation_images/');
        }
        if(req.body.imageType==='user_avatar'){
            cb(null, './server/uploads/user_avatars/');
        }
        else{
            cb(null, './server/uploads/other/');
        }
     
    },
    filename: function(req, file, cb) {
        const d = new Date().getTime()
        cb(null,`${d}${file.originalname}`);
    }
  });
  
const fileFilter = (req, file, cb) => {
// reject a file

    cb(null, true);
};
  
const upload = multer({
storage: storage,
limits: {
    fileSize: 1024 * 1024 * 5
},
fileFilter: fileFilter
});

module.exports = {
    upload
}
  