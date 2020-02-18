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

    isEmpty = (obj) => {
        for (const prop in obj) {
            if (obj.hasOwnProperty(prop))
                return false;
        }
        return true;
    }

    static getInstance = () => {
        if (TraineeController.instance) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
    }

    // me = (req: IRequest, res: Response, next: NextFunction) => {
    //     console.log('Inside me routes');
    //     res.send(req.user);
    // }

    // login = async(req: IRequest, res: Response, next: NextFunction) => {
    //     try {
    //     const { email, password } = req.body;

    //     const user = await this.userRepository.findone({ emails: email, deletedAt: undefined });
    //     console.log(user);
    //        if (!user) {
    //            next({
    //                error: 'User Not Found',
    //                status: 404
    //            });
    //         }
    //         const isPasswordCorrect = await bcrypt.compare(password, user.password);

    //         console.log(isPasswordCorrect);

    //            if (!isPasswordCorrect) {
    //                return next({
    //                 error: 'Password does not match',
    //                 status: 422
    //                });
    //            }
    //            const token = jwt.sign({ email: user.emails, id: user.originalID, role: user.role }, config.secretKey);
    //            console.log(token);
    //            res.status(200).send({ message: 'Login Successfully', data: token, status: 'success'});
    //        }
    //      catch (err) {
    //            next({
    //             error: 'Login Unsuccessfully',
    //             status: 422
    //            });
    //        }
    // }

    create = async (req: IRequest, res: Response, next: NextFunction) => {
        try {

            console.log(' :::::::::: Inside Create Trainee :::::::: ');

            const { emails, name, address, hobbies, dob, mobileNumber, pass } = req.body;
            const users = await this.userRepository.findone({ emails, deletedAt: undefined });
            console.log(users);
            if (users) {
                return next({
                    error: 'User already exist',
                    message: 'User already exist',
                    timestamp: new Date(),
                    status: 500,
                });
            }
            console.log('request', req.user);
            bcrypt.hash(pass, 10, (err, hash) => {
                // Object.assign(user, {password: hash});
                const password = hash;
                // console.log(password);
                this.userRepository.create({ emails, name, address, hobbies, dob, mobileNumber, password }, req.user).then(user => {
                    if (!user) {
                        return next({
                            error: 'User creation failed',
                            message: 'User creation failed',
                            timestamp: new Date(),
                            status: 500,
                        });
                    }
                    console.log(user);
                    return SystemResponse.success(res, user, 'trainee added successfully');
                });
                // console.log(user);
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

    list = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log(' :::::::::: Inside List Trainee :::::::: ');
            const { limit, skip, sorted} = req.query;
           // console.log(typeof sorted);
           // const sort = { sorted: 1}
            // console.log(sort);
            const counts = await this.userRepository.count();
            const myMap = new Map();
            myMap.set('TotalCount', counts);
            if (req.query.name) {
                if (req.query.email) {
                    // console.log("hello");
                    const user = await this.userRepository.list({ name: req.query.name, emails: req.query.email, deletedAt: undefined }, limit, skip);
                    myMap.set('Users', user);
                    console.log('********************', this.isEmpty(user));
                    if (this.isEmpty(user)) {
                        return next({
                            error: 'No user found',
                            message: 'No user found',
                            timestamp: new Date(),
                            status: 500,
                        });
                    }
                    SystemResponse.success(res, { ToatalCount: myMap.get('TotalCount'), Users: myMap.get('Users') }  , 'Users List');
                }
                else {
                    const user = await this.userRepository.list({ name: req.query.name, deletedAt: undefined }, limit, skip, {'emails': 1});
                   // const counts = await this.userRepository.count();
                   myMap.set('Users', user);
                    if (this.isEmpty(user)) {
                        return next({
                            error: 'No user found',
                            message: 'No user found',
                            timestamp: new Date(),
                            status: 500,
                        });
                    }
                    SystemResponse.success(res, { ToatalCount: myMap.get('TotalCount'), Users: myMap.get('Users') }  , 'Users List');
                }
            }
            else if (req.query.email) {
                const user = await this.userRepository.list({ emails: req.query.email, deletedAt: undefined }, limit, skip);
              //  const counts = await this.userRepository.count();
              myMap.set('Users', user);
                if (this.isEmpty(user)) {
                    return next({
                        error: 'No user found',
                        message: 'No user found',
                        timestamp: new Date(),
                        status: 500,
                    });
                }
                SystemResponse.success(res, { ToatalCount: myMap.get('TotalCount'), Users: myMap.get('Users') }  , 'Users List');
            }
            else {
                const user = await this.userRepository.list({ deletedAt: undefined }, limit, skip, sorted);
              //  const counts = await this.userRepository.count();
              myMap.set('Users', user);
              console.log('hello');
              myMap.set('Users', user);
              console.log(typeof myMap);
                if (this.isEmpty(user)) {
                    return next({
                        error: 'No user found',
                        message: 'No user found',
                        timestamp: new Date(),
                        status: 500,
                    });
                }
                SystemResponse.success(res, { ToatalCount: myMap.get('TotalCount'), Users: myMap.get('Users') }  , 'Users List');
            }
            // const user = await this.userRepository.list({ deletedAt: undefined }, limit, skip);
            // Object.assign(user, { count: counts });
            // console.log(user);
            // console.log(typeof counts);
            // console.log(typeof user);
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
            console.log(id);
            // console.log(req.body);
            // const { emails, name, address, hobbies, dob, mobileNumber } = dataToUpdate;

            const user = await this.userRepository.update(req.user, { originalID: id, deletedAt: undefined }, dataToUpdate);
            const updated = await this.userRepository.findone({originalID: id, deletedAt: undefined});
            return SystemResponse.success(res, updated, 'Updated user');

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
            const user = await this.userRepository.delete({ originalID: id, deletedAt: undefined }, req.user);
            if (!user) {
                return next({
                    error: 'User delete failed',
                    message: 'User delete failed',
                    timestamp: new Date(),
                    status: 500,
                });
            }
            console.log(user);
            return SystemResponse.success(res, user, 'Users List');
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