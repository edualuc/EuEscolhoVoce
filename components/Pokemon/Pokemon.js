export default function Pokemon ({pokemon}) {
  console.log(pokemon.species);
  console.log(pokemon.sprites);
  return (
    <section className="pokemon">
      <div>
        {
          pokemon.sprites && Object.keys(pokemon.sprites).map( key => (
            pokemon.sprites[key] && <img src={pokemon.sprites[key]} alt={`Foto do ${pokemon.name} - ${key}`} />
          ))
        }
      </div>
      <h2>{pokemon.name}</h2>
      <p><strong>abilities: </strong>{pokemon.abilities.length}</p>
      <p><strong>base_experience: </strong>{pokemon.base_experience}</p>
      <p><strong>forms: </strong>{pokemon.forms.length}</p>
      <p><strong>game_indices: </strong>{pokemon.game_indices.length}</p>
      <p><strong>height: </strong>{pokemon.height}</p>
      <p><strong>held_items: </strong>{pokemon.held_items.length}</p>
      <p><strong>id: </strong>{pokemon.id}</p>
      <p><strong>is_default: </strong>{pokemon.is_default}</p>
      <p><strong>location_area_encounters: </strong>{pokemon.location_area_encounters.length}</p>
      <p><strong>moves: </strong>{pokemon.moves.length}</p>
      <p><strong>name: </strong>{pokemon.name.length}</p>
      <p><strong>order: </strong>{pokemon.order}</p>
      <p><strong>species: </strong>{pokemon.species.length}</p>
      <p><strong>sprites: </strong>{pokemon.sprites.length}</p>
      <p><strong>stats: </strong>{pokemon.stats.length}</p>
      <p><strong>types: </strong>{pokemon.types.length}</p>
      <p><strong>weight: </strong>{pokemon.weight}</p>
    </section>
  )
}