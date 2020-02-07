import { Router } from 'express';
import { traineeRouter } from './controllers/trainee/index';
import { userRouter } from './controllers/user/index';

const mainRouter = Router();
mainRouter.use ( '/', traineeRouter );
mainRouter.use ( '/', userRouter );

export default mainRouter;