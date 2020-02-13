import { UserRepository } from './../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt';
import config from './../config/configuration';

const userRepository = new UserRepository();

export default () => {
    const user = {
        name: 'Head Trainer',
        address: 'Noida',
        dob: new Date('12/27/1993'),
        emails: 'vinay@nodeexperts.com',
        mobileNumber: 9718223533,
        role: 'head-trainer',
        hobbies: ['Touring']
    };

    userRepository.count().then((count) => {
        console.log('Count as users is', count);

        if (!count) {
            // return userRepository.create(user)
            // .then((res) => {
                bcrypt.hash(config.password, 10, (err, hash) => {
                // })
                Object.assign(user, {password: hash});
                console.log('User seeded successfully');
                return userRepository.create(user);
            });
        }

        console.log('User already seeded');
    })
    .catch((err) => console.log(err));
}