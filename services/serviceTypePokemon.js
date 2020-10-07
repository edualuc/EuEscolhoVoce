const serviceTypePokemon = async (type) => {
  if (!type) {
    return [];
  }

  const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/type/${type}`).then(response => {
    if (response.status < 300) {
      return response.json();
    }
    return undefined;
  }).catch(error => {
    console.error('error', error)
  })
  
  const pokemon = pokemonResponse && pokemonResponse.pokemon && pokemonResponse.pokemon.map(type => ({
    ...type
  }))
  return pokemon || []
}
export default serviceTypePokemon