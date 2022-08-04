import meow from 'meow';

/* coefficients from high to low
 * for example 10001
 * is 1x^4 +  0x^3 + 0x^2 + 0x + 1
 */ 
import selectByGrade from './wikiPolys.js';

// cli options
const config =  { 
  importMeta: import.meta, 
  flags:{
    coefficients: { type:'string', alias:'c' },//csv string, high to low
    grade: { type:'string', alias:'g' },//Grade, 2 to 24, taken from wikipedia (max period).
    message: { type:'string', alias:'m' }// plain text
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

const binaryMsg = message
.split('')
.map(symbol => symbol.charCodeAt().toString(2))
.join("")
.split('')
.map(str => parseInt(str,2))


console.log(`The binary message is ${binaryMsg}\n`)

export { binaryMsg, coefficients }
