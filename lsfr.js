#!/usr/bin/env node

// LSFR

import { binaryMsg, coefficients as cf } from "./config.js";

let key = initialRandomBinaryKey(cf.length - 1)

if (!cf) {
  throw new Error("Problem finding the coefficients")
}

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
