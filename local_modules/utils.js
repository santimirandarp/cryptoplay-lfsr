/** Takes a string number like '111', '1', '0' or anything else
 * and converts it to the right number or errors out
 */
export function binaryStringToBinaryNumber(str) {
  const res = parseInt(str, 2);
  if (Number.isNaN(res)) {
    throw new SyntaxError("Error parsing the **binary** coefficients");
  }
  return res;
}

/**
 * to array of 0s and 1s
 */
export function binaryStringToBinaryArray(binString, splitAt) {
  return binString
    .trim()
    .split(splitAt)
    .map((str) => binaryStringToBinaryNumber(str));
}

/**
 * If a charcode is 64 the output will be
 * `[1,0,0,0,0,0,0]`
 */
export function charCodeToBinaryArray(charCode) {
  return binaryStringToBinaryArray(charCode.toString(2), "");
}

/* Receives a string of characters,
 * transforms them to a binary number from 0-65000
 * each character is an element of the array (as binary number)
 */
export function textToCharCodes(msg) {
  return msg.split("").map((symbol) => symbol.charCodeAt());
}

/**
 * The key is a string of 0s and 1s
 * Relax allows longer than the degree of the polynomyal
 * but not shorter.
 */
export function setKeyFromInput(key, length, relax) {
  key = key.split("");
  if (!relax) key = key.slice(0, length);
  return key.map(str => binaryStringToBinaryNumber(str));
}

/**
 * @param msg - array of charcodes
 * @param key - array of 0s and 1s
 */
export function encryptDecrypt(msg, key) {
  let lastBit = 0;
  let cipherText = [];
  for (let i = 0; i < msg.length; i++) {
    const symbol = msg[i];
    const cipherSymbol = symbol
      .map(bit => bit ^ key[lastBit++])
      .join("")
   const charCode = parseInt(cipherSymbol,2);
    cipherText
      .push(String.fromCharCode(charCode));
  }
  return cipherText.join("");
}

/**
 * multiply coefficients with key and do binary addition
 * extending the key to the message length
 */
export function extendKey(key, coefficients, msgLength) {
console.log(msgLength)
  while (key.length < msgLength) {
    let newKeyItem = 0;
    let index = 0;
    coefficients.forEach((c) => {
      newKeyItem ^= c * key[index++];
      key.push(newKeyItem);
    });
  }
  return key;
}
