const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why was the math book sad? It had too many problems.",
  "What do you call fake spaghetti? An impasta!",
  "I told my computer I needed a break, and it said: 'Why so RAM-bunctious?'",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why don’t eggs tell jokes? They’d crack each other up."
];

function joke(){
    let index= Math.floor(Math.random()*jokes.length)
    document.getElementById("joke").innerHTML=jokes[index];
}