/*
Story
Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.

And because the local council has lost most of our tax money to a Nigerian email scam there are no funds to fix the clock properly.

Instead, they are asking for volunteer programmers to write some code that tell the time by only looking at the remaining hour-hand!

What a bunch of cheapskates!

Can you do it?

Kata
Given the angle (in degrees) of the hour-hand, return the time in 12 hour HH:MM format. Round down to the nearest minute.

Examples
12:00 = 0 degrees

03:00 = 90 degrees

06:00 = 180 degrees

09:00 = 270 degrees

12:00 = 360 degrees

Notes
0 <= angle <= 360

Do not make any AM or PM assumptions for the HH:MM result. They are indistinguishable for this Kata.

3 o'clock is 03:00, not 15:00
7 minutes past midnight is 12:07
7 minutes past noon is also 12:07
*/

const whatTimeIsIt = (angle) => {
   const hh = Math.trunc(angle / 30);
   const mm = Math.ceil((angle / 30) * 100 % 1 * 60 / 100);
   let hours = hh;
   let minutes = mm;

   if (mm.toString().length === 1) {
      minutes = `0${mm}`;
   }

   if (hh.toString().length === 1) {
      hours = `0${hh}`;
   } else if (hh !== 10 && hh !== 11 && hh !== 12) {
      hours = hh - 12;
   }

   if (hh === 0) {
      hours = 12;
   }
   console.log((angle / 30).toPrecision(2));

   return `${hours}:${minutes}`;
};

console.log(whatTimeIsIt(50));