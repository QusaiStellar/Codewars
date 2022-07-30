const numbers = [3, 2, 6, 8, 2, 3, 8];

const maxTriSum = (numbers) => {

   const filtredNumbers = numbers.filter((item, index) => numbers.indexOf(item) === index);
   const sortedNumbers = filtredNumbers.sort((a, b) => b - a);
   const result = sortedNumbers[0] + sortedNumbers[1] + sortedNumbers[2];

   return result;

};
console.log(maxTriSum(numbers));
