import serviceTypePokemon from '../../../services/serviceTypePokemon'
import servicePokemon from '../../../services/servicePokemon'

const fetchPokemon = async (req, res) => {
  const { type }= req.query

  const listPokemon = await serviceTypePokemon(type)

  const allPokemon = await listPokemon.map(async value => {
    const objPokemon = await servicePokemon(value.pokemon && value.pokemon.name)
    return objPokemon
  })
console.log(allPokemon);
  console.log(allPokemon.map(pokemon => (Object.keys(pokemon))));
  res.statusCode = 200
  res.json(allPokemon )
}
export default fetchPokemon