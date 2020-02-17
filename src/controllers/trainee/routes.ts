import * as express from 'express';
import traineeController from './Controller';
import  validation from './validation';
import validationHandler from './../../libs/routes/validationHandler';
import authMiddleware from './../../libs/routes/authMiddleWare';
import IRequest from '../../libs/routes/IRequest';
const traineeRouter = express.Router();


traineeRouter.route('/')
.get( authMiddleware('getTrainee', 'read'), validationHandler(validation.get), traineeController.list)
.post( authMiddleware('getTrainee', 'read'), validationHandler(validation.create), traineeController.create)
.put( authMiddleware('getTrainee', 'read'), validationHandler(validation.update), traineeController.update);
traineeRouter.delete('/:id', authMiddleware('getTrainee', 'read'), validationHandler(validation.delete), traineeController.delete);
// traineeRouter.route('/me').get(authMiddleware('getTrainee', 'read'), traineeController.me);
// traineeRouter.route('/login').post(traineeController.login);

export default traineeRouter;
