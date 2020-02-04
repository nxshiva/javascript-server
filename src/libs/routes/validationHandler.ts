import { Request, Response, NextFunction } from 'express';

function isEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}

function isString(value) {
    return typeof value === 'string' || value instanceof String;
}

function isObject(value) {
    return value && typeof value === 'object' && value.constructor === Object;
}

function isNumber(value) {
    return typeof value === 'number' && isFinite(value);
}

export default function (config) {
    return function (req: Request, res: Response, next: NextFunction) {

        //console.log('The config is', config);
        const arrayName = [];
        //console.log(req);
        const configKeys = Object.keys(config);
        console.log(configKeys);
        console.log(req.method);

        if (req.method.match('GET')) {
            configKeys.map((key) => {
                if (key.match('get')) {
                    console.log('key is ' + key);
                    const getKeys = Object.keys(config.get);
                    getKeys.forEach(element => {
                        config.get[element].in.map((value) => {
                            if (!(isEmpty(req[value]))) {
                                if (req[value][element] === undefined) {
                                req[value][element] = config.get[element].default;
                                }
                                
                                if (!isNaN(req.query[element])) {
                                console.log(`${element} is of type number`);
                                }
                                else {
                                arrayName.push(config.get[element].errorMessage.typeError);
                                }
                                }
                                
                        })

                    });
                }
            })
        }
        else if (req.method.match('POST')) {
            configKeys.map((key) => {
                if (key.match('create')) {
                    console.log('key is ' + key);
                    const createKeys = Object.keys(config.create);
                    console.log(createKeys);
                    createKeys.forEach(element => {
                        config.create[element].in.map((value) => {
                            if (!(isEmpty(req[value]))) {
                                if (!(req[value][element] === undefined)) {
                                console.log(`${element} is there`);
                                }
                                else {
                                arrayName.push(config.create[element].errorMessage.idError);
                                }
                                 
                                if (isString(req[value][element])) {
                                console.log(`${element} are of string type`);
                                }
                                else {
                                arrayName.push(config.create[element].errorMessage.typeError);
                                }
                                if (element === 'name' && config.create.name.regex.test(req[value][element])) {
                                console.log("Regex validation is right");
                                }
                                else {
                                arrayName.push(config.create[element].errorMessage.regexError);
                                }
                                }
                                    
                        })

                    });

                }
            })

        }
        else if (req.method.match('PUT')) {
            configKeys.map((key) => {
                if (key.match('update')) {
                    console.log('key is ' + key);
                    const updateKeys = Object.keys(config.update);
                    console.log(updateKeys);
                    updateKeys.forEach(element => {
                        config.update[element].in.map((value) => {
                            if (!(isEmpty(req[value]))) {
                                if (!(req[value][element] === undefined)) {
                                console.log(`${element} is there`);
                                }
                                else {
                                arrayName.push(config.update[element].errorMessage.idError);
                                }
                                if (isString(req[value][element]) || isObject(req[value][element])) {
                                console.log(`${element} is of correct type`);
                                }
                                else {
                                arrayName.push(config.update[element].errorMessage.typeError);
                                }
                                }
                                
                        })

                    });

                }
            })

        }
        else if (req.method.match('DELETE')) {
            configKeys.map((key) => {
                if (key.match('delete')) {
                    console.log('key is ' + key);
                    const deleteKeys = Object.keys(config.delete);
                    console.log(deleteKeys);
                    deleteKeys.forEach(element => {
                        config.delete[element].in.map((value) => {
                            console.log(value);
                            console.log(req.params);
                            if (!(req[value][element] === undefined)) {
                                console.log(`${element} is there`);
                            }

                            else {
                                arrayName.push(config.delete[element].errorMessage.idError);
                            }

                        })

                    });
                }
            })

        }
        else {
            console.log("error")
        }
        return next(arrayName);
    }
}
