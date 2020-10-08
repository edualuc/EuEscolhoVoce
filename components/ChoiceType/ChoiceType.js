import Link from 'next/link'
import styled from 'styled-components'
import { Fire } from '@styled-icons/heroicons-solid/Fire'
import { Water } from '@styled-icons/boxicons-regular/Water'
import { Pokemon } from '@styled-icons/simple-icons/Pokemon'
import { Dragon } from '@styled-icons/fa-solid/Dragon'
import { Freelancer } from '@styled-icons/simple-icons/Freelancer'
import { Bug } from '@styled-icons/ionicons-sharp/Bug'
import { Magic } from '@styled-icons/remix-fill/Magic'
import { Baidu } from '@styled-icons/boxicons-logos/Baidu'
import themes, { themeDefault } from '../../styles/themes'

const IconTypes = {
  default: styled(Baidu)`
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
  align-items: center;
  flex-wrap: wrap;
`
const Type = styled.li`
  width: calc(2 * ${({ widthBase }) => (widthBase)}px);
  text-align: center;
  font-size: ${({ sizeText }) => (sizeText)}rem;
  font-weight: bold;
  margin: ${({ widthBase }) => (widthBase)}px ${({ variant, widthBase }) => (variant === 'condensed' ? 6 : widthBase)}px 9px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: calc(${({ theme }) => theme.border.radius}px / 4);
  cursor: pointer;
`

const ChoiceType = ({types, widthBase, sizeText, Back, variant}) => {
  return (
    <Types>
      {types && types.map(type => {
        const Icon = IconTypes[type.type] || IconTypes['default']
        return (
          <Link href={type.path}><Type variant={variant} widthBase={widthBase} sizeText={sizeText} key={type.name}>
          <span><Icon type={type.type} /> {type.name}</span>
        </Type></Link>
        )
      })}
      {Back && (
        <Type variant={variant} widthBase={widthBase} sizeText={sizeText}>
          <Back />
        </Type>
      )}
    </Types>
  )
}
export default ChoiceType