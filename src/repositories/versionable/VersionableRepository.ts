import * as mongoose from 'mongoose';
import IRequest from './../../libs/routes/IRequest';

export default class VersionableRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
    private modelTypes: M;

    constructor(modelType) {
        this.modelTypes = modelType;
    }

    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }

    public async count(): Promise<number> {
        return await this.modelTypes.find({deletedAt: undefined}).count();
    }

    public async create(userID, options): Promise<D> {
        const id = VersionableRepository.generateObjectId();
        console.log('**************************');
        console.log(options);
        return await this.modelTypes.create({
            ...options,
            _id: id,
            originalID: id,
            createdBy: userID._id
        });
    }

    public async findOne(options): Promise<D> {
       return await this.modelTypes.findOne(options);
    }

    public async update(userID, id, data) {
        const user = await this.modelTypes.findOne(id);
             // console.log("hello",user);
                 Object.assign(user, data);
                const newid = VersionableRepository.generateObjectId();
                const newObj = {
                    ...user.toObject(),
                    _id: newid,
                    createdBy: userID._id,
                    updatedAt: new Date(),
                    updatedBy: userID._id,
                };
                this.modelTypes.create(newObj);
        return await this.modelTypes.update(id, { deletedBy: userID._id, deletedAt: new Date() });
    }

    // public async updateAndCreate(userID, options) {
    //     console.log(options);
    //     const id = VersionableRepository.generateObjectId();
    //     const newObj = {
    //         ...options.toObject(),
    //         _id: id,
    //         createdBy: userID._id
    //         updatedAt: new Date(),
    //         updatedBy: userID._id,
    //     };
    //     console.log(newObj);
    //     return await this.modelTypes.create(newObj);
    // }

    public async delete(id, userID) {
        console.log(id);
    return await this.modelTypes.update(id, { deletedBy: userID._id, deletedAt: new Date() });
    }

    public async list(data, limit, skip, sorts): Promise<any> {
        if (sorts) {
            return this.modelTypes.find(data).limit(limit).skip(skip).sort(sorts);
        }
        return this.modelTypes.find(data).limit(limit).skip(skip).sort({'updatedAt': 1});
    }

}