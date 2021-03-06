const Post = require("../../models/Post");

exports.likesGetController = async (req, res, next) => {
    let { postId } = req.params
    
    let liked = null

    if (!req.user) {
        return res.status(403).json({
            error: 'Your are not an authenticated user'
        })
    }
    let userId = req.params._id
    try {
        let post = Post.findById(postId)
        if (post.dislikes.includes(userId)) {
            await Post.findByIdAndUpdate(
                { _id: postId },
                { $pull: { 'dislikes': userId } }
            )
        }

        if (post.likes.includes(userId)) {
            await Post.findByIdAndUpdate(
                { _id: postId },
                { $pull: { 'likes': userId } }
            )
            liked = false
        } else {
            await Post.findByIdAndUpdate(
                { _id: postId },
                { $push: { 'likes': userId } }
            )
            liked = true
        }

        let updatePost = await Post.findById(postId)
        res.status(200).join({
            liked,
            totalLikes: updatePost.likes.length,
            totalDislikes: updatePost.dislikes.length
        })

    } catch (e) {
        console.log(e)
        return res.status(500).json({
            error: 'Server Error Occerred '
        })

    }
}
exports.dislikeGetController = async (req, res, next) => {
    let { postId } = req.params
    
    let disliked = null

    if (!req.user) {
        return res.status(403).json({
            error: 'Your are not an authenticated user'
        })
    }
    let userId = req.params._id
    try {
        let post = Post.findById(postId)
        if (post.likes.includes(userId)) {
            await Post.findByIdAndUpdate(
                { _id: postId },
                { $pull: { 'likes': userId } }
            )
        }

        if (post.dislikes.includes(userId)) {
            await Post.findByIdAndUpdate(
                { _id: postId },
                { $pull: { ' likes': userId } }
            )
            disliked = false
        } else {
            await Post.findByIdAndUpdate(
                { _id: postId },
                { $push: { 'dislikes': userId } }
            )
            disliked = true
        }
        let updatePost = await Post.findById(postId)
        res.status(200).join({
            disliked,
            totalLikes: updatePost.likes.length,
            totalDislikes: updatePost.dislikes.length
        })


    } 
    catch (e) {
        console.log(e)
        return res.status(500).json({
            error: 'Server Error Occerred '
        })

    }
}