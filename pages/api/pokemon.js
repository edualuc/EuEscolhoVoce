export default async (req, res) => {

  const response = await fetch('https://pokeapi.co/api/v2/type/fire')
  const pokemonResponse = await response.json()
  const pokemon = pokemonResponse && pokemonResponse.pokemon.map(type => ({
    ...type
  }))

  console.log(pokemon);
  res.statusCode = 200
  res.json({ pokemon })
}
