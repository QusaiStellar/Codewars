const arr1 = [1, 2, 3];
const arr2 = [1, 3];


const findMissing = (arr1, arr2) => {

   const sortedArr1 = arr1.sort();
   const sortedArr2 = arr2.sort();
   let missingNumber = null;

   for (let i = 0; i < sortedArr1.length; i++) {
      if (sortedArr1[i] !== sortedArr2[i]) {
         missingNumber = sortedArr1[i];
         return missingNumber;
      }
   }

};

findMissing(arr1, arr2);