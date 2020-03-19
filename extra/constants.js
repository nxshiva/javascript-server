export let permission= {
    'getUsers': {
    read : ['trainee', 'trainer', 'head-trainer'],
    write : ['trainer', 'head-trainer'],
    delete: ['head-trainer'],
    }
}

export let users=[
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
