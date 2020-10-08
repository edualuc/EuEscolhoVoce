import styled from 'styled-components'
import { TrashAlt } from '@styled-icons/boxicons-solid/TrashAlt'
import PokemonPictureCol from '../PokemonPictureCol/PokemonPictureCol'

const SectionPokemon = styled.section`
  flex: 1;
  min-width: calc(${({ pictureWidth }) => pictureWidth}px * 2);
  margin: ${({ theme }) => theme.margin.thin}px;
`

const PokemonBody = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  filter: brightness(110%);
  padding-right: 8px;
  font-size: ${({ theme }) => theme.font.body}rem;
  * > h2 {
    font-size: ${({ theme }) => theme.font.title2}rem;
  }
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
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.primary};
  padding: 8px;
  height: min-content;
  border-radius: 4px;
  font-weight: bold;

  :hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
  }
`

const IconTrash = styled(TrashAlt)`
  width: 16px;
  height: 16px;
`

function PokemonBag({pokemon, removeBag}) {
  const picture = { 
    width: 75,
    height: 75,
  }
  return (
    <SectionPokemon pictureWidth={picture.width}>
      <PokemonBody>
        <PokemonPictureCol pokemon={pokemon} configPicture={picture} />
        <PokemonInfoCol>
          <h2>#{pokemon.id} {pokemon.name}</h2>
          <p><strong>POWER: </strong>{pokemon.base_experience}</p>
        </PokemonInfoCol>
        <Button type="button" onClick={() => removeBag(pokemon)}><IconTrash /></Button>
      </PokemonBody>
    </SectionPokemon>
  );
}

export default PokemonBag;