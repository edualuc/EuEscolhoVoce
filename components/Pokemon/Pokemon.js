export default function Pokemon ({pokemon}) {
  return (
    <section className="pokemon">
      <h2>{pokemon.name}</h2>
      <p>{pokemon.description}</p>
    </section>
  )
}