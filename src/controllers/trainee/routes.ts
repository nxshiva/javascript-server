import { Router } from 'express';
import traineeController from './Controller';
import  validation from './validation';
import validationHandler from './../../libs/routes/validationHandler'
import authMiddleware from './../../libs/routes/authMiddleWare'
 
const traineeRouter = Router();

traineeRouter.route('/trainee')
.get( authMiddleware('getUsers', 'read'), validationHandler(validation.get), traineeController.list )
.post( authMiddleware('getUsers', 'read'), validationHandler(validation.create), traineeController.create)
.put( authMiddleware('getUsers', 'read'), validationHandler(validation.update), traineeController.update)
.delete( authMiddleware('getUsers', 'read'), validationHandler(validation.delete), traineeController.delete);

traineeRouter.delete('/trainee/:id', validationHandler(validation.delete), traineeController.delete);

export default traineeRouter;
