export function textToBinary(msg) {
  return msg
    .split("")
    .map((symbol) => symbol.charCodeAt().toString(2))
    .join("")
    .split("")
    .map((str) => parseInt(str, 2));
}

export function parseCoefficients(c){
    c.trim()
    .split(",")
    .map((str) => {
      const res = parseInt(str.trim(), 2);
      if (![0, 1].includes(res)) {
        throw new SyntaxError("Error parsing the binary coefficients");
      }
      return res;
    })
}
