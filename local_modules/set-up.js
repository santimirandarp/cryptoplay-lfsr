import meow from "meow";

import config from "./meow-config.js";
import polynomials from "./wikiPolys.js";
import { binaryStringToBinaryArray } from "./utils.js";

const flags = meow(config).flags;

let { coefficients, key } = flags;
const { /*relax,*/ message, degree } = flags;

/** set up the coefficients binary array */
if (degree && degree <= 24 && degree >= 2) {
  coefficients = binaryStringToBinaryArray(
    polynomials[degree].coefficients,
    ""
  );
} else if (coefficients) {
  coefficients = binaryStringToBinaryArray(coefficients, ",");
} else {
  throw new Error("csv-coefficients or degree must be specified.");
}

// array of array of symbols as binary;

export { message, coefficients, key };
