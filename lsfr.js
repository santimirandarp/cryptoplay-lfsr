#!/usr/bin/env node

// LSFR

import { binaryMsg as msg, coefficients as cf } from "./config.js";

let key = [0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0]//initialRandomBinaryKey(cf.length - 1)
let cipherText;

if (!cf) {
  throw new Error("Problem finding the coefficients")
}

// extend key to binaryMsg.length or encode with it if it is shorter

if(msg.length < key.length){
  //encode bit by bit using bitwise operators
  // function 'binary encrypt'
  cipherText = msg.map( (bit,index) => bit ^ key[index] )

} else {
  // extend 'key' to length of 'binaryMsg'
  // for this we do a vector vector product of P * S.slice[0,P.length]
  // and place the result first in the key
  //'binary encrypt'
}
