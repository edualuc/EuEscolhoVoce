import PokemonBag from '../PokemonBag/PokemonBag.js'

export default function Bag ({bag, removeBag}) {
  return (
    <section>
      <h3>Bolsa de Pokemon</h3>
      {
        bag && bag.map((pokemon, index) => <PokemonBag key={index} pokemon={pokemon} removeBag={removeBag} />)
      }
    </section>
  )
}