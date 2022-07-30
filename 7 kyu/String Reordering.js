const list = [
   { '4': 'dog' }, { '2': 'took' }, { '3': 'his' },
   { '-2': 'Vatsan' }, { '5': 'for' }, { '6': 'a' }, { '12': 'spin' }
];

const sentence = (list) => {
   const sortedList = list.sort((a, b) => Object.keys(a) - Object.keys(b));
   const result = sortedList.map(el => Object.values(el).toString());
   return result.join(" ");
}
console.log(sentence(list));

