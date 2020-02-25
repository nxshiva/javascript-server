 import * as mongoose from 'mongoose';
 import VersionableSchema from './../versionable/VersionableSchema';
 import * as uniqueValidator from 'mongoose-unique-validator';


 class UserSchema extends VersionableSchema {
     constructor(options) {
         const userSchema = {
            _id: String,
            name: String,
            address: String,
            emails: String,
            dob: Date,
            mobileNumber: Number,
            role: {
                type: String,
                default: 'trainee'
            },
            password: String,
            hobbies: [String]
         };

         super(userSchema, options);
     }
 }

 export default UserSchema;