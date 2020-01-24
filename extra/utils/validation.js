let users=[
    {
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
    },
    {
        traineeEmail: 'shiva@successive.tech',
        reviewerEmail: 'vikas@successive.tech',
    },
    {
        traineeEmail: 'swapnil@succesive.tech',
        reviewerEmail: 'vikas@successiv.tech',
    }
]
let valid=0, invalid=0;
function validateEmail(email){
    let mailformat = /^[a-zA-Z0-9._-]+@(successive)\.(tech)$/;
    if(email.match(mailformat)){
        return true;
    }
    return false;
}
function validateUsers(users){
 
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

validateUsers(users)
