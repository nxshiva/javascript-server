let moduleName=process.argv[2]
let role=process.argv[3]
let permissionType=process.argv[4]
let permission= {
    'getUsers': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    delete: [],
    }
}

function hasPermission(moduleName, role, permissionType){

    for(let i=0;i<permission[moduleName][permissionType].length;i++){
        if(permission[moduleName][permissionType][i].match(role)){
            return true;
        }
    }
    return false;
}  
console.log(hasPermission(moduleName, role, permissionType));

