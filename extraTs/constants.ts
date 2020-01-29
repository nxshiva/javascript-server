export let permission : Ipermission = {
    'getUsers': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    delete: [], 
    }
} 

export let users : Array<Iusers> =[
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
