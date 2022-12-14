function createGame(player1, hour, player2){
  return `
  <li>
    <img src="./assets/${player1}_icon.svg" alt="${player1}'s flag" />
    <strong>${hour}</strong>
    <img src="./assets/${player2}_icon.svg" alt="${player2}'s flag" />
  </li>
  `
}

let delay = 0;
function createCard(date, day, games) {
  delay = delay + 0.5;
  return `
  <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
      
      </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("cameroon", "07:00", "serbia") +
      createGame("brazil", "13:00", "switzerland")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("serbia", "16:00", "switzerland") +
      createGame("cameroon", "16:00", "brazil")
  )