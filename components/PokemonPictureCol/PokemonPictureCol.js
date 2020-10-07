import styled from 'styled-components'

const PokemonPicture = styled.div`
  flex: 0;
  width: ${({ pictureWidth }) => pictureWidth}px;
  height: ${({ pictureHeight }) => pictureHeight}px;
`

function PokemonPictureCol({pokemon, configPicture}) {
  const keyImage = ['front_default' ]; // back_default  back_shiny  front_shiny
  return (
    <PokemonPicture>
      {
        pokemon.sprites && keyImage.map( key => { 
          return (
            pokemon.sprites[key] && <img key={key} width={configPicture.width} height={configPicture.height} src={pokemon.sprites[key]} alt={`Foto do ${pokemon.name} - ${key}`} />
        )})
      }
    </PokemonPicture>
  );
}

export default PokemonPictureCol;