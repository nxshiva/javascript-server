//import { users } from './../constants.js';
import { validateEmail } from './helpers.js';
let valid=0, invalid=0;
export default function validateUsers(users){
 
    for(let i=0;i<users.length;i++){
        //destructuring
        let {traineeEmail, reviewerEmail} = users[i];
        if(validateEmail(traineeEmail) && validateEmail(reviewerEmail)){
            console.log("Valid: " + traineeEmail + " & " + reviewerEmail)
            valid++;
        }
        else{
            console.log("Invalid: " + traineeEmail + " & " + reviewerEmail)
            invalid++;
        }
    }
    console.log("Number of valid users " + valid +"\n Number of invalid users "+invalid)
}

//validateUsers(users)
