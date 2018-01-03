import {Person} from "app/person";
import {DB} from "app/test/db";
var person = new Person();
console.log(`${person.name} ${DB.title}`);