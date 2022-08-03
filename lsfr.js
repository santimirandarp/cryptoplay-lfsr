#!/usr/bin/env node

//LSFR partial, silly, slow, wrong etc. try in Javascript
//import selectByGrade from 'wikiPolys'; // (idea)
import { binaryMsg, polynomy:p, grade } from "./config.js";

let polynomial;

if( grade ) polynomial = selectByGrade[`${grade}`]

else if( p ) poly = polynomyal.split(',').map(str=>parseInt(str,2))


console.log(binaryMsg)// logs in decimal

let key = initialRandomBinaryKey(polynomial.length - 1)

  // extend key to binaryMsg.length or encode with it if it is shorter

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
