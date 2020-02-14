import { Request, Response, NextFunction } from 'express';
import { UserRepository } from './../../repositories/user/UserRepository';
import SystemResponse from '../../libs/SystemResponse';
import IRequest from './../../libs/routes/IRequest';
import * as bcrypt from 'bcrypt';
import config from './../../config/configuration';
import * as jwt from 'jsonwebtoken';

class TraineeController {
    static instance: TraineeController;
    static userRepository: UserRepository;

    userRepository = new UserRepository();

    static getInstance = () => {
        if (TraineeController.instance) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
    }

    me = (req: IRequest, res: Response, next: NextFunction) => {
        console.log('Inside me routes');
        res.send(req.user);
    }

    login = async(req: IRequest, res: Response, next: NextFunction) => {
        try {
        const { email, password } = req.body;

        const user = await this.userRepository.findone({ emails: email, deletedAt: undefined });
        console.log(user);
           if (!user) {
               next({
                   error: 'User Not Found',
                   status: 404
               });
            }
            const isPasswordCorrect = await bcrypt.compare(password, user.password);

            console.log(isPasswordCorrect);

               if (!isPasswordCorrect) {
                   return next({
                    error: 'Password does not match',
                    status: 422
                   });
               }
               const token = jwt.sign({ email: user.emails, id: user.originalID, role: user.role }, config.secretKey);
               console.log(token);
               res.status(200).send({ message: 'Login Successfully', data: token, status: 'success'});
           }
         catch (err) {
               next({
                error: 'Login Unsuccessfully',
                status: 422
               });
           }
    }

    create = (req: IRequest, res: Response, next: NextFunction) => {
        try {

            console.log(' :::::::::: Inside Create Trainee :::::::: ');

            const { emails, name, address, hobbies, dob, mobileNumber, role } = req.body;
            console.log("request", req.user);
            this.userRepository.create({
                emails, name, address, hobbies, dob, mobileNumber, role
            }, req.user).then(user => {
                return SystemResponse.success(res, user, 'trainee added successfully');
            }).catch(error => {
                throw error;
            });

        }
        catch (err) {
            return next({
                error: err.message,
                    message: err.message,
                    timestamp: new Date(),
                    status: 500,
            });
        }
    };

    list = async(req: Request, res: Response, next: NextFunction) => {
        try {
            console.log(' :::::::::: Inside List Trainee :::::::: ');
            await this.userRepository.list({ deletedAt: undefined }).then(user => {
                console.log(user);
                return SystemResponse.success(res, user, 'Users List');
            }).catch(error => {
                throw error;
            });
        }
        catch (err) {
            return next({
                error: err.message,
                    message: err.message,
                    timestamp: new Date(),
                    status: 500,
            });
        }
    };
    update = async (req: IRequest, res: Response, next: NextFunction) => {
        try {
            console.log(' :::::::::: Inside Update Trainee :::::::: ');
            const { id, dataToUpdate } = req.body;
            console.log(req.body);
            // const { emails, name, address, hobbies, dob, mobileNumber } = dataToUpdate;

            await this.userRepository.update(req.user, { _id: id }, dataToUpdate).then(user => {
                // this.userRepository.findone({_id:id, deletedAt:null}).then(user => {
                //     return SystemResponse.success(res, user, 'Updated user');
                // }).catch(error => {
                //     throw error
                // })
                return SystemResponse.success(res, user, 'trainee updated successfully');
            }).catch(error => {
                throw error;
            });
        }
        catch (err) {
            return next({
                error: err.message,
                    message: err.message,
                    timestamp: new Date(),
                    status: 500,
            });
        }
    };
    delete = async (req: IRequest, res: Response, next: NextFunction) => {

        try {
            console.log(' :::::::::: Inside Delete Trainee :::::::: ');
            const { id } = req.params;
            await this.userRepository.delete({ _id: id }, req.user ).then(user => {
                console.log(user);
                return SystemResponse.success(res, user, 'Users List');
            }).catch(error => {
                throw error;
            });
        }
        catch (err) {
            return next({
                error: err.message,
                    message: err.message,
                    timestamp: new Date(),
                    status: 500,
            });
        }
    };
}

export default TraineeController.getInstance();