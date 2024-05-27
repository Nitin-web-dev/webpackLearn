import { v4 as uuidv4} from 'uuid'
import generateJoke from "./generateJoke";
import "./styles/main.scss"
import laughing from  './assets/laughing.svg'

 generateJoke();




// third party module
let id = uuidv4();
console.log('id: ', id);

let imgEl = document.getElementById('IMG');

imgEl.setAttribute('src', laughing);

// joke get button 
const jokebtn = document.getElementById('jokebtn');
jokebtn.addEventListener('click', generateJoke)