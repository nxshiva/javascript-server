import { Router } from 'express';
import TraineeController from './Controller';
import  validationHandler  from '../../libs/routes/validationHandler';
import validation from './validation' ;
import authMiddleWare from '../../libs/routes/authMiddleWare';

const TraineeRouter = Router();

/**
 * @swagger
 *
 * definitions:
 *   TraineePost:
 *      type: object
 *      properties:
 *          name:
 *              type: string
 *              example: shiva sharma
 *          address:
 *              type: string
 *              example: noida
 *          dob:
 *              type: Date
 *              example: 03/04/1998
 *          email:
 *              type: string
 *              example: shiva@successive.tech
 *          mobileNumber:
 *              type: number
 *              example: 9411633383
 *          password:
 *              type: string
 *              example: Trainee@123
 *          role:
 *              type: string
 *              example: trainee
 *          hobbies:
 *              type: array
 *              example: ["cricket"]
 *
 *   TraineeResponse:
 *      type: object
 *      properties:
 *          _id:
 *              example: 5e53ac6060a36a15d89a3aa0
 *          name:
 *              type: string
 *              example: shiva
 *          address:
 *              type: string
 *              example: noida
 *          dob:
 *              type: Date
 *              example: 03/11/1998
 *          email:
 *              type: string
 *              example: shiva@successive.tech
 *          mobileNumber:
 *              type: number
 *              example: 9411633383
 *          role:
 *              type: string
 *              example: trainee
 *          hobbies:
 *              type: array
 *              example: ["cricket"]
 *          originalId:
 *              example: 5e53ac6060a36a15d89a3aa0
 *          createdBy:
 *              example: 5e53ac6060a36a15d89a3aa0
 *          createdAt:
 *              example: 2020-02-24 10:58:40.385Z
 *          v:
 *              example:0
 *          Unauthorized:
 *              type: object
 *              properties:
 *                  error:
 *                      example: Unauthorized
 *                  message:
 *                      example: Token not found
 *                  status:
 *                      example: 401
 *                  timestamp:
 *                      example: 2020-02-24 10:58:40.385Z
 *
 */
TraineeRouter.route('/')
/**
 * @swagger
 *
 * /api/trainee:
 *      get:
 *          description: Returns the list of the trainees
 *          security:
 *              - Bearer: []
 *          consumes:
 *              - application/json
 *          produces:
 *              - application/json
 *          parameters:
 *              - name: skip
 *                description: data to be skip
 *                in: query
 *                required: false
 *                type: number
 *              - name: limit
 *                description: number of data to be shown
 *                in: query
 *                required: false
 *                type: number
 *              - name: sortData
 *                description: data to be sort by
 *                in: query
 *                required: false
 *                type: string
 *              - name: search
 *                description: data to be search by
 *                in: query
 *                required: false
 *                type: string
 *          responses:
 *              200:
 *                  description: Trainee List
 *                  schema:
 *                      properties:
 *                          status:
 *                              example: Ok
 *                          message:
 *                              example: 'Trainee Listed Successfully'
 *                          count:
 *                              example: 2
 *                          data:
 *                              type: object
 *                              allOf[]:
 *                                  - $ref: '#/definitions/TraineeResponse'
 *              401:
 *                  description: unauthorised access
 *                  schema:
 *                      $ref:'#/definitions/Unauthorized'
 */


    .get(authMiddleWare('getTrainee', 'read' ) , validationHandler(validation.get), TraineeController.list)

/**
 * @swagger
 *
 * /api/trainee:
 *      post:
 *        description: Returns the success reponse on creation
 *        security:
 *             - Bearer: []
 *        produces:
 *          - application/json
 *        parameters:
 *          - name: User
 *            description: User's Data.
 *            in: body
 *            required: true
 *            type: object
 *            schema:
 *                $ref: '#/definitions/TraineePost'
 *        responses:
 *          200:
 *            description: Trainee create
 *            schema:
 *                 allOf[]:
 *                   properties:
 *                     status:
 *                         example: Ok
 *                     message:
 *                         example: Trainee created successfully
 *                     data:
 *                         type: object
 *                         allOf[]:
 *                            - $ref: '#/definitions/TraineeResponse'
 *                         properties:
 *                                 password:
 *                                     type: string
 *                                     example: "*****"
 *          401:
 *            description: unauthorised access
 *            schema:
 *                $ref:'#/definitions/Unauthorized'
 */
    .post(authMiddleWare('getTrainee', 'read' ) , validationHandler(validation.create), TraineeController.create)

/**
 * @swagger
 *
 * /api/trainee:
 *      put:
 *          description: Returns the success reponse on creation
 *          security:
 *              - Bearer: []
 *          produces:
 *              - application/json
 *          parameters:
 *              - name: User
 *                description: Trainee's Data
 *                in: body
 *                required: true
 *                type: object
 *                schema:
 *                  allOf[]:
 *                      properties:
 *                          id:
 *                              example: 5e53ac6060a36a15d89a3aa0
 *                dataToUpdate:
 *                  type: object
 *                  allOf[]:
 *                  - $ref: '#/definitions/TraineePost'
 *          responses:
 *              200:
 *                  description: Trainee update
 *                  schema:
 *                      allOf[]:
 *                      properties:
 *                          status:
 *                              example: Ok
 *                          message:
 *                              example: Trainee Updated successfully
 *                          data:
 *                              type: object
 *                              allOf[]:
 *                                  - $ref: '#/definitions/TraineeResponse'
 *              401:
 *                  description: unauthorised access
 *                  schema:
 *                      $ref:'#/definitions/Unauthorized'
 */

    .put(authMiddleWare('getTrainee', 'read' ) , validationHandler(validation.update), TraineeController.update);

/**
 * @swagger
 *
 * /api/trainee/{id}:
 *      delete:
 *          description: Returns the success reponse on creation
 *          security:
 *              - Bearer: []
 *          produces:
 *              - application/json
 *          parameters:
 *              - name: id
 *                description: id of user to be deleted.
 *                in: path
 *                required: true
 *                type: string
 *                example: 5e53ac6060a36a15d89a3aa0
 *          responses:
 *              200:
 *                  description: Trainee deleted
 *                  schema:
 *                      allOf[]:
 *                          properties:
 *                              status:
 *                                  example: Ok
 *                              message:
 *                                  example: Trainee deleted successfully
 *                              data:
 *                                  example: 5e53ac6060a36a15d89a3aa0
 *              401:
 *                  description: unauthorised access
 *                  schema:
 *                      $ref:'#/definitions/Unauthorized'
 */

    TraineeRouter.delete('/:id', authMiddleWare('getTrainee', 'read' ), validationHandler(validation.delete), TraineeController.delete);
export default TraineeRouter;