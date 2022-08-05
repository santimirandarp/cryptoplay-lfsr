#!/usr/bin/env node

// Beginner implementation of lfsr in javascript

import { binaryCharCodes, coefficients, key } from "./local_modules/set-up.js";
import { extendKey, encryptDecrypt } from "./local_modules/utils.js";

/** stream-cipher using lfsr as PRNG */
export function lfsrStreamCipher(binaryCharCodes, key, coefficients){

/* encrypted/decrypted msg */
let result;

/* number of bits in message */
let msgLength = 0;
binaryCharCodes.forEach(symbol => msgLength += symbol.length)


// 1. Reversing key and coefficients wont alter the network (and the output bit)
// 2. newBit is pushed to the array.

key = key.reverse()
if (msgLength <= key.length) {

  result = encryptDecrypt(binaryCharCodes, key);

} else {

  const cfs = coefficients.reverse()
  const extendedKey = extendKey(key, cfs, msgLength)
  result = encryptDecrypt(binaryCharCodes, extendedKey) 

}
  return result
}

console.log(lfsrStreamCipher(binaryCharCodes, key, coefficients))
