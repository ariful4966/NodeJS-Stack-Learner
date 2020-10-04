
const router = require('express').Router();

const { showAllPost, createNewPost, updatePost, deletePost} = require('./postController');

router.get('/', showAllPost);
router.post('/', createNewPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;