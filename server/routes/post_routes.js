const express = require('express');
const { post, getAllPosts, update, getMyPosts, getPost } = require('../controllers/post_controllers')
const router = express.Router();
const { upload } = require('../middleware/upload')

router.get('/get_posts',getAllPosts)
router.post('/update',update)
router.get('/my_posts',getMyPosts)
router.get('/get_post',getPost)
router.post('/post',upload.single('image'),post)

 

module.exports = router;

