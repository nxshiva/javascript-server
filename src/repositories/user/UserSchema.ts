 import * as mongoose from 'mongoose';
 import VersionableSchema from './../versionable/VersionableSchema'

 class UserSchema extends VersionableSchema {
     constructor(options){
         const userSchema = {
            _id: String,
            name: String,
            address: String,
            emails: String,
            dob: Date,
            mobileNumber: Number,
            role: String,
            hobbies: [String]
         }
         super(userSchema, options)
     }
 }

 export default UserSchema;