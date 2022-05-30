//const sum = (number) => number > 0 ? (number * (number+1)) / 2 : false
//console.log(sum(5))
export const findVowels = (letters) =>
  typeof letters === "string" && letters.match(/[aeiou]/i)
    ? letters.match(/[aeiou]/gi).length
    : 0;
