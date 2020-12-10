let health = 100
let hitTakes = 0

let fight = [
  {
    name: "slap",
    hit: 1,
  }, {
    name: "kick",
    hit: 10,
  }, {
    name: "punch",
    hit: 5,
  }, {
    name: "shkidoosh",
    hit: 100
  }, {
    name: "hadouken",
    hit: 25,
  }
]


function drawbuttons() {
  let template = ""
  fight.forEach(f => {
    template += `<div class="col">
    <button id="butts" class="btn btn-danger" onclick="slap('${f.hit}')">${f.name}</button>
  </div>`
  })
  document.getElementById("buttons").innerHTML = template
}


function slap(hit) {
  health -= hit
  hitTakes++
  update()
  endGame()
}


function endGame() {
  if (health <= 0) {
    document.getElementById("buttons").classList.add("d-none")
    document.getElementById("head").classList.add("d-none")
    document.getElementById("gameOver").classList.remove("d-none")
  }
}

function startOver() {
  document.getElementById("buttons").classList.remove("d-none")
  document.getElementById("head").classList.remove("d-none")
  document.getElementById("gameOver").classList.add("d-none")
  health = 100
  hitTakes = 0
}

function update() {
  document.getElementById("health").innerText = `${health}`
  document.getElementById("hits").innerText = `${hitTakes}`
}

drawbuttons()
update()

// let players = [{
//   name: "Mark",
//   health: 100,
//   hits: 0,
//   punch: 1,
//   kick: 10,
//   slap: 5,
//   shkidoosh: 100,
//   hadouken: 25,
// }, {
//   name: "Tim",
//   health: 100,
//   hits: 0,
//   punch: 8,
//   kick: 12,
//   slap: 20,
//   shkidoosh: 99,
//   hadouken: 30,
// },
// ]