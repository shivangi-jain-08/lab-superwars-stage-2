const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    players.forEach((p, i) => {
        if(i%2==0){
            var t = "hero"
        }else{
            var t = "villain"
        }
        detailedPlayers.push({
            name: p,
            strength: 2 + i,
            image: 'images/super-' + (i + 1) + '.png',
            type: t,
            
            id: i + 1,
        });
        console.log("t: ", t);
    });

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    return Math.ceil(Math.random() * 100);
}

const createPresentation = (playerObj) => {
    var player = document.createElement('div');
    player.classList.add('player');
    var image = document.createElement('img');
    image.setAttribute('src', playerObj.image);
    image.setAttribute('alt', '');
    var name = document.createElement('div');
    name.className = 'name';
    name.textContent = playerObj.name;
    var strength = document.createElement('div');
    strength.textContent = playerObj.strength;
    strength.className = 'strength';
    player.append(image, name, strength);
    return player;
    };

const buildPlayers = (players, type) => {
    var fragment = document.createElement('div');

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    players.filter((player) => player.type == type)
    players.forEach((player) => fragment.append(createPresentation(player)));
    return fragment.innerHTML;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}