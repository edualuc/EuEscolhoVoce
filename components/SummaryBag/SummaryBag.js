import styled from 'styled-components'

import Button from '../Button/Button'

const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({theme}) => theme.margin.default}px ${({theme}) => theme.margin.thin}px;
  font-size: ${({theme}) => theme.font.title2}rem;
  color: ${({ theme }) => theme.colors.light};
`

const Power = styled.strong`
  margin: calc(${({theme}) => theme.margin.thin}px / 2);
  font-size: ${({theme}) => theme.font.title}rem;
  border: 1px solid ${({theme}) => theme.colors.secondary};
  padding: calc(${({theme}) => theme.margin.thin}px / 2);
`
const PowerField = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 5px;
`


function SummaryBag({bag, catchThem}) {
  return (
    <Summary>
      <Button onClick={catchThem} disabled={!bag || !bag.length}>PEGAR ELES</Button>
      <PowerField>
        <span>Força Total:</span> {' '}
        <Power>{
          bag && bag.reduce((acc, pokemon) => (pokemon.power ? pokemon.power + acc : acc ), 0)
        }
        </Power>
      </PowerField>
    </Summary>
  );
}

export default SummaryBag;