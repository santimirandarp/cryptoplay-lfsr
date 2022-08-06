// cli options for meow

export default {
  importMeta: import.meta,
  flags: {
    /* plain text */
    path: { type: "string", alias: "p", isRequired: true },

    /* 
    csv string, high to low 
    example 10001 === 1x^4 + 1
    */
    coefficients: { type: "string", alias: "c" },

    /*
     *  Grade, 2 to 24, taken from wikipedia (max period).
     */
    degree: { type: "number", alias: "d" },

    /* 
    acts as true random generator, binary string
    */
    seed: { type: "string", alias: "s", isRequired: true },
  },

  /*
    print some examples and redirect to github/readme
    */
  help: `

   Usage:
    $ lfsr -p <path to file> -s <seed> -d <degree 2-24>
 
   Options
   --path, -p file to be encoded or decoded.
   --coefficients, -c comma separated value for the polynomial coefficients
   --degree, -d Uses maximum-period coefficients (wikipedia). Overrides -c if present. 
   --seed, -s Needed to start the 'flip-flop values', acts as TRG. 
             Must be a binary number of length 2^g where g is the degree. 
             If larger we chop it, if shorter it will error out.
 
   Info
    Check Readme or see https://github.com/santimirandarp/crypto-lfsr/README.md
`,
};
