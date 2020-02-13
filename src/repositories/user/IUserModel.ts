 import * as mongoose from 'mongoose';
 import IVersionableDocument from './../versionable/IVersionableDocument';


 export default interface IUserModel extends IVersionableDocument {
     _id: string;
     name: string;
     address: string;
     emails: string;
     dob: Date;
     mobileNumber: number;
     role: string;
     hobbies: string[];
 }