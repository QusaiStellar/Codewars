const S = "YCOLUE'VREER";

const sortMyString = (S) => {

   let even = "";
   let odd = "";

   for (let i = 0; i < S.length; i++) {
      const element = S[i];
      i % 2 ? odd += element : even += element;
   }

   return `${even} ${odd}`;

};

console.log(sortMyString(S));

