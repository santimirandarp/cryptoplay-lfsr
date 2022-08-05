# crypto-lfsr

The linear feedback shift register is a pseudo random-number generator method. We can use it to generate the key for a stream cipher. 

The user inputs a `key` as a binary number, this becomes the seed.

The key can be longer that the max degree, in which case is trimmed at the right length.

If the `relax` keyword is used, the algorithm uses all the bits in the key.


An example:
```
$ ./lsfr.js -m "he" -k 00001010010001001001010100110010 -g 22
mt
$ ./lsfr.js -m "mt" -k 00001010010001001001010100110010 -g 22
he
```

## Options

* `-m <plaintext|ciphertext>` or `--message <plaintext|ciphertext>`
* `-g <number 2-22>` or `--degree <number 2-22>`
* `-k <binarykey>` or `--key <binarykey>`
* `-r` or `--relax`
* `-c <csv coefficients>` or `--coefficients <csv coefficients>`
* `-h` or `--help`

 _plaintext_ or _ciphertext_ must be double or single-quoted to avoid problems. 

By `<csv coefficients>` I mean something like `001001` for degree 6, etc.
