import servicePokemon from '../../services/servicePokemon'

const fetchPokemon = async (req, res) => {

  const pokemon = await servicePokemon()

  res.statusCode = 200
  res.json({ pokemon })
}
export default fetchPokemon