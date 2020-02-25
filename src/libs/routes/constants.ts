export let permission = {
    'getTrainee': { 
    read : ['trainee', 'trainer', 'head-trainer'], 
    write : ['trainer', 'head-trainer'],
    delete: ['head-trainer']
    },
    'getUser': { 
        read : ['trainee', 'trainer', 'head-trainer'], 
        write : ['trainer', 'head-trainer'],
        delete: ['head-trainer']
        }
} 


