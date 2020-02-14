 import * as mongoose from 'mongoose';
 import VersionableSchema from '../versionable/VersionableSchema';
 import * as uniqueValidator from 'mongoose-unique-validator';


 class TraineeSchema extends VersionableSchema {
     constructor(options) {
         const traineeSchema = {
            _id: String,
            name: String,
            address: String,
            emails: String,
            dob: Date,
            mobileNumber: Number,
            role: String,
            hobbies: [String]
         };
         super(traineeSchema, options);
     }
 }

 export default TraineeSchema;