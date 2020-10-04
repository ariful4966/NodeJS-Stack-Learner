
module.exports.showAllPost = (req, res) => {
    res.send('Show All Posts')
};
module.exports.createNewPost = (req, res)=>{
    res.send('Create A New Post')
};
module.exports.updatePost = (req, res)=>{
    res.send('Update Your Post')
};
module.exports.deletePost = (req, res)=>{
    res.send('Delete Your Awesome Post !!!!')
};
module.exports.getSinglePost = (req, res)=>{
    res.send('Show On A This Post ' + req.params.id)
}
