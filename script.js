async function getData() {
    //shows loading
    try { 
    document.querySelector('.frame').innerText = "Loading...";

//asks the poke web for 10 pokemon fetches data
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');


    //turns the answer into smt javascript can read
    const data = await response.json();


    // grabs the list of pokemon from the answer
    const pokemonList = data.results;
    document.querySelector('.frame').innerText = "";


//goes through each pokemon one at a time
    for (let i = 0; i < pokemonList.length; i++) {


       //writes the pokemons name inside the box
        const li = document.createElement('li');
 li.innerText = pokemonList[i].name;
 
        //puts the box on page inside the .frame
        document.querySelector('.frame').appendChild(li);
    }
} catch (error) {
    console.log(error);
    document.querySelector('.frame').innerText = "Something went wrong, try again later.";
}
}
getData();