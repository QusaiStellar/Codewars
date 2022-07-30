
/*Create a function strCount (takes an object as argument) that will count all string values inside an object. 
For example:

strCount({
   first: "1",
   second: "2",
   third: false,
   fourth: ["anytime",2,3,4],
   fifth:  null
   })
   //returns 3
*/
const obj = {
   first: "1",
   second: "2",
   third: false,
   fourth: ["anytime", 2, 3, 4],
   fifth: null,
   sixth: undefined,
   seventh: {
      first: {
         first: "1",
         second: "2",
      },
      second: "2",
   }
};

const strCount = (obj) => {
   let count = 0;

   for (let key in obj) {

      if (typeof obj[key] == "string") count++;

      if (typeof obj[key] == "object") count += strCount(obj[key]);

   }

   return count;
};

console.log(strCount(obj));
