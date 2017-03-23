import { uniq } from 'lodash';
//when we use default method for exporting we did not required to give same name while refering  
//i.e apiKey from ./src/config should be any while reffering like key
//import key from './src/config';
//When we did not used default export method then name should be same as exported from requested file
//i.e apiKey from ./src/config should be apiKey 
import { apiKey as aliseName, aliseUrl, sayHi } from './src/config';


const ages = [1, 2, 1];
uniq(ages);
/*console.log(uniq(ages));*/
console.log(aliseName, aliseUrl);

sayHi("Shital");

import User, {createURL, gravavtar} from './src/user';


const userObj = new User('shital', 'shital@c.com', 'cc.com');

console.log(userObj);

const profileUrl = createURL('shital');
console.log(profileUrl);
const avatar = gravavtar(userObj.email); 
console.log(avatar);