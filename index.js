console.log("🤗 Welcome to the GUESSING GAME")

console.log('😊 You have 0 point, guess the correct number to increase your points')

let username = prompt("🙂 Enter your username")

let score = 0
for (i = 1; i > 0; i++) {
  let answer = parseInt(prompt(`🤐 Hello ${username} guess a number within a range of 0 to ${i}`))

  let correct = Math.floor(Math.random() * i + 1);
  
  if (correct == answer) {
    score++
    console.log(`😎 Congratulations ${username} your score is now ${score}`)
  } else {
    console.log(`😑 Try again, ${username}`)
  }

}