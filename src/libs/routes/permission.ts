import { permission } from './constants';
export default function hasPermission(moduleName: string, role: string, permissionType: string): boolean {

    for (let i = 0; i< permission[moduleName][permissionType].length ; i++) {
        if (permission[moduleName][permissionType][i] === role) {
            return true;
        }
    }
    return false;
}

