import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';

const ages = [1, 2, 1];
console.log(uniq(ages));