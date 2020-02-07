import { Router } from 'express';
import userController from './Controller';
import  validation from './validation';
import validationHandler from './../../libs/routes/validationHandler'
import authMiddleware from './../../libs/routes/authMiddleWare'
 
const userRouter = Router();

userRouter.route('/user')
.get( validationHandler(validation.get),userController.list )
.post( validationHandler(validation.create),userController.create)
.put( validationHandler(validation.update),userController.update)
.delete( validationHandler(validation.delete),userController.delete );

userRouter.delete('/user/:id', validationHandler(validation.delete), userController.delete);

export default userRouter;
