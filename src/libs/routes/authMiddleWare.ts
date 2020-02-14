import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import config from './../../config/configuration';
import hasPermission from './permission';
import { UserRepository } from './../../repositories/user/UserRepository';
import IRequest from './IRequest';

export default (module, permissionType) => (req: IRequest, res: Response, next: NextFunction) => {

    try {

        const userRepository = new UserRepository();
        console.log(':::::::::::AUTHMIDDLEWARE::::::::::::::::', module, permissionType);
        const token: string = req.headers.authorization;
        const { secretKey } = config;


        const decodeUser = jwt.verify(token, secretKey);
        console.log(decodeUser);
        // console.log(decodeUser)
        // const id = decodeUser["id"];
        const emails = decodeUser[ 'email' ];
        const originalID = decodeUser['id'];
        console.log(originalID);
        console.log(emails);

        if (!decodeUser) {
            next({
                status: 403,
                error: 'Unauthorized Access',
                message: 'Unauthorized Access',
            });
        }
        userRepository.findone({ originalID, emails, deletedBy: undefined })
            .then(data => {
                req.user = data;
                console.log(req.user);
            }).catch(err => next({status: 403,
                error: 'Unauthorized Access',
                message: 'Invalid User',
            })).then(() => {
        if (!hasPermission(module, decodeUser['role'], permissionType)) {
            next({
                status: 403,
                error: 'Unauthorized Access',
                message: 'Unauthorized Access',
            });
        }
        next();
            });
    }
    catch (error) {
        next({
            status: 403,
            error: 'Unauthorized Access',
            message: error.message,
        });
    }
};