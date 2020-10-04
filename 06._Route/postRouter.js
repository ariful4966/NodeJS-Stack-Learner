const router = require('express').Router();

const { getAllPost, getSinglePost, createNewPost, updatePost, deletePost} = require('./postController')

//example.com/posts GET

router.get('/', getAllPost);

router.get('/:postId', getAllPost)
//example.com/post POST
router.post('/',createNewPost);
router.put('/:postId', updatePost)

router.delete('/:postId', deletePost)
module.exports = router;