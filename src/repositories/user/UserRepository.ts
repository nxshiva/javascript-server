 import * as mongoose from 'mongoose';
 import IUserModel from './IUserModel';
 import VersionableRepository from './../versionable/VersionableRepository'
import { userModel } from './UserModel';

 export class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>>{   
    private userModel: mongoose.Model<IUserModel>;
     

     constructor() {
         super(userModel)
         this.userModel = userModel;
     }


     create = (data: any): Promise<IUserModel> => {
          return super.create(data);
     }

     count = () => {
         return super.count();
     }

     findone = (query:any) => {
         return super.findOne(query);
     }

     update = (id:any, data:any) => {
         console.log(id,"**************************");
         console.log(data,"**************************");
         return super.update(id, data);
     }

     list = (data:any) => {
         return super.list(data);
     }

     delete = (id:any) => {
         console.log(id);
         return super.delete(id);
     }
 }