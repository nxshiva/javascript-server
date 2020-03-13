import * as express from 'express';
import userController from './Controller';
import  validation from './validation';
import validationHandler from './../../libs/routes/validationHandler';
import authMiddleware from './../../libs/routes/authMiddleWare';
import IRequest from '../../libs/routes/IRequest';
const userRouter = express.Router();

/**
 * @swagger
 *
 * definitions:
 *     Login:
 *       type: object
 *       properties:
 *          email:
 *             type: string
 *             example: vinay@successive.tech
 *          password:
 *             type: string
 *             example: Trainee@123
 *     Token:
 *       type: object
 *       properties:
 *          status:
 *             example: Ok
 *          message:
 *             example: Success
 *          data:
 *             example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpbmF5QHN1Y2Nlc3NpdmUudGVjaCIsImlkIjoiNWU0ZDMwOWZlNTc5Yjk1M2I1MmQwMGYwIiwicm9sZSI6ImhlYWQtdHJhaW5lciIsImlhdCI6MTU4MjExNzEwNH0.ncHSjBVfragq2SmWHxc9VO2CazRUvgEiD7OvAyMjGGc
 */

/**
 * @swagger
 *
 * /user/me:
 *   get:
 *      description: Data of the User currently login.
 *      tags:
 *         - User
 *      security:
 *         - Bearer: []
 *      produces:
 *         - application/json
 *      responses:
 *         200:
 *           description: success
 *           schema:
 *              $ref: '#/definitions/TraineeResponse'
 */

userRouter.route('/me').get(authMiddleware('getTrainee', 'read'), userController.me);

/**
 * @swagger
 *
 * /user/login:
 *   post:
 *     description: Login Credentials
 *     tags:
 *       - User
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: User
 *         description: User email and password
 *         in: body
 *         required: true
 *         type: object
 *         schema:
 *           $ref: '#/definitions/Login'
 *     responses:
 *       200:
 *         description: login
 *         schema:
 *           $ref: '#/definitions/Token'
 *       422:
 *         description: invalid email or password
 *         schema:
 *           oneOf:
 *           properties:
 *             status:
 *               example: "Bad Request"
 *             message:
 *               example: Password does not match
 *             err:
 *               example: Password is incorrect
 */

userRouter.route('/login').post(validationHandler(validation.login), userController.login);
export default userRouter;
