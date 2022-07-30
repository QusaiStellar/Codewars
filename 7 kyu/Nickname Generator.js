const name = "Grgeg";

const nicknameGenerator = (name) => {
   const vowels = "aeiou";
   let nickname = "";

   if (name.length < 4) return "Error: Name too short";

   if (vowels.indexOf(name[2]) === -1) {
      nickname = name.slice(0, 3);
   } else {
      nickname = name.slice(0, 4);
   }

   return nickname;
};

console.log(nicknameGenerator(name));

