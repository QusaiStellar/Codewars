
/*
A Bingo card contains 24 unique and random numbers according to this scheme:

5 numbers from the B column in the range 1 to 15
5 numbers from the I column in the range 16 to 30
4 numbers from the N column in the range 31 to 45
5 numbers from the G column in the range 46 to 60
5 numbers from the O column in the range 61 to 75
Task
Write the function get_card()/getCard(). The card must be returned as an array of Bingo style numbers:

[ 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... ]
The numbers must be in the order of their column: B, I, N, G, O. Within the columns the order of the numbers is random.
*/

const getCard = () => {

   let firstColumn = [];
   let secondColumn = [];
   let thirdColumn = [];
   let fourthColumn = [];
   let fifthColumn = [];

   const randomIntFromInterval = (min, max) => { // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
   };

   const uniqeInt = (array, element, letter, minNum, maxNum) => {
      if (array.indexOf(element) !== -1) {
         element = `${letter + randomIntFromInterval(minNum, maxNum)}`;
         uniqeInt(array, element, letter, minNum, maxNum);
      } else {
         array.push(element);
      }
   };



   for (let i = 0; i < 5; i++) {
      let firstNumber = `B${randomIntFromInterval(1, 15)}`;
      let secondNumber = `I${randomIntFromInterval(16, 30)}`;
      let fourthNumber = `G${randomIntFromInterval(46, 60)}`;
      let fifthNumber = `O${randomIntFromInterval(61, 75)}`;

      uniqeInt(firstColumn, firstNumber, `B`, 1, 15);
      uniqeInt(secondColumn, secondNumber, `I`, 16, 30);
      uniqeInt(fourthColumn, fourthNumber, `G`, 46, 60);
      uniqeInt(fifthColumn, fifthNumber, `O`, 61, 75);
   }

   for (let i = 0; i < 4; i++) {
      let thirdNumber = `N${randomIntFromInterval(31, 45)}`;

      uniqeInt(thirdColumn, thirdNumber, `N`, 31, 45);
   }

   const card = [...firstColumn, ...secondColumn, ...thirdColumn, ...fourthColumn, ...fifthColumn];

   return card;
};

console.log(getCard());
