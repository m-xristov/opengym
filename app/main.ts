import { Logger } from "./logger";
import {Person} from "./person";

const person = new Person();
const logger = new Logger();
const arr = [1, 2, 3];

logger.write("1");
logger.write("test");
logger.write({a: 1, b: 2, c: {a: 1}, d: [1, 2, 3, {k: 123}]});
logger.write("this is a test");
logger.write(person);
logger.write(logger);
logger.write(arr);
logger.write(null);
logger.write(undefined);
logger.write(`this is a test <br />
test2`);
