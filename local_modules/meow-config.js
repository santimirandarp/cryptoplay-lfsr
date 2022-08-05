// cli options for meow

export default {
  importMeta: import.meta,
  flags: {
    /* decrypt message.*/
    decrypt: { type: "boolean", alias: "d" },

    /* plain text */
    message: { type: "string", alias: "m", isRequired: true },

    /* 
    csv string, high to low 
    example 10001 === 1x^4 + 1
    */
    coefficients: { type: "string", alias: "c" },

    /*
     *  Grade, 2 to 24, taken from wikipedia (max period).
     */
    degree: { type: "number", alias: "g" },

    /* 
    acts as true random generator, binary string
    */
    key: { type: "string", alias: "k", isRequired: true },
  },

  /* allows keys >= degree (enforce same length otherwise) */
  relax: { type: "boolean", alias: "r" },

  /*
    print some examples and redirect to github/readme
    */
  help: `

   Usage:
    $ lfsr -m <message> -k <key> -g <degree 2-24>
 
   Options
   --decrypt, -d binary message as a string i.e '000011101010...'. -m and -d are mutually exclusive.
   --message, -m message to be encoded as text. -m and -d are mutually exclusive.
   --coefficients, -c comma separated value for the polynomial coefficients
   --degree, -g Uses maximum-period coefficients (wikipedia). Overrides -c if present. 
   --key, -k Needed to start the 'flip-flop values', acts as TRG. 
             Must be a binary number of length 2^g where g is the degree. 
             If larger we chop it, if shorter it will error out.
 
   Info
    Check Readme or see https://github.com/santimirandarp/crypto-lfsr/README.md
`,
};
