/* coefficients from high to low
 * for example 10001
 * is 1x^4 +  0x^3 + 0x^2 + 0x + 1
 */ 
import selectByGrade from 'wikiPolys'; // (idea)

// configuration for the cli utility
const config =  { 
  importMeta: import.meta, 
  flags:{
    coefficients: { type:'string', alias:'c' },//write polynomy as csv string, low to high
    grade: { type:'string', alias:'g' },//or a grade from 0 to ?? for the maximum period polynomy from wikipedia
    message: { type:'string', alias:'m' }//message from user
    }
  }


//set up of the CLI parser
const { message, coefficients, grade } = meow("parsing...", config).flags

if(!message){
  throw new SyntaxError("User message is missing.")
  console.log(`the plain message is ${message}`
}

if(!coefficients && !grade){
  throw new SyntaxError("Either polynomyal or grade must be specified.")
}


if(grade <= 24 && grade >= 2){

  coefficients = selectByGrade[grade];
  console.log(`grade specified wikipedia polynomy with max period: ${coefficients}`)

} else if(coefficients) {

  coefficients= coefficients.split(',').map(str=>parseInt(str.trim(),2))
  console.log(`using specified coefficients: ${coefficients}`)
}

const binaryMsg = message
.split('')
.map(letter => { 
    const binaryLetter = letter.charCodeAt().toString(2);
    return parseInt(binaryLetter,2)
    })

console.log(`The binary message is ${binaryMsg}`)

export default { binaryMsg, coefficients }
