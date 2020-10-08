import styled from 'styled-components'

import Button from '../Button/Button'

const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({theme}) => theme.margin.default}px;
  font-size: ${({theme}) => theme.font.title2}rem;
`

const Power = styled.strong`
  margin: calc(${({theme}) => theme.margin.thin}px / 2);
  font-size: ${({theme}) => theme.font.title}rem;
  border: 1px solid ${({theme}) => theme.colors.secondary};
  padding: calc(${({theme}) => theme.margin.thin}px / 2);
`

function SummaryBag({bag, clearBag}) {
  return (
    <Summary>
      <Button onClick={clearBag}>PEGAR ELES</Button>
      <p>
        <span>Força Total:</span> {' '}
        <Power>{
          bag && bag.reduce((acc, pokemon) => (pokemon.power ? pokemon.power + acc : acc ), 0)
        }
        </Power>
      </p>
    </Summary>
  );
}

export default SummaryBag;