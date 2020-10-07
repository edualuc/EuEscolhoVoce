import Link from 'next/link'
import styled from 'styled-components'
import { Fire } from '@styled-icons/icomoon'
import themes, { themeDefault } from '../../styles/themes'

const IconFire = styled(Fire)`
  color: ${({ type }) => (
    themes[type] 
      ? themes[type].colors.primary 
      : themeDefault.colors.primary) };
  width: 50%;
  margin-bottom: 10px;
`
const Types = styled.ul`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
`
const Type = styled.li`
  width: 120px;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
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
      {types && types.map(type => (
        <Type key={type.name}><Link href={type.path}>
          <span><IconFire type={type.type} /> {type.name}</span>
        </Link></Type>)
        )}
    </Types>
  </>
)
export default ChoiceType