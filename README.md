# crypto-lfsr

The linear feedback shift register is a pseudo random-number generator method. We can use it to generate the key for a stream cipher. 

Here true random state is set by user input. User inputs a binary number that will become the seed.
The binary number has to be the same length than the polynomy's degree or longer.

The key can be longer that the max degree, in which case is trimmed at the right length.

If the `relax` keyword is used, the algorithm actually uses all the bits in the key.


An example:
```
$ ./lsfr.js -m "he" -k 00001010010001001001010100110010 -g 22
mt
$ ./lsfr.js -m "mt" -k 00001010010001001001010100110010 -g 22
he

```

## A few options

* `-m <plaintext|ciphertext>` or `--message <plaintext|ciphertext>`
* `-g <number 2-22>` or `--degree <number 2-22>`
* `-k <binarykey>` or `--key <binarykey>`
* `-r` or `--relax`
* `-c <csv coefficients>` or `--coefficients <csv coefficients>`
* `-h` or `--help`

 _plaintext_ or _ciphertext_ must be double or single-quoted to avoid problems. 

By `<csv coefficients>` I mean something like `001001` for degree 6, etc.
