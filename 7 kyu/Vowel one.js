const s = "vowelOne";

const vowelOne = (s) => {
   const vowels = "aeiouy";

   const result = s
      .toLowerCase()
      .split("")
      .map(el => vowels.indexOf(el) === -1 ? "0" : "1")
      .join("");

   return result;
};

console.log(vowelOne(s));

