import * as mongoose from 'mongoose';
import ITraineeModel from './ITraineeModel';
import VersionableRepository from '../versionable/VersionableRepository';
import { traineeModel } from './TraineeModel';

export class TraineeRepository extends VersionableRepository<ITraineeModel, mongoose.Model<ITraineeModel>> {
    private traineeModel: mongoose.Model<ITraineeModel>;
    constructor() {
        super(traineeModel);
        this.traineeModel = traineeModel;
    }


    create = (data: any, traineeID ): Promise<any> => {
        // console.log(data);
        return super.create(traineeID, data);
    }

    count = () => {
        return super.count();
    }

    findone = (query: any) => {
        return super.findOne(query);
    }

    update = (traineeID, id: any, data: any) => {
        return super.update(traineeID, id, data);
    }

    list = (data: any) => {
        return super.list(data);
    }

    delete = (id: any, traineeID) => {
        console.log(id);
        return super.delete(id, traineeID);
    }
}