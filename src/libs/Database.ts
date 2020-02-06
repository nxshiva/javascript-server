import * as mongoose from 'mongoose';
class Database {
    static open = (mongoDBUri: string) => {
        return new Promise((resolve, reject) => {
            mongoose.connect(mongoDBUri, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
                if (err) {
                    console.log('Error in Mongo DB Connection');
                     reject(err);
                }
                resolve();
                console.log('DB Connected Successfully');
            }).catch(error => (console.log(error)));

            })
    
    }

    static disconnect = () => {
        console.log('Disconnect MongoDB');
        mongoose.connection.close();
    }
}

export default Database;