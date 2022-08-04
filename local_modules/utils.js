export function textToBinary(msg) {
  return msg
    .split("")
    .map((symbol) => symbol.charCodeAt().toString(2))
    .join("")
    .split("")
    .map((str) => parseInt(str, 2));
}

export function parseCoefficients(binString,splitAt) {
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
