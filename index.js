for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
  //debugger;
}
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }
  return gifts;
}
wrapGifts(gifts);

function writeCards(names, birthday) {
  const newArray = []
  for (let i = 0; i < names.length; i ++ ) {
    const newString = `Thank you, ${names[i]}, for the wonderful ${birthday} gift!`;
    newArray.push(newString);
  };
  return newArray;
}  

function countDown(number) {
  let i =  10;
  while (i >= 0) {
    console.log(i);
    i--;
  }
  return number;
}
