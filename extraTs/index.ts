
import { diamondPattern, equilateralPattern } from './patterns/index';
import { hasPermission, validateUsers } from './utils/index';
import { users } from './constants';
diamondPattern(4);
equilateralPattern(4);
console.log(hasPermission("getUsers", "trainee", "read"))
validateUsers(users)


