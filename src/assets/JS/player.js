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
                  <p>${player.pace}</p>
                  <p>${player.shooting}</p>
                  <p>${player.passing}</p>
                  <p>${player.dribbling}</p>
                  <p>${player.defending}</p>
                  <p>${player.physical}</p>
              </div>
              <div class="flex absolute top-56 left-10 gap-4">
                  <img class="  h-8 " src="${player.flag}" alt="flag">
                  <img class=" h-9"  src="${player.logo}" alt="logo">
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
                  <p>${player.diving}</p>
                  <p>${player.handling}</p>
                  <p>${player.kicking}</p>
                  <p>${player.reflexes}</p>
                  <p>${player.speed}</p>
                  <p>${player.positioning}</p>
              </div>
              <div class="flex absolute top-56 left-10 gap-4">
                  <img class="  h-8 " src="${player.flag}" alt="flag">
                  <img class=" h-9"  src="${player.logo}" alt="logo">
              </div>
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
  player.querySelector('.playerName').innerText = playerCard.querySelector('.playerName').innerText;
  player.querySelector('.playerRating').innerText = playerCard.querySelector('.playerRating').innerText;
  player.querySelector('.playerImg').src = playerCard.querySelector('.playerImg').src;
  calculatRating()
  modal.classList.add('hidden')
}

function calculatRating(){
  let overallRating = document.getElementById('overallRating')
  let ratings = document.querySelectorAll('.terrain .playerRating')
  let sum = 0
  ratings.forEach(rating =>{
    if(rating.innerText){
      sum += parseInt(rating.innerText)
    }
  })
  overallRating.innerText = Math.round(sum / 11)
}

removeModelBtn.addEventListener("click",function(){
  modal.classList.add('hidden')
})