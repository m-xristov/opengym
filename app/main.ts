import {Person} from "app/person";
import {DB} from "app/test/db";
import { Logger } from "app/logger";

let person = new Person(),
    logger = new Logger(),
    arr = [1, 2, 3];

logger.write('1');
logger.write('test');
logger.write({a: 1, b: 2, c: {a: 1}, d: [1,2,3, {k: 123}]});
logger.write('this is a test');
logger.write(person);
logger.write(logger);
logger.write(arr);
logger.write(null);
console.log(`${person.name} ${DB.title}`);