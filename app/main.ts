import {Person} from "app/person";
import {DB} from "app/test/db";
import { Logger } from "app/logger";

var person = new Person(),
    logger = new Logger(),
    arr = [1, 2, 3];
logger.log('1');
logger.log('test');
logger.log({a: 1, b: 2, c: {a: 1}, d: [1,2,3, {k: 123}]});
logger.log('this is a test');
//console.log(`${person.name} ${DB.title}`);