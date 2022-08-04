import meow from 'meow';

/* coefficients from high to low
 * for example 10001
 * is 1x^4 +  0x^3 + 0x^2 + 0x + 1
 */ 
import selectByGrade from './wikiPolys.js'; // (idea)
// configuration for the cli utilit

const config =  { 
  importMeta: import.meta, 
  flags:{
    coefficients: { type:'string', alias:'c' },//write polynomy as csv string, low to high
    grade: { type:'string', alias:'g' },//or a grade from 0 to ?? for the maximum period polynomy from wikipedia
    message: { type:'string', alias:'m' }//message from user
    }
  }


const flags = meow("parsing...", config).flags

const { message, grade } = flags;
let { coefficients } = flags; 

console.log("\n")

if(!message){
  throw new SyntaxError("User message is missing.")
  console.log(`the plain message is ${message}\n`)
}

if(!coefficients && !grade){
  throw new SyntaxError("Either polynomyal or grade must be specified.")
}


if(grade <= 24 && grade >= 2){

  coefficients = selectByGrade[grade].coefficients;
  console.log(`Coefficients: ${coefficients.toString(2)}\n`)

} else if(coefficients) {

  coefficients= coefficients.split(',').map(str=>parseInt(str.trim(),2))
  console.log(`using specified coefficients: ${coefficients.toString(2)}\n`)
}

const binaryMsg = message
.split('')
.map(letter => { 
    const binaryLetter = letter.charCodeAt().toString(2);
    return parseInt(binaryLetter,2)
    })

console.log(`The binary message is ${binaryMsg}\n`)

export { binaryMsg, coefficients }
