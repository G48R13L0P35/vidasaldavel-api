const { Router } = require('express');
const PostController = require('../controllers/PostController')
const checkIsAdmin = require('../middlewares/checkIsAdmin');

const userRouter = Router()

const postController = new PostController()

userRouter.post('/', postController.create)
userRouter.get('/:user_id', checkIsAdmin, postController.listPosts)
userRouter.delete('/:id', postController.deletePost)
userRouter.put('/:id', postController.updatePost)

module.exports = userRouter