import * as mongoose from 'mongoose';
import ITraineeModel from './ITraineeModel';
import TraineeSchema from './TraineeSchema';


const toConvert = {
    transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret._v;
    }
};
export const traineeSchema = new TraineeSchema(
    {
        collection: 'Users',
        toJSON: toConvert,
        toObject: toConvert
    });

export const traineeModel: mongoose.Model<ITraineeModel> = mongoose.model<ITraineeModel>('User', traineeSchema, 'Users', true);