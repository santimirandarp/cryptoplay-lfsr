#!/usr/bin/env node

// Beginner implementation of lfsr in javascript

import { message, coefficients, seed } from "./local_modules/set-up.js";
import {
  extendKey,
  encryptDecrypt,
  formatKey,
  textToCharCodes,
  charCodeToBinaryArray,
} from "./local_modules/utils.js";

/** 
 * Transforms input message using a random seed.
 * User is supposed to use the CLI, the function does not 
 * search Wikipedia's coefficients, for example.
 * @param message -  user input message as a string.
 * @param seed - strings of 1s and 0s used as a true random number gen.
 * @param coefficients -  polynomial coefficients.
 */
export function lfsrStreamCipher(message, seed, coefficients) {
  let result;

  /** set up the seeds binary array */
  const key = formatKey(seed, coefficients.length);

  /* get the message to binary form */
  const binaryCharCodes = textToCharCodes(message).map((cc) =>
    charCodeToBinaryArray(cc)
  );

  const msgBitLength = binaryCharCodes.reduce((acc, item) => acc + item.length, 0);

  // 1. Reversing seed and coefficients wont alter the network (and the output bit)
  // 2. newBit is pushed to the array.
  let reversedKey = [...key].reverse();
  if (msgBitLength <= reversedKey.length) {
    result = encryptDecrypt(binaryCharCodes, reversedKey);
  } else {
    const reversedCoefficients = [...coefficients].reverse();
    const extendedRKey = extendKey(reversedKey, reversedCoefficients, msgBitLength);
    result = encryptDecrypt(binaryCharCodes, extendedRKey);
  }
  return result;
} 

console.log(lfsrStreamCipher(message,seed,coefficients));
