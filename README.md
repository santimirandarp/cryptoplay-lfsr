# cryptoplay-lfsr

The linear feedback shift register is a pseudo-random number-generator method. 

It uses a _seed_ to generate the key for a stream cipher (symmetric cipher). Hence, the _seed_ must be the same for encrypting and decrypting.

## Options

* `-p <path to file>` or `--path <path to file>`
* `-d <number 2-22>` or `--degree <number 2-22>`
* `-s <binaryseed>` or `--seed <binarykey>`
* `-c <csv coefficients>` or `--coefficients <csv coefficients>`
* `-h` or `--help`

By `<csv coefficients>` I mean something like `001001` for degree 6, etc.

## Steps
1. Download
```
git clone https://github.com/santimirandarp/cryptoplay-lfsr
cd cryptoplay-lfsr
```
2. Install all the npm packages (actually just one):
```
npm i
```
Because the script uses NodeJS, both `npm` and `node` need to be installed. [See
here.](https://nodejs.org/en/download/).
3. Running it (example):
```
$ ./lfsr.js -p README.md -s 101010010010111101010010101 -d 24 > encrypted.txt

$ ./lfsr.js -p encrypted.txt -s 101010010010111101010010101 -d 24 > decrypted.txt
```

`decrypted.txt` will be the same than `README.md`. 

I'd say the script is horrible but JS is fast, encryption takes nothing for small files.
