const suspectInfo = { 'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle'] };
const dead = ['Lucas', 'Bill'];

const killer = (suspectInfo, dead) => {
   const people = Object.keys(suspectInfo)
   const visible = Object.values(suspectInfo)

   for (let i = 0; i < visible.length; i++) {
      const element = visible[i];
      if (dead.every(el => element.includes(el))) {
         return people[i]
      }
   }
};
console.log(killer(suspectInfo, dead));

