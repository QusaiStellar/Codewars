const data = [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]

const dataReverse = (data) => {
   let arrays = []
   let result = []

   for (let i = 0; i < data.length; i += 8) {
      const element = data.slice(i, i + 8)
      arrays.push(element)
   }
   arrays = arrays.reverse()
   for (let i = 0; i < arrays.length; i++) {
      const element = arrays[i];
      result = result.concat(element)
   }
   return result;
};
console.log(dataReverse(data));

[1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]
[1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]

