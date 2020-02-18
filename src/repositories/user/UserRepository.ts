import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import VersionableRepository from './../versionable/VersionableRepository';
import { userModel } from './UserModel';

export class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {
    private userModel: mongoose.Model<IUserModel>;
    constructor() {
        super(userModel);
        this.userModel = userModel;
    }


    create = (data: any, userID ): Promise<any> => {
        // console.log(data);
        return super.create(userID, data);
    }

    count = () => {
        return super.count();
    }

    findone = (query: any) => {
        return super.findOne(query);
    }

    update = (userID, id: any, data: any) => {
        return super.update(userID, id, data);
    }

    list = (data: any, limit, skip, sorts = undefined) => {
        return super.list(data, limit, skip, sorts);
    }

    delete = (id: any, userID) => {
        console.log(id);
        return super.delete(id, userID);
    }
}