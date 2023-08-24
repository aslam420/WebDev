// deafult imports
import obj from './temp1';
import yolo from './temp1';

console.log(obj);
console.log(yolo);

//named imports
import {key} from './strings';
import { exportedObj } from './strings';
// ab isko access kr skte h hathi k tarah (key naam hathi v h)
import {key as hathi} from './strings';
// import all as bundled (ek saath sb aa jaega) 
//bundle ek object h uske andr key-value hogi, exportedObj aur uski value
import * as bundled from './strings';
bundled.key;
bundled.exportedObj;