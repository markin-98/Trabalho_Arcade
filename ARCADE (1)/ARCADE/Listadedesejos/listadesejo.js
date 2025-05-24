function saveData(playerId, image, name)
{
    const data = {
        image,
        name,
    };
    localStorage.setItem(playerId, JSON.stringify(data));
}
function loadData(playerId) 
{
    const data = JSON.parse(localStorage.getItem(playerId));
    return data || {};
}
const player1Image = 'https://cdn.akamai.steamstatic.com/steam/apps/2195250/header.jpg?t=1700043631';
const player1Name = 'EA Sports Fc 24';
saveData('player1', player1Image, player1Name);
const player2Image = 'https://cdn.akamai.steamstatic.com/steam/apps/720090/header.jpg?t=1675794915';
const player2Name = 'Magic Speelsplingers';
saveData('player2', player2Image, player2Name);
const player3Image = 'https://cdn.akamai.steamstatic.com/steam/apps/1380410/header.jpg?t=1688180093';
const player3Name = 'Puzzle Quest 3';
saveData('player3', player3Image, player3Name);

for (let i = 1; i <= 3; i++) {
    const loadedPlayerData = loadData(`player${i}`);
    document.getElementById(`fotojog${i}`).style.backgroundImage = `url('${loadedPlayerData.image}')`;
    document.getElementById(`nomejog${i}`).textContent = loadedPlayerData.name;
}
