fetch('https://pokeapi.co/api/v2/pokemon/charmander')
  .then(data => data.json())
  .then(result => {
    const pokemon = {
      name: result.name,
      id: result.id,
      image: result.sprites.front_default,
      type: result.types.map(type => type.type.name).join(', '),
    };
    displayPokemon(pokemon);
  });

const displayPokemon = pokemon => {
  const pokedex = document.getElementById('pokedex');
  pokedex.innerHTML = `
  <li class="card">
      <img class="card-image" src="${pokemon.image}"/>
      <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
      <p class="card-subtitle">Type: ${pokemon.type}</p>
  </li>
  `;
};


// Tarea
// 1. Convertir el fetch en un async / await
// 2. Recibir el input del usuario y mostrar el pokemon correspondiente 
// 3. PUNTOS EXTRA asignar las variables con destructuring 


















