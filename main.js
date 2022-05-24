const btn = document.querySelector(".btn");
const todoList = document.querySelector ("#todo-list");
const todo_Nr = document.querySelector(".todoNr b")

const textbox = document.querySelector(".text-box");

const items = todoList.children;

// console.log(todo_Nr);
// 

btn.addEventListener('click', function(e) {
    e.preventDefault();

   const newItem = document.createElement('li');

   newItem.classList.add('item');
   newItem.innerHTML = textbox.value;
  //  newItem.innerHTML =`Item ${items.length + 1}`

   todoList.appendChild(newItem);

   todo_Nr.innerHTML = items.length;


  textbox.value = "";
})




























// // let inbox = 10;








// // inbox++;

// // console.log(inbox);

// // function max(number1, number2) {

// //     if (number1 > number2) {
// //         return number1
// //     }
// //     else {
// //         return number2
// //     }
// // }

// // let inb = max(9, 4)
// // console.log(inb)

// // let pop = ['dad', 'mom', 'son']

// // for (let i = 0; i < pop.length; i++) {
// //     const element = pop[i];
// //     console.log(element)
// // }

// function guessGame() {
//   let randomNr = Math.random() * 10;
//   let fixedRandomNr = Math.ceil(randomNr);
//   let guess;

//   console.log(fixedRandomNr);
//   console.log(fixedRandomNr);

//   do {
//     guess = prompt("Guess the Number");
//     if (guess > fixedRandomNr) {
//       console.log("YOU LOSE");
//     }
//   } while (guess != fixedRandomNr);
//   console.log("YOU WIN");
// }
// guessGame();

// // let randomNr = Math.random() * 10;
// // let fixedRandomNr = Math.ceil(randomNr);

// // console.log(fixedRandomNr);

// // let userAsk = prompt("Guess the Number");

// // if (userAsk == fixedRandomNr) {
// //     alert('You Win');
// // } else {
// //     alert('You Lose');

// // }
