import Pokemon from '../Pokemon/Pokemon.js'

export default function Bag ({bag}) {
  return (
    <section className="bag">
      <h3>Bolsa de Pokemon</h3>
      {
        bag && bag.itens && bag.itens.map((item, index) => <Pokemon key={index} pokemon={item} />)
      }
      <button className="btn btn-primary">Confirmar Pokemon</button>
    </section>
  )
}