let modal = document.getElementById('modal')
let removeModelBtn = document.getElementById("remove-add-model-btn")
// dataset bach nearfo div 
async function fetchPlayerByPosition(position,dataset) {
    try {
      // kneaytu eala div li an7utu fih la list dyal players
      let playerListModal = document.getElementById('playerListModal')
      // kndiro biha request lserver bach njibo fichier json 
      const response = await fetch('players.json');

      // kn9raw json data o kt7wlha l array
      const data = await response.json();

      // knjbdu tableau dyal players mn data
      const players = data.players

      // knfiltruw players eala 7sab position dyal div li wrkna ealih 
      const filterPlayers = players.filter(player => player.position === position)

      // knkhwu list ila kant deja eamra bach myw9each lina muchki
      playerListModal.innerHTML = ""
      // kanbookliw eala ga3 tableau knjbdu player (info dyawlu) u index dyalu 
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
      // kanpassiw dataset lmodal  kanAffichiw lmodal dial kola position
      modal.dataset.position = dataset
    
    } catch (error) {
      console.error('Error fetching JSON:', error);
    }
}

function choosePlayer(index){
  // knjbdo player li index tsift lina f params
  // knjbdo lplayer li wrkna ealih b index
  // u knsifto l index l function choosePlayer
  let playerCard = document.getElementsByClassName('modalPlayer')[index]
  // knjibo position li kyna f datasetter
  let pos = modal.dataset.position
  // knjibo div li eando dataset ktsawi dik position
  let player = document.querySelector(`.terrain div[data-position="${pos}"]`)
  // knjibo les informations dyal player o kn7otohom f dik div
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
  modal.classList.add('hidden')
}
removeModelBtn.addEventListener("click",function(){
  modal.classList.add('hidden')
})
