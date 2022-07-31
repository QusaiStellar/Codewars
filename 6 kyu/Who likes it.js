/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

const likes = (names) => {

   let whoLikesIt = "";

   switch (names.length) {
      case 0:
         whoLikesIt = "no one likes";
         break;
      case 1:
         whoLikesIt = `${names[0]} likes`;
         break;
      case 2:
         whoLikesIt = `${names[0]} and ${names[1]} like`;
         break;
      case 3:
         whoLikesIt = `${names[0]}, ${names[1]} and ${names[2]} like`;
         break;
      default:
         const count = names.length - 2;
         whoLikesIt = `${names[0]}, ${names[1]} and ${count} others like`;
         break;
   }

   return `${whoLikesIt} this`;

};
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));