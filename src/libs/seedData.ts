import { UserRepository } from './../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt';
import config from './../config/configuration';
import * as mongoose from 'mongoose';

const userRepository = new UserRepository();

export default () => {
    const user = {
        name: 'head trainer',
        address: 'noida',
        dob: new Date('12/27/1993'),
        emails: 'vinay@successive.tech',
        mobileNumber: 9718223533,
        role: 'head-trainer',
        hobbies: ['touring']
    };

    userRepository.count().then((count) => {
        console.log('Count as users is', count);

        if (!count) {
            // return userRepository.create(user)
            // .then((res) => {
                bcrypt.hash(config.password, 10, (err, hash) => {
                // })
                const id = undefined;
                Object.assign(user, {password: hash});
                console.log('User seeded successfully');
                return userRepository.create(user, {_id: id});
            });
        }

        console.log('User already seeded');
    })
    .catch((err) => console.log(err));
};