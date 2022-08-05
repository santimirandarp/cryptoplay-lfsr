# crypto-lfsr

The linear feedback shift register is a pseudo random number generator method. 

In this implementation the initial random state is set by the user. Not the most confortable way,
but the user inputs a binary number that will become the initial key.

The binary number has to be the same length than the polynomy's degree.

The key can be longer that the max degree, in which case is trimmed at the right length.


An example:
```
$: npx crypto-lfsr -m "hel" -k 000100101010010010010010010 -g 22
```

## A few options

* `-m <plaintext>` or `--message <plaintext>`
* `-d <ciphertext>` or `--decrypt <ciphertext>`
* `-g <number 2-22>` or `--degree <number 2-22>`
* `-k <binarykey>` or `--key <binarykey>`

_plaintext_ should be double or single-quoted.
