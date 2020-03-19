import { Request, Response, NextFunction } from 'express';
function isEmpty(obj) {
    for (const prop in obj) {
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
function isBoolean(val) {
    return val === false || val === true;
 }
function validate(config, req, res, next, value, element, arrayName) {

    if (config[element].string) {
      console.log('check', req[value][element]);
        (isString(req[value][element])) ? (console.log(`${element} is of string type`), req[value][element] = req[value][element].toLowerCase()) : arrayName.push(config[element].errorMessage.typeError);
    }
    if (config[element].regex) {
         // console.log(config[element].regex);
        (config[element].regex.test(req[value][element])) ? console.log('Regex validation is right') : arrayName.push(config[element].errorMessage.regexError);
    }
    if (config[element].number) {
        console.log(typeof req[value][element]);
        (!isNaN(req[value][element])) ? (console.log(isNaN(req[value][element])), console.log(`${element} is of type number`), req[value][element] = parseInt(req[value][element])) : arrayName.push(config[element].errorMessage.typeError);
    }
    if (config[element].isObject) {
        (isObject(req[value][element])) ? console.log(`${element} is of object type`) : arrayName.push(config[element].errorMessage.typeError);
    }
    if (config[element].boolean) {
        (isBoolean(req[value][element])) ? console.log(`${element} is of type boolean`) : arrayName.push(config[element].errorMessage.typeError);
    }
    if (config[element].array) {
      (Array.isArray(req[value][element])) ? console.log(`${element} is of type array`) : arrayName.push(config[element].errorMessage.typeError);
  }
}

export default function (config) {
    return function (req: Request, res: Response, next: NextFunction) {
        const arrayName = [];
        const getKeys = Object.keys(config);
         // console.log(getKeys);
        getKeys.forEach(element => {
            // console.log(element)
            config[element].in.map((value) => {
                let inCount = 0;
                if (!isEmpty(req[value]) || !config[element].required) {
                    // console.log(config[element].required);
                    if (!config[element].required) {
                        // console.log(req[value]);
                        if (!req[value][element] && config[element].default) {
                        req[value][element] = config[element].default;
                       // console.log(req[value][element])
                        }
                        else if (req[value][element]) {
                            console.log(`${element} is there`);
                           // console.log('hello');
                            validate(config, req, res, next, value, element, arrayName);
                        }
                    }
                    else {
                        if (req[value][element]) {
                            console.log(`${element} is there`);
                           // console.log('hello');
                            validate(config, req, res, next, value, element, arrayName);
                        }
                        else {
                            arrayName.push(config[element].errorMessage.Error);
                        }
                    }
                }
                else {
                    inCount++;
                    if (inCount === config[element].in.length) {
                        arrayName.push({
                            error: `Please enter the data in any of the following: ${config[element].in}`,
                            message: `Please enter the data in any of the following: ${config[element].in}`,
                            timestamp: new Date(),
                            status: 500,
                            });
                    }
                }

            });
        });
        if (arrayName.length === 0) {
            next();
        }
        else {
            return next(arrayName);
        }
    };
}
