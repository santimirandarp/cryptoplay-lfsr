import meow from 'meow';

/* coefficients from high to low
 * for example 10001
 * is 1x^4 +  0x^3 + 0x^2 + 0x + 1
 */ 
import selectByGrade from './wikiPolys.js';
import { textToBinary } from './utils.js';

// cli options
const config =  { 
importMeta: import.meta, 
            flags:{
              //csv string, high to low
coefficients: { type:'string', alias:'c' },
              //Grade, 2 to 24, taken from wikipedia (max period).
              grade: { type:'string', alias:'g' },
              // plain text
              message: { type:'string', alias:'m' },
              //acts as true random generator, string-number in decimal converted to binary number 
              key: { type:'number', alias:'k' },
              // print some examples and redirect to github/readme
              help: { type: 'string', alias: 'h' },
              // decrypt message, with the same key.
              decrypt: { type:'boolean', alias:'d' } 
            }
}


const flags = meow("parsing...", config).flags;

const { message, grade } = flags;
let { coefficients } = flags; 

console.log("executing..\n")

if(!message){
  throw new SyntaxError("User message is missing.")
}

console.log(`PLAINTEXT: ${message}\n`)

  if(!coefficients && !grade){
    throw new SyntaxError("Either coefficients or grade must be specified.")
  }


if(grade <= 24 && grade >= 2){

  coefficients = selectByGrade[grade].coefficients;
  console.log(`COEFFICIENTS: ${coefficients.toString(2)}\n`)

} else if(coefficients) {

  coefficients = coefficients.trim().split(',').map(str=> { 
      const res = parseInt(str.trim(),2); 
      if(![0,1].includes(res)) { 
      throw new SyntaxError("Error parsing the binary coefficients")
      } 
      return res
      })
  console.log(`COEFFICIENTS: ${coefficients.toString(2)}\n`)
}

const binaryMsg = textToBinary(message);// array of numbers;
console.log(`The binary message is ${binaryMsg}\n`)

  export { binaryMsg, coefficients }
