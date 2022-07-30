const diary1 = {
   'algebra': 6,
   'history': 7,
   'physics': 8,
   'geography': 9,
   'chemistry': 10
};

const diary2 = {
   'algebra': 6,
   'history': 7,
   'physics': 8,
   'geography': 9,
   'chemistry': 10
};

const diary3 = {
   'algebra': 6,
   'history': 7,
   'physics': 8,
   'geography': 9,
   'chemistry': 10
};


const whoseBicycle = (diary1, diary2, diary3) => {

   const diaries = [
      diary1,
      diary2,
      diary3
   ];

   const marks = [];

   for (let i = 0; i < 3; i++) {
      marks[i] = Object.values(diaries[i]).reduce((acc, val) => acc + val);
   }

   const maxMarks = Math.max(...marks);
   const index = marks.lastIndexOf(maxMarks);
   let son = index === 0 ? "first" : index === 1 ? "second" : "third";

   return `I need to buy a bicycle for my ${son} son.`;
};
console.log(whoseBicycle(diary1, diary2, diary3));

