import Link from 'next/link'
import styled from 'styled-components'

const Types = styled.ul`
  display: flex;
  justify-content: center;
  align-content: center;
`
const Type = styled.li`
  width: 30%;
  text-align: center;
  font-size: 2rem;
  margin: 50px;
`
const H3 = styled.h3`
  text-align: center;
  font-size: 1.4rem;
  margin: 0;
`

const ChoiceType = ({title, types}) => (
  <>
    <H3>
      {title}
    </H3>

    <Types>
      {types && types.map(type => <Type key={type.name}><Link href={type.path}>{type.name}</Link></Type>)}
    </Types>
  </>
)
export default ChoiceType