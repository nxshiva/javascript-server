export function validateEmail(email){
    let mailformat = /^[a-zA-Z0-9._-]+@(successive)\.(tech)$/;
    if(email.match(mailformat)){
        return true;
    }
    return false;
}
