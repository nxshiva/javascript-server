import * as mongoose from 'mongoose';
import IVersionableDocument from './../versionable/IVersionableDocument';
import * as extendClass from 'extends-classes';
import * as uniqueValidator from 'mongoose-unique-validator';


export default interface IUserModel extends IVersionableDocument {
    _id: string;
    name: string;
    address: string;
    emails: string;
    dob: Date;
    mobileNumber: number;
    role: string;
    password: string;
    hobbies: string[];
}