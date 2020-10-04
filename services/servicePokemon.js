const pokemonTypes = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/type/fire')
  const pokemonResponse = await response.json()
  const pokemon = pokemonResponse && pokemonResponse.pokemon.map(type => ({
    ...type
  }))
  return pokemon
}
export default pokemonTypes