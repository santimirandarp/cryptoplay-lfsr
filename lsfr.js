#!/usr/bin/env node

// Beginner implementation of lfsr in javascript

import { msgLength, binaryMsg, /*coefficients as cf,*/ key } from "./local_modules/set-up.js";


let cipherText = [ ] ;

if (msgLength <= key.length) {

 let total = 0;

 for(let i=0; i < binaryMsg.length; i++){
  const symbol = binaryMsg[i];
  const length = symbol.toString(2).length; 
  const keyOfSymbolLength = key.slice(total, total+length).join('');
  const cipherSymbol = symbol ^ parseInt(keyOfSymbolLength,2)
  cipherText.push(String.fromCharCode(cipherSymbol));
  total += length
}
 console.log(cipherText.join(""))
} else {
  // extend 'key' to length of 'binaryMsg'
  // for this we do a vector vector product of P * S.slice[0,P.length]
  // and place the result first in the key
  //'binary encrypt'
}
