import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import config from './../../config/configuration';
import hasPermission from './permission'

export default (module, permissionType) => (req: Request, res:Response, next:NextFunction) => {

    try{
    console.log(":::::::::::AUTHMIDDLEWARE::::::::::::::::", module, permissionType);
    const token:string = req.headers.authorization;
    const { secretKey } = config;

    const decodeUser = jwt.verify(token, secretKey);
    if(!decodeUser){
        next({
            status: 403,
            error: 'Unauthorized Access' ,
            message: 'Unauthorized Access',
        })
    }

    if(!hasPermission(module, decodeUser['role'], permissionType)){
        next({
            status: 403,
            error: 'Unauthorized Access' ,
            message: 'Unauthorized Access',
        })
    }

    next();
    }
    catch(error){
        next({
            status: 403,
            error: 'Unauthorized Access' ,
            message: error.message,
        });
    }





}