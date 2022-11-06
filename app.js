let champ = 20

let homeScore = 0

let awayScore = Math.floor(Math.random() * 20);

let totalScore = 0


function addHome1() {
  homeScore += 1
  console.log(homeScore)
  drawHome()
  drawTotal()
}

function addHome3() {
  homeScore += 3
  console.log(homeScore)
  drawHome()
  drawTotal()
}

function addAway1() {
  awayScore += 1
  console.log(awayScore)
  drawAway()
  drawTotal()
}
function subAway1() {
  awayScore -= 1
  console.log(awayScore)
  drawAway()
  drawTotal()
}

function addAway3() {
  awayScore += 3
  console.log(awayScore)
  drawAway()
  drawTotal()
}

function winScore() {
  let winner = homeScore >= champ
  if (winner) {
    console.log("you have won")
    window.alert("you have won")
  }
  else {
    console.log("keep going")
  }
}
function newScore() {
  homeScore = 0
  awayScore = Math.floor(Math.random() * 20);
  drawHome()
  drawAway()
  drawTotal()
}

function drawTotal() {
  let totalScore = homeScore + awayScore
  let totalElm = document.getElementById("total-score")
  console.log(totalElm)
  totalElm.innerText = totalScore
}
drawTotal()

function drawHome() {
  let homeElm = document.getElementById("home-score")
  console.log(homeElm)
  homeElm.innerText = homeScore
}
drawHome()

function drawAway() {
  let awayElm = document.getElementById("away-score")
  console.log(awayElm)
  awayElm.innerText = awayScore
}
drawAway()





