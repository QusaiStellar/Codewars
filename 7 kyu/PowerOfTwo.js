const n = 4096;

const isPowerOfTwo = (n) => Math.log2(n) % 1 === 0 ? true : false;


console.log(isPowerOfTwo(n));

