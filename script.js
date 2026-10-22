async function getData() {
    try { 
    document.querySelector('.frame').innerText = "Loading...";

    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const data = await response.json();
    const pokemonList = data.results;

    document.querySelector('.frame').innerText = "";

    for (let i = 0; i < pokemonList.length; i++) {
        const li = document.createElement('li');
        li.innerText = pokemonList[i].name;
        document.querySelector('.frame').appendChild(li);
    }
} catch (error) {
    console.log(error);
    document.querySelector('.frame').innerText = "Something went wrong, try again later.";
}
}
getData();