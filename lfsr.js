#!/usr/bin/env node

// Beginner implementation of lfsr in javascript

import { message, coefficients, key } from "./local_modules/set-up.js";
import {
  extendKey,
  encryptDecrypt,
  setKeyFromInput,
  textToCharCodes,
  charCodeToBinaryArray,
} from "./local_modules/utils.js";

/** stream-cipher using lfsr as PRNG */
export function lfsrStreamCipher(message, key, coefficients) {
  let result;

  /** set up the keys binary array */
  key = setKeyFromInput(key, coefficients.length);

  /* get the message to binary form */
  let msgBitLength = 0;
  const binaryCharCodes = textToCharCodes(message).map((cc) =>
    charCodeToBinaryArray(cc)
  );
  binaryCharCodes.forEach((symbol) => (msgBitLength += symbol.length));

  // 1. Reversing key and coefficients wont alter the network (and the output bit)
  // 2. newBit is pushed to the array.
  key = key.reverse();
  if (msgBitLength <= key.length) {
    result = encryptDecrypt(binaryCharCodes, key);
  } else {
    const cfs = coefficients.reverse();
    const extendedKey = extendKey(key, cfs, msgBitLength);
    result = encryptDecrypt(binaryCharCodes, extendedKey);
  }
  return result;
}

const encrypt = lfsrStreamCipher(message, key, coefficients);
const decrypt = lfsrStreamCipher(encrypt, key, coefficients);

console.log(encrypt, decrypt);
