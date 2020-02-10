 import * as mongoose from 'mongoose';


 export default interface IUserModel extends mongoose.Document {
     id: string;
     name: string;
     address: string;
     emails: string;
     dob: Date;
     mobileNumber: number;
     hobbies: string[];
 }