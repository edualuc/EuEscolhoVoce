import Link from 'next/link'
import styled from 'styled-components'
import { Fire } from '@styled-icons/heroicons-solid/Fire'
import { Water } from '@styled-icons/boxicons-regular/Water'
import { Pokemon } from '@styled-icons/simple-icons/Pokemon'
import { Dragon } from '@styled-icons/fa-solid/Dragon'
import { Freelancer } from '@styled-icons/simple-icons/Freelancer'
import { Bug } from '@styled-icons/ionicons-sharp/Bug'
import { Magic } from '@styled-icons/remix-fill/Magic'
import themes, { themeDefault } from '../../styles/themes'

const IconTypes = {
  default: styled(Pokemon)`
  color: ${({ type }) => (
    themes[type] 
      ? themes[type].colors.primary 
      : themeDefault.colors.primary) };
  width: 60%;
  margin-bottom: 10px;
`,
  fire: styled(Fire)`
  color: ${({ type }) => (
    themes[type] 
      ? themes[type].colors.primary 
      : themeDefault.colors.primary) };
  width: 60%;
  margin-bottom: 10px;
`,
  water: styled(Water)`
  color: ${({ type }) => (
    themes[type] 
      ? themes[type].colors.primary 
      : themeDefault.colors.primary) };
  width: 60%;
  margin-bottom: 10px;
`,
  dragon: styled(Dragon)`
  color: ${({ type }) => (
    themes[type] 
      ? themes[type].colors.primary 
      : themeDefault.colors.primary) };
  width: 60%;
  margin-bottom: 10px;
`,
  flying: styled(Freelancer)`
  color: ${({ type }) => (
    themes[type] 
      ? themes[type].colors.primary 
      : themeDefault.colors.primary) };
  width: 60%;
  margin-bottom: 10px;
`,
  bug: styled(Bug)`
  color: ${({ type }) => (
    themes[type] 
      ? themes[type].colors.primary 
      : themeDefault.colors.primary) };
  width: 60%;
  margin-bottom: 10px;
`,
  fairy: styled(Magic)`
  color: ${({ type }) => (
    themes[type] 
      ? themes[type].colors.primary 
      : themeDefault.colors.primary) };
  width: 60%;
  margin-bottom: 10px;
`,

}

const Types = styled.ul`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
`
const Type = styled.li`
  width: calc(2 * ${({ widthBase }) => (widthBase)}px);
  text-align: center;
  font-size: ${({ sizeText }) => (sizeText)}rem;
  font-weight: bold;
  margin: ${({ widthBase }) => (widthBase)}px ${({ widthBase }) => (widthBase)}px 0;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: calc(${({ theme }) => theme.border.radius}px / 4);
`

const ChoiceType = ({types, widthBase, sizeText}) => {
  return (
    <Types>
      {types && types.map(type => {
        const Icon = IconTypes[type.type] || IconTypes['default']
        return (
        <Type widthBase={widthBase} sizeText={sizeText} key={type.name}><Link href={type.path}>
          <div><Icon type={type.type} /> <span>{type.name}</span></div>
        </Link></Type>
        )
      })}
    </Types>
  )
}
export default ChoiceType