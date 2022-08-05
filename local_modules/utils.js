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
