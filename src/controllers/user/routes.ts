import * as express from 'express';
import userController from './Controller';
import  validation from './validation';
import validationHandler from './../../libs/routes/validationHandler'
import authMiddleware from './../../libs/routes/authMiddleWare'
import IRequest from '../../libs/routes/IRequest';
 
const userRouter = express.Router();


userRouter.route('/')
.get( authMiddleware('getUser','read'),validationHandler(validation.get),userController.list)
.post( authMiddleware('getUser','read'),validationHandler(validation.create),userController.create)
.put( authMiddleware('getUser','read'),validationHandler(validation.update),userController.update);
userRouter.delete('/user/:id', authMiddleware('getUser','read'), validationHandler(validation.delete), userController.delete);



userRouter.route('/me')
.get(authMiddleware('getUser','read'),(req:IRequest,res)=>{
    console.log("Inside routes",req.user)
    res.send(req.user)
})
export default userRouter;
