import styled from 'styled-components'

import PokemonBag from '../PokemonBag/PokemonBag.js'

const H3 = styled.h3`
  font-size: ${({theme}) => theme.font.title}rem;
  color: ${({theme}) => theme.colors.light}rem;
  margin: 20px 10px;
`
const PokemonSection = styled.section`
  color: ${({ theme }) => theme.colors.light};
`

export default function Bag ({bag, removeBag, variant}) {
  return (
    <PokemonSection>
      {
        variant !== 'notitle' && <H3>Bolsa de Pokemon</H3>
      }
      {
        bag && bag.map((pokemon, index) => <PokemonBag key={index} pokemon={pokemon} removeBag={removeBag} />)
      }
    </PokemonSection>
  )
}