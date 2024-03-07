const { Router } = require('express')
const userRouter = require('./user.routes')
const postRouter = require('./post.routes')

const routes = Router()

routes.use('/users', userRouter)
routes.use('/post', postRouter)

module.exports = routes