export function textToBinary(msg){
  return msg
    .split('')
    .map(symbol => symbol.charCodeAt().toString(2))
    .join("")
    .split('')
    .map(str => parseInt(str,2))
}
