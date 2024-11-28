async function fetchPlayerByPosition(position) {
  try {      
    let playerListModal = document.getElementById('playerListModal')
    let modal = document.getElementById('modal')
    const response = await fetch('players.json');
    const data = await response.json();
    const players = data.players
    const filterPlayers = players.filter(player => player.position === position)
    filterPlayers.forEach(player =>{
      const playerCard = `
        <div class="grid-item relative mx-auto my-10">
          <div class="cursor-pointer">
          <img class="h-72" src="./src/assets/img/black-player-background.png" alt="${player.name}">
          <p class="text-white text-2xl font-bold absolute top-12 left-3">92</p>
          <p class="text-white font-thin absolute top-20 left-3">${player.position}</p>
          <img class="w-20 absolute top-[6%] left-[30%]" src="${player.photo}" alt="${player.name}">
          <p class="text-white absolute top-36 left-9">${player.name}</p>
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
    playerListModal.insertAdjacentHTML("afterbegin",playerCard)
    })
    modal.classList.remove('hidden')
  
  } catch (error) {
    console.error('Error fetching JSON:', error);
  }
}


let modal = document.getElementById('modal')
let removeModelBtn = document.getElementById("remove-add-model-btn")
function hideModel(){
  modal.classList.add('hidden')
}
removeModelBtn.addEventListener("click",hideModel)


async function fetchPlayerByPosition(position) {
  try {      
    let playerListModal = document.getElementById('playerListModal')
    let modal = document.getElementById('modal')
    const response = await fetch('players.json');
    const data = await response.json();
    const players = data.players
    const filterPlayers = players.filter(player => player.position === position)
    filterPlayers.forEach(player =>{
      let playerCard
      if(player.position !== "GK"){
        playerCard = `
          <div class="grid-item relative mx-auto my-10">
            <div class="cursor-pointer">
            <img class="h-72" src="./src/assets/img/black-player-background.png" alt="${player.name}">
            <p class="text-white text-2xl font-bold absolute top-12 left-3">92</p>
            <p class="text-white font-thin absolute top-20 left-3">${player.position}</p>
            <img class="w-20 absolute top-[6%] left-[30%]" src="${player.photo}" alt="${player.name}">
            <p class="text-white absolute top-36 left-9">${player.name}</p>
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
            <div class="cursor-pointer">
            <img class="h-72" src="./src/assets/img/black-player-background.png" alt="${player.name}">
            <p class="text-white text-2xl font-bold absolute top-12 left-3">92</p>
            <p class="text-white font-thin absolute top-20 left-3">${player.position}</p>
            <img class="w-20 absolute top-[6%] left-[30%]" src="${player.photo}" alt="${player.name}">
            <p class="text-white absolute top-36 left-9">${player.name}</p>
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
      playerListModal.insertAdjacentHTML("afterbegin",playerCard)
    })
    modal.classList.remove('hidden')
  
  } catch (error) {
    console.error('Error fetching JSON:', error);
  }
}