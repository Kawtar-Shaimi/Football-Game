let modal = document.getElementById('modal')
let removeModelBtn = document.getElementById("remove-add-model-btn")

async function fetchPlayerByPosition(position,dataset) {
    try {
      let playerListModal = document.getElementById('playerListModal')
      const response = await fetch('players.json');
      const data = await response.json();
      const players = data.players
      const filterPlayers = players.filter(player => player.position === position)
      playerListModal.innerHTML = ""
      filterPlayers.forEach((player,index) =>{
        let playerCard
        if(player.position !== "GK"){
          playerCard = `
            <div class="grid-item relative mx-auto my-10">
              <div class="modalPlayer cursor-pointer" onclick="choosePlayer(${index})">
              <img class="h-72" src="./src/assets/img/black-player-background.png" alt="${player.name}">
              <p class="playerRating text-white text-2xl font-bold absolute top-12 left-3">${player.rating}</p>
              <p class="text-white font-thin absolute top-20 left-3">${player.position}</p>
              <img class="playerImg w-20 absolute top-[6%] left-[30%]" src="${player.photo}" alt="${player.name}">
              <p class="playerName text-white absolute top-36 left-9">${player.name}</p>
              <div class="grid grid-cols-6 grid-rows-1 text-white text-[10px] font-extralight absolute top-[170px] text-center ms-2 gap-2">
                  <p>PAC</p>
                  <p>SHO</p>
                  <p>PAS</p>
                  <p>DRI</p>
                  <p>DEF</p>
                  <p>PHY</p>
              </div>
              <div class="grid grid-cols-6 grid-rows- text-white text-[12px] font-extralight absolute top-[190px] text-center ms-2 gap-4">
                  <p class="player-pace">${player.pace}</p>
                  <p class="player-shooting">${player.shooting}</p>
                  <p class="player-passing">${player.passing}</p>
                  <p class="player-dribbling">${player.dribbling}</p>
                  <p class="player-defending">${player.defending}</p>
                  <p class="player-physical">${player.physical}</p>
              </div>
              <div class="flex absolute top-56 left-10 gap-4">
                  <img class="flag-img  h-8 " src="${player.flag}" alt="flag">
                  <img class="flag-logo h-9"  src="${player.logo}" alt="logo">
              </div>
              </div>
            </div>
          `
        }else{
          playerCard = `
            <div class="grid-item relative mx-auto my-10">
              <div class="modalPlayer cursor-pointer" onclick="choosePlayer(${index})">
              <img class="h-72" src="./src/assets/img/black-player-background.png" alt="${player.name}">
              <p class="playerRating text-white text-2xl font-bold absolute top-12 left-3">${player.rating}</p>
              <p class="text-white font-thin absolute top-20 left-3">${player.position}</p>
              <img class="playerImg w-20 absolute top-[6%] left-[30%]" src="${player.photo}" alt="${player.name}">
              <p class="playerName text-white absolute top-36 left-9">${player.name}</p>
              <div class="grid grid-cols-6 grid-rows-1 text-white text-[10px] font-extralight absolute top-[170px] text-center ms-2 gap-2">
                  <p>DIV</p>
                  <p>HAN</p>
                  <p>KIC</p>
                  <p>REF</p>
                  <p>SPE</p>
                  <p>POS</p>
              </div>
              <div class="grid grid-cols-6 grid-rows- text-white text-[12px] font-extralight absolute top-[190px] text-center ms-2 gap-4">
                  <p class="player-diving">${player.diving}</p>
                  <p class="player-handling">${player.handling}</p>
                  <p class="player-kicking">${player.kicking}</p>
                  <p class="player-reflexes">${player.reflexes}</p>
                  <p class="player-speed">${player.speed}</p>
                  <p class="player-positioning">${player.positioning}</p>
              </div>
              <div class="flex absolute top-56 left-10 gap-4">
                  <img class="flag-img  h-8 " src="${player.flag}" alt="flag">
                  <img class="flag-logo h-9"  src="${player.logo}" alt="logo">
              </div>
            </div>
          `
        }
        playerListModal.insertAdjacentHTML("beforeend",playerCard)
      })
      modal.classList.remove('hidden')
      modal.dataset.position = dataset
    
    } catch (error) {
      console.error('Error fetching JSON:', error);
    }
}

function choosePlayer(index){
  let playerCard = document.getElementsByClassName('modalPlayer')[index]
  let pos = modal.dataset.position
  let player = document.querySelector(`.terrain div[data-position="${pos}"]`)
  if(pos != 'GK'){
    player.querySelector('.playerName').innerText = playerCard.querySelector('.playerName').innerText;
    player.querySelector('.playerRating').innerText = playerCard.querySelector('.playerRating').innerText;
    player.querySelector('.playerImg').src = playerCard.querySelector('.playerImg').src;
    player.querySelector('.player-pace').innerText = playerCard.querySelector('.player-pace').innerText;
    player.querySelector('.player-shooting').innerText = playerCard.querySelector('.player-shooting').innerText;
    player.querySelector('.player-passing').innerText = playerCard.querySelector('.player-passing').innerText;
    player.querySelector('.player-dribbling').innerText = playerCard.querySelector('.player-dribbling').innerText;
    player.querySelector('.player-defending').innerText = playerCard.querySelector('.player-defending').innerText;
    player.querySelector('.player-physical').innerText = playerCard.querySelector('.player-physical').innerText;
    player.querySelector('.flag-img').src = playerCard.querySelector('.flag-img').src;
    player.querySelector('.flag-logo').src = playerCard.querySelector('.flag-logo').src;
  }else{
    player.querySelector('.playerName').innerText = playerCard.querySelector('.playerName').innerText;
    player.querySelector('.playerRating').innerText = playerCard.querySelector('.playerRating').innerText;
    player.querySelector('.playerImg').src = playerCard.querySelector('.playerImg').src;
    player.querySelector('.player-diving').innerText = playerCard.querySelector('.player-diving').innerText;
    player.querySelector('.player-handling').innerText = playerCard.querySelector('.player-handling').innerText;
    player.querySelector('.player-kicking').innerText = playerCard.querySelector('.player-kicking').innerText;
    player.querySelector('.player-reflexes').innerText = playerCard.querySelector('.player-reflexes').innerText;
    player.querySelector('.player-speed').innerText = playerCard.querySelector('.player-speed').innerText;
    player.querySelector('.player-positioning').innerText = playerCard.querySelector('.player-positioning').innerText;
    player.querySelector('.flag-img').src = playerCard.querySelector('.flag-img').src;
    player.querySelector('.flag-logo').src = playerCard.querySelector('.flag-logo').src;
  }
  // calculatRating()
  modal.classList.add('hidden')
}

// function calculatRating(){
//   let overallRating = document.getElementById('overallRating')
//   let ratings = document.querySelectorAll('.terrain .playerRating')
//   let sum = 0
//   ratings.forEach(rating =>{
//     if(rating.innerText){
//       sum += parseInt(rating.innerText)
//     }
//   })
//   overallRating.innerText = Math.round(sum / 11)
// }

removeModelBtn.addEventListener("click",function(){
  modal.classList.add('hidden')
})