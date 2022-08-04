//external
import meow from "meow";

//local
import config from './meow-config.js';
import selectByDegree from "./wikiPolys.js";
import { textToBinary, parseCoefficients } from "./utils.js";


/* meow will nicely parse `process.args` populated from the command line arguments */
const flags = meow(config).flags;

let { coefficients, key } = flags;
const { message, degree, decrypt } = flags;



if(!key){
  throw new Error("Missing key")
} else{
  key = key
    .split('')
    .slice(0,cf.length)
    .map(str => { 
        const res = parseInt(str,2); 
        if(Number.isNaN(res)) { 
        throw new TypeError(`Only 0s or 1s are allowed for the key. Found ${str}`)
        }})
  if(key.length < cf.length){
    throw new Error("Initial key length can not be shorter than the coefficients length")
  }
}

if (!message) {
  throw new SyntaxError("User message is missing.");
}

if ( degree && degree <= 24 && degree >= 2 ) {
  coefficients = selectByDegree[degree].coefficients;
} else if (coefficients) {
  coefficients = parseCoefficients(coefficients);
} else {
  throw new SyntaxError("Either coefficients or degree (2 to 24) must be specified.");
}


const binaryMsg = textToBinary(message); // array of numbers;

export { binaryMsg, coefficients, key };
