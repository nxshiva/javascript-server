import { Router } from 'express';
import traineeController from './Controller';
import  validation from './validation';
import validationHandler from './../../libs/routes/validationHandler'
import authMiddleware from './../../libs/routes/authMiddleWare'

const traineeRouter = Router();

traineeRouter.route('/trainee')
.get( authMiddleware('getUsers', 'write'), validationHandler(validation), traineeController.list )
.post( validationHandler(validation), traineeController.create)
.put( validationHandler(validation), traineeController.update)
.delete( validationHandler(validation), traineeController.delete);

traineeRouter.delete('/trainee/:id', validationHandler(validation), traineeController.delete);

export default traineeRouter;
