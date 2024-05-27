import { v4 as uuidv4} from 'uuid'
import generateJoke from "./generateJoke";

let joke = generateJoke();

console.log(joke)


// third party module
let id = uuidv4();
console.log('id: ', id);
