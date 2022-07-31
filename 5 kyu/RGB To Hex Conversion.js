
/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

const rgb = (r, g, b) => {
   const array = [r, g, b].map(el => {
      let element = 0;
      if (el < 0) {
         element = 0;
         element = element.toString(16);
      } else if (el > 255) {
         element = 255;
         element = element.toString(16);
      } else {
         element = el.toString(16);
      }

      if (element.toString().length === 1) {
         element = `0${element}`;
      }

      return element;
   });

   if (array.join("").length === 3) {
      return [...array, ...array].join("").toUpperCase();
   } else {
      return array.join("").toUpperCase();
   }
};

console.log(rgb(140, 160, 4));
