import styled from 'styled-components'

import PokemonPictureCol from '../PokemonPictureCol/PokemonPictureCol'

const SectionPokemon = styled.section`
  flex: 1;
  min-width: calc(${({ pictureWidth }) => pictureWidth}px * 2);
  margin: ${({ theme }) => theme.margin.thin}px;
`

const PokemonBody = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.font.body}rem;
  * > h2 {
    font-size: ${({ theme }) => theme.font.title2}rem;
  }
`

const PokemonFooter = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  display: flex;
  align-items: center;
  justify-content: space-between;
  *:first-child {
    width: 100px;
    text-align: center;
  };
  *:last-child {
    flex: 1;
    text-align: center;
  };
`

const PokemonInfoCol = styled.div`
  flex: 1;
  > h2 {
    margin: 3px 0;
  };
  > ul {
    margin: auto 0;
  }
`

const Button = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  width: 100%;
  margin: 2px 8px 4px;
  padding: 6px 4px;
  border-radius: 4px;
  :hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
  }
`

export default function Pokemon ({pokemon, addBag}) {
  const picture = { 
    width: 96,
    height: 96,
  }
  const keyImage = ['front_default' ]; // 'back_default',  back_shiny  front_shiny
  return (
    <SectionPokemon pictureWidth={picture.width}>
      <PokemonBody>
        <PokemonPictureCol pokemon={pokemon} configPicture={picture} />
        <PokemonInfoCol>
          <h2>#{pokemon.id} {pokemon.name}</h2>
          <ul>
            <li>{pokemon.abilities.length} habilidades</li>
            {/* <li><strong>forms: </strong>{pokemon.forms.length}</li> */}
            {/* <li><strong>game_indices: </strong>{pokemon.game_indices.length}</li> */}
            <li>{pokemon.height} ft</li>
            {/* <li><strong>held_items: </strong>{pokemon.held_items.length}</li> */}
            {/* <li><strong>is_default: </strong>{pokemon.is_default}</li> */}
            {/* <li><strong>location_area_encounters: </strong>{pokemon.location_area_encounters.length}</li> */}
            {/* <li><strong>moves: </strong>{pokemon.moves.length}</li> */}
            {/* <li><strong>name: </strong>{pokemon.name.length}</li> */}
            {/* <li><strong>order: </strong>{pokemon.order}</li> */}
            {/* <li><strong>species: </strong>{pokemon.species.length}</li> */}
            {/* <li><strong>stats: </strong>{pokemon.stats.length}</li> */}
            {/* <li><strong>types: </strong>{pokemon.types.length}</li> */}
            {/* pokemon.base_experience */}
            <li>{pokemon.weight} oz</li>
          </ul>
        </PokemonInfoCol>
      </PokemonBody>
      <PokemonFooter>
        <p><strong>POWER: </strong>{pokemon.power}</p>
        <Button type="button" onClick={() => addBag(pokemon)}>Eu escolho Você</Button>
      </PokemonFooter>
    </SectionPokemon>
  )
}