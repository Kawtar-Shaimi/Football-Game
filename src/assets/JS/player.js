async function fetchPlayerByPosition(position) {
    try {
      const response = await fetch('players.json');
      const data = await response.json();
      const players = data.players
      console.log(players);
      

    } catch (error) {
      console.error('Error fetching JSON:', error);
    }
}
  
fetchPlayerByPosition();