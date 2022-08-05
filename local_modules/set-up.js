//external
import meow from "meow";

//local
import config from "./meow-config.js";
import selectByDegree from "./wikiPolys.js";
import { textToBinary, coeffToBinaryArray } from "./utils.js";
/**
 * The user types a command, we parse the options
 * using "meow" (it isnt complicated to do it manually)
 * and then we move the stuff to a simpler shape.
 * The message's characters are converted to binary,
 * but each character is a separate entity in the array,
 * for example `a = [1000101,0010010,...]`
 * This is bad for characters with a low number, but they aren't many
 * 
 * Apart from the message we have the "coefficients", we put them in an array, each element is either
 * 1 or 0. Same for the "key" which is a long string of 0s 1s the same length (or longer) than the
 * degree of the polynomial. So a polynomy whose max power is 8, needs 8 1s and 0s. 
 * 
 * This is an example of a command:
 * `npx lfsr -m "hel" -g 8 -k 10001000`
 *
 * There can not be blank spaces in the key-numbers
 * For decrypting, you would run `npx lfsr -m <output> -g 8 10001000`
 * 
 * The cipher encrypts and decrypts with the same operation.
 *
 * That is it for this cipher.
*/
const flags = meow(config).flags;

let { coefficients, key } = flags;
const { message, degree, decrypt } = flags;

if (!message) {
  throw new SyntaxError("User message is missing.");
}

if (degree && degree <= 24 && degree >= 2) {
  coefficients = coeffToBinaryArray(selectByDegree[degree].coefficients, '')
} else if (coefficients) {
  coefficients = coeffToBinaryArray(coefficients,',')
} else {
  throw new SyntaxError(
    "Either CSV-coefficients or degree (2 to 24) must be specified."
  );
}

//facilitates operations later on
coefficients.reverse();

 key = key
    .split("")
    .slice(0, coefficients.length)
    .reverse()
    .map(str => {
      const res = parseInt(str, 2);
      if (Number.isNaN(res)) {
        throw new TypeError(
          `Only 0s or 1s are allowed for the key. Found ${str}`
        );
      }
     return res
    });

  if (key.length !== coefficients.length) {
    throw new Error(
      "Initial key length can not be shorter than the coefficients length."
    );
  }


const [binaryMsg, msgLength] = textToBinary(message); // array of array of symbols as binary;

export { msgLength, binaryMsg, coefficients, key, decrypt };
