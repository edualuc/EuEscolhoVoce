const servicePokemon = async (namePokemon) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
  const pokemonResponse = await response.json()
  const pokemon = {...pokemonResponse}
  
  return pokemon
}
export default servicePokemon