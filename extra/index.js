
import { diamondPattern, equilateralPattern } from './patterns/index.js';
import { hasPermission, validateUsers } from './utils/index.js';
import { users } from './constants.js';
diamondPattern(4);
equilateralPattern(4);
console.log(hasPermission('getUsers', 'trainee', 'read'))
validateUsers(users)


