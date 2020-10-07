import styled from 'styled-components'

import Button from '../Button/Button'

const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({theme}) => theme.margin.default}px;
`

function SummaryBag({bag, clearBag}) {
  return (
    <Summary>
      <Button>PEGAR ELES</Button>
      <div>
        Total de Power: 
        <span>{
          bag && bag.reduce((acc, pokemon) => (pokemon.power ? pokemon.power + acc : acc ), 0)
        }
        </span>
      </div>
    </Summary>
  );
}

export default SummaryBag;