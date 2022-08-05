/* Receives a string of characters,
 * transforms them to a binary number from 0-65000
 * each character is an element of the array (as binary number)
 */
export function textToBinary(msg) {
  const binaryString = msg
    .split("")
    .map((symbol) => symbol.charCodeAt().toString(2));

  return binaryString.map((symbol) => parseInt(symbol, 2));
}

/**
 * the coefficients taken as a csv string are converted into a binary
 * array of numbers
 */
export function coeffToBinaryArray(binString, splitAt) {
  return binString
    .trim()
    .split(splitAt)
    .map((str) => {
      const res = parseInt(str, 2);
      if (![0, 1].includes(res)) {
        throw new SyntaxError("Error parsing the binary coefficients");
      }
      return res;
    });
}

/**
 * The key is a string of 0s and 1s
 * Relax allows longer than the degree of the polynomyal
 * but not shorter.
 */
export function prepareKey(key, length, relax) {
  key = key.split("");

  if (!relax) key = key.slice(0, length);

  return key.map((str) => {
    const res = parseInt(str, 2);
    if (Number.isNaN(res)) {
      throw new TypeError(`Key uses 0s and 1s. Found ${str}`);
    }
    return res;
  });
}

export function encryptDecrypt(msg, key) {
  let total = 0;
  let cipherText = [];
  for (let i = 0; i < msg.length; i++) {
    const symbol = msg[i];
    const length = symbol.toString(2).length;
    const keyOfSymbolLength = key.slice(total, total + length).join("");
    const cipherSymbol = symbol ^ parseInt(keyOfSymbolLength, 2);
    cipherText.push(String.fromCharCode(cipherSymbol));
    total += length;
  }
  return cipherText.join("");
}

export function extendKey(key, coefficients, msgLength) {
  while (key.length < msgLength) {
    let newKeyItem;
    coefficients.forEach((c, index) => {
      newKeyItem ^= c * key[index];
      key.push(newKeyItem);
    });
  }
  return key;
}
