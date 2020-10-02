import Pokemon from '../Pokemon/pokemon.js'

export default function ({bag, ...other}) {
  return (
    <section className="bag">
      <h3>Bolsa de Pokemon</h3>
      {
        bag && bag.itens && bag.itens.map(item => <Pokemon pokemon={item} />)
      }
      <button className="btn btn-primary">Confirmar Pokemon</button>
    </section>
  )
}