import { v4 as uuidv4} from 'uuid'
import generateJoke from "./generateJoke";
import "./styles/main.scss"
import laughing from  './assets/laughing.svg'

let joke = generateJoke();

console.log(joke)


// third party module
let id = uuidv4();
console.log('id: ', id);

let jokeEl = document.getElementById('IMG');

jokeEl.setAttribute('src', laughing);

