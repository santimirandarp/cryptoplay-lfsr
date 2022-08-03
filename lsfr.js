#!/usr/bin/env node

//LSFR partial, silly, slow, wrong etc. try in Javascript

import meow from 'meow';
import meowConfig from './config.js';
//import selectByGrade from 'wikiPolys'; (just an idea, we create an object with the ones w maximum
//period)


//set up of the CLI parser
const args = meow("parsing...", config)

//get the flags
const { message, polynomy, grade } = args.flags

// set up the method
if(!message){
throw new SyntaxError("User message is missing.")
}

if(!polynomy && !grade){
throw new SyntaxError("Either polynomyal or grade must be specified.")
}

// we may gather them from wikipedia (hardcoded now)
let poly;

if(grade) poly = selectByGrade[`${grade}`]

else if(polynomyal) poly = polynomyal.split(',').map(str=>parseInt(str,2))

// binaryMsg will be an array of bits from the original message
const binaryMsg = msg
.split('')
.map(letter => { 
const binaryLetter = letter.charCodeAt().toString(2);
return parseInt(binaryLetter,2)
})

console.log(binaryMsg)// logs in decimal

let key = initialRandomBinaryKey(polynomy.length - 1)

// now we have the initial state S, P, and  the message

// we need to extend S to binaryMsg.length or encode with it if it is shorter

if(binaryMsg.length < key.length){
 //encode bit by bit using bitwise operators
 // function 'binary encrypt'
 }

else {
// extend 'key' to length of 'binaryMsg'
// for this we do a vector vector product of P * S.slice[0,P.length]
// and place the result first in the key
//'binary encrypt'
}
