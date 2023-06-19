// Code your solutions in this file
function writeCards(names, eventName) {
  const messages = [];

  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
    messages.push(message);
  }
  return messages;
}

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}
const names = ["Guadalupe", "Ollie", "Aki"];
const event = "wonderful surprise gift!"; 
const thankYouMessages = writeCards(names, eventName);
console.log(thankYouMessages);

countDown(5);