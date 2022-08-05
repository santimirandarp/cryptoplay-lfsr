#!/usr/bin/env node

// Beginner implementation of lfsr in javascript

import { binaryMsg, coefficients as cf, key } from "./local_modules/set-up.js";

/** 
 * When we run the cli command, the program imports a few functions and does some preprocessing
 * like converting the message to binary. Then the method here just encrypts/decrypts it
 */
export function lsfr(binaryMsg, key, coefficients){

/* encrypted/decrypted msg */
let result;

/* the symbols are a number; here we compute the total number of bits */
let msgLength = 0; 
binaryMsg.forEach( symbol => msgLength += symbol.toString(2).length)


// 1. Reversing both does not alter the network (and the output bit)
// 2. In this way we push new bits to the array, it is simpler to encrypt-decrypt.
key = key.reverse()
cf = cf.reverse()

if (msgLength <= key.length) {
 
  result = encryptDecrypt(binaryMsg, key);

} else {

  const extendedKey = extendKey(cf,key)
  result = encryptDecrypt(binaryMsg, extendedKey) 
}

  return result
}

lfsr(binaryMsg, key, coefficients)
