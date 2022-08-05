export function textToBinary(msg) {
  // each character is now an binary array of numbers
  const binaryString = msg
    .split("")
    .map(symbol => symbol
    .charCodeAt()
    .toString(2))
 const binaryMsg = binaryString.map(symbol => parseInt(symbol, 2))
 return [ binaryMsg, binaryString.join(',').length ] 

}

export function coeffToBinaryArray(binString,splitAt) {
  return binString.trim()
    .split(splitAt)
    .map((str) => {
      const res = parseInt(str, 2);
      if (![0, 1].includes(res)) {
        throw new SyntaxError("Error parsing the binary coefficients");
      }
      return res;
    });
}

/*
 * The key is a string of 0s and 1s
 * Relax allows longer than the degree of the polynomyal 
 * but not shorter.
 */
export function prepareKey(key, length, relax){

key = key.split("")

if(!relax) key = key.slice(0,length)

return key.map( str => {
      const res = parseInt(str, 2);
      if (Number.isNaN(res)) {
      throw new TypeError( `Key uses 0s and 1s. Found ${str}`);
      }
      return res
      });

}
