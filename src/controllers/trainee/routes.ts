import { Router } from 'express';
import traineeController from './Controller';
import  validation from './validation';
import validationHandler from './../../libs/routes/validationHandler'
import authMiddleware from './../../libs/routes/authMiddleWare'
 
const traineeRouter = Router();

traineeRouter.route('/')
.get( validationHandler(validation.get), traineeController.list )
.post( authMiddleware('getTrainee', 'read'),validationHandler(validation.create), traineeController.create)
.put( authMiddleware('getTrainee', 'read'), validationHandler(validation.update), traineeController.update)
.delete( authMiddleware('getTrainee', 'read'), validationHandler(validation.delete), traineeController.delete);

traineeRouter.delete('/trainee/:id', authMiddleware('getUser', 'read'),validationHandler(validation.delete), traineeController.delete);

export default traineeRouter;
