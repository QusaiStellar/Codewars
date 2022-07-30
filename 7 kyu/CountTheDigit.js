const n = 5750;
const d = 0;


const nbDig = (n, d) => {

   let allNumbers = "";
   let count = 0;

   for (let i = 0; i <= n; i++) {
      const item = i ** 2;
      allNumbers += item;
   }

   for (let i = 0; i < allNumbers.length; i++) {

      +allNumbers[i] === d ? count++ : null;
   }

   return count;
};

nbDig(n, d);