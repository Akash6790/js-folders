// alert("hello");
// let a=prompt("enter something here :"," hey bro enter he corect content");
// a=Number.parseInt(a)
// alert("you enter type "+typeof a);
// let c=confirm("are you going to writte here ")
// if(c){
//     document.write(a);
// }
// else{
//     document.write("i will give you next time")
// }
// document.body.style.background="orange";

// let number =prompt("enter the no:");
// number =Number.parseInt(number);
//  if(number>4){
//     location.href="https://google.com"
//  }

//  let color=prompt("enter ")
//  document.body.style.background=color

// Snake, Water, Gun Game

// let startGame = confirm("Do you want to play Snake, Water, Gun game?");

// if (startGame) {
//     let choices = ["s", "w", "g"];
//     let userScore = 0;
//     let computerScore = 0;

//     for (let round = 1; round <= 10; round++) {
//         let userChoice = prompt(`Round ${round}/10:\nEnter 's' for Snake, 'w' for Water, 'g' for Gun`).toLowerCase();

//         if (!choices.includes(userChoice)) {
//             alert("Invalid input! Please enter only s, w, or g.");
//             round--; // repeat the round
//             continue;
//         }

//         let computerChoice = choices[Math.floor(Math.random() * 3)];

//         // Game logic
//         let result = "";

//         if (userChoice === computerChoice) {
//             result = "It's a Draw!";
//         } else if (
//             (userChoice === "s" && computerChoice === "w") || 
//             (userChoice === "w" && computerChoice === "g") || 
//             (userChoice === "g" && computerChoice === "s")
//         ) {
//             result = "You Win!";
//             userScore++;
//         } else {
//             result = "Computer Wins!";
//             computerScore++;
//         }

//         alert(
//             `Your choice: ${userChoice}\nComputer's choice: ${computerChoice}\nResult: ${result}\n\nScore:\nYou: ${userScore}\nComputer: ${computerScore}`
//         );
//     }

//     // Final result
//     let finalResult = "";
//     if (userScore > computerScore) {
//         finalResult = "🎉 You are the final winner!";
//     } else if (computerScore > userScore) {
//         finalResult = "😞 Computer is the final winner!";
//     } else {
//         finalResult = "🤝 It's a tie overall!";
//     }

//     alert(`Game Over!\n\nFinal Score:\nYou: ${userScore}\nComputer: ${computerScore}\n\n${finalResult}`);
// } else {
//     alert("Game canceled. Maybe next time!");
// }

// let startgame=confirm("enter you want to play snake,wate,gun game ");

// if (startgame){
//     let choices=["s","w","g"];
//     let userScore=0;
//     let computerScore=0;

//     for(let round=1;round<=10;round++){

//     }
// }

// Get all elements with class "id"
// let id1 = document.getElementsByClassName("id");

// // Check if any element was found
// if (id1.length > 0) {
//     // Get the first element in the HTMLCollection
//     let firstElement = id1[0];

//     // Now check matches on that individual element
//     console.log(firstElement.matches(".id")); // ✅ true
//     console.log(firstElement.matches(".ak")); // ✅ false
// } else {
//     console.log("No elements found with class 'id'");
// }
// console.log(id1[0].matches(".id"));

// let el = document.querySelector(".ak");
// console.log(el.matches(".ak1")); 

// console.log(aka.closest("#aka"))

//problems
//




//******************************************************* */
// let startgame=confirm("enter you want to play snake,wate,gun game ");

// let user=prompt(" enter the value of s,w,g");
// let computer= Math.floor(Math.random()*3);
// let cpu =["s","w","g"][computer];

// const match = (cpu ,user) =>{
//     if(cpu==user){
//         return 0;
//     }
//     else if(cpu==="s"&& user ==="w"){
//         return "cpu"
//     }
//     else if(cpu==="w"&& user ==="s"){
//         return "user"
//     }
//     else if(cpu==="g"&& user ==="w"){
//         return "cpu"
//     }
//     else if(cpu==="g"&& user ==="s"){
//         return "cpu"
//     }
//     else if(cpu==="w"&& user ==="g"){
//         return "cpu"
//     }
//       else if(cpu==="s"&& user ==="g"){
//         return "user"
//     }
// }
// result=match(cpu,user);
// document.write(` cpu ${cpu}  and user ${user}\n the winner is ${result} `);

let userScore = 0;
let cpuScore = 0;

function play(user) {
  let computer = Math.floor(Math.random() * 3);
  let cpu = ["s", "w", "g"][computer];

  const match = (cpu, user) => {
    if (cpu === user) return "draw";
    else if (
      (cpu === "s" && user === "w") ||
      (cpu === "w" && user === "g") ||
      (cpu === "g" && user === "s")
    ) {
      return "cpu";
    } else {
      return "user";
    }
  };

  let result = match(cpu, user);

  document.getElementById("cpuChoice").textContent = `CPU chose: ${cpu.toUpperCase()} ,\nuser chose: ${user.toUpperCase()}`;
  let resultText = document.getElementById("resultText");

  if (result === "draw") {
    resultText.textContent = "It's a draw!";
  } else if (result === "user") {
    resultText.textContent = "You win! 🎉";
    userScore++;
  } else {
    resultText.textContent = "CPU wins! 🤖";
    cpuScore++;
  }

  document.getElementById("userScore").textContent = userScore;
  document.getElementById("cpuScore").textContent = cpuScore;
}
