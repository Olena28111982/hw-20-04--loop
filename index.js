// Написати код, який пропонує користувачу вгадати таємниче число. Кількість спроб необмежена!
// Таємниче число створюєте самі і записуєте в константу.  const SECRET_NUMBER = 7;
// Користувач вводить число, ви залежно від того, що ввів користувач пишете:
// - таємне число більше                                       (userNumber = 3)
// - таємне число менше                                       (userNumber = 30)
// - ви ввели не число                                            (userNumber = null)
// // - вітаю, ви вгадали за .. (кількість) спроб     (userNumber = 7)
//const SECRET_NUMBER = 7;
//let countTry = 0;

// let SECRET_NUMBER = 7
// let countTry = 0;

// while (true) {
//   let userInputNumber = prompt("Enter number");
//   const userInput = Number(userInputNumber);
//   countTry++;
//   if (Number.isNaN(userInput) || userInput === null || userInput=== "") {
//     console.log("ви ввели не число");
//     ;
//   }
//   if (SECRET_NUMBER > userInput) {
//     console.log("таємне число більше ");
    
//   }
//   if (SECRET_NUMBER < userInput) {
//     console.log("таємне число менше");
//     }

//   if (SECRET_NUMBER === userInput) {
//     console.log("вітаю, ви вгадали за " +  countTry  + " спроб");
//     countTry;
//     break;
//   }
// }

//Написати скрипт, який виводить парні і кратні 9 числа з діапазону від 0 до 100 в зворотньому порядку

// const min = 0;
// const max = 100;
// const devisor = 9;

// for (let number = max; number > 0; number--) {
//   if (number % 2 || number % devisor) {
//     continue;
//   }
//   console.log(number);
// }

// for (let number = max; number > 0; number--) {
//   if (number % 2 === 0 && number % devisor === 0) {
//     console.log(number);
//   }
// }
// Знайти перше число від 1 до 100, яке ділиться як на 2, так і на 3
// // debugger
// const min = 1;
// const max = 100;
// const devisor2 = 2;
// const devisor3 = 3;
// for (let number = min; number <= max; number++) {
//   if (number % devisor2 || number % devisor3) continue;
//   console.log(number);
//   break;
// }
// // Знайти всі число від 1 до 100, якi ділиться як на 2, так і на 3
// const min = 1;
// const max = 100;
// const devisor2 = 2;
// const devisor3 = 3;
// for (let number = min; number <= max; number++) {
//   if (number % devisor2 || number % devisor3) continue;
//   console.log(number);
//   continue;
// }

//Підрахунок суми чисел: Знайти суму всіх чисел від 1 до 100.. при розвязані цієї просила допомоги чат gpt
// debugger
// const min = 1;
// const max = 100;
// let sum = 0;
// for(let i = min; i <= max; i++){
// sum += i;
//   }
//   console.log(sum)


//Таблиця множення: Вивести таблицю множення для певного числа (наприклад, 5) від 1 до 10.
const number = 5;

// for(let i = 1; i <= 10; i++){
//  const result = number * i
//   console.log(`${number} * ${i} = ${result}`) ///при розв"язані цієї  задач просила допомоги gpt
//     }ц

