 import * as mongoose from 'mongoose';
 import IUserModel from './IUserModel';
 import { userModel } from './UserModel';
 import IUserCreate from './entities/IUserCreate';

 export class UserRepository {
     private userModel: mongoose.Model<IUserModel>;
     

     constructor() {
         this.userModel = userModel;
     }

     create = (data: IUserCreate) => {
         return this.userModel.create(data);
     }

     count = () => {
         //console.log("hello");
         return this.userModel.countDocuments();
     }

     findOne = (data) => {
         return this.userModel.findById(data);
     }

     update = (id, data) => {
         return this.userModel.update(id, data);
     }

     list = () => {
         return this.userModel.find();
     }

     delete = (id) => {
         return this.userModel.findByIdAndDelete(id);
     }
 }