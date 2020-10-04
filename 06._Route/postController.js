module.exports.getAllPost = (req, res) => {
    let { category, page, filter } = req.query;
    console.log(req.query)
    res.send('Renter All Post')
};

module.exports.getSinglePost = (req, res) => {
    res.send('I am POST = ' + req.params.postId)
};
module.exports.createNewPost =  (req, res) => {
    res.send('Create New Post')
};

module.exports.updatePost = (req, res) => {
    res.send('Update Your Existing Post = ' + req.params.postId)
};
module.exports.deletePost = (req, res) => {
    res.send('Delete Your Existing Post = ' + req.params.postId)
};