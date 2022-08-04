#!/usr/bin/env node

// LSFR

import { binaryMsg as msg, /*coefficients as cf,*/ key } from "./local_modules/set-up.js";


let cipherText;

if (msg.length < key.length) {
    cipherText = msg.map( (bit,index) => bit ^ key[index] )
    console.log(cipherText)
} else {
  // extend 'key' to length of 'binaryMsg'
  // for this we do a vector vector product of P * S.slice[0,P.length]
  // and place the result first in the key
  //'binary encrypt'
}
