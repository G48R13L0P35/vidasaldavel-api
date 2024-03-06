const { Router } = require('express');
const UserContoller = require('../controllers/UserController')

const userRouter = Router()

const userContoller = new UserContoller()

userRouter.post('/', userContoller.create)
userRouter.get('/', userContoller.listUsers)
userRouter.delete('/:id', userContoller.deleteUser)
userRouter.put('/:id', userContoller.updateUser)

module.exports = userRouter