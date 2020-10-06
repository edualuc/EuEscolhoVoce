import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import serviceTypePokemon from '../services/serviceTypePokemon'
import servicePokemon from '../services/servicePokemon'
import HtmlHeader from '../components/HtmlHeader/HtmlHeader'
import Pokemon from '../components/Pokemon/Pokemon'
import Bag from '../components/Bag/Bag'
import Footer from '../components/Footer/Footer'

const Page = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
`
const Header = styled.div`
  background-color: red;
  height: calc(100px + ${({ theme }) => theme.margin.default}px);
  margin: 0 auto;
  padding: ${({ theme }) => theme.margin.default}px 0px;
  color: ${({ theme }) => theme.colors.light};
  display: flex;
  justify-content: center;
`
const HeaderBody = styled.div`
  max-width: ${({ theme }) => theme.maxWidth}px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`
const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth}px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.margin.default}px;
  top: -${({ theme }) => theme.margin.default}px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  flex-wrap: wrap;
`
const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.border.radius}px;
  margin: 0 ${({ theme }) => theme.margin.default}px;
  padding: 0 ${({ theme }) => theme.margin.thin}px;
  min-width: 480px;
  flex: 1;
`
const MainTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.font.title}rem;
  margin-left: ${({ theme }) => theme.margin.big}px;
  margin-right: ${({ theme }) => theme.margin.default}px;
`

const Aside = styled.aside`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.border.radius}px;
  margin: 0 ${({ theme }) => theme.margin.default};
  padding: 0 ${({ theme }) => theme.margin.thin}px;
  min-width: 300px;
  max-width: 380px;
  flex: 1;
  color: ${({ theme }) => theme.colors.light};
`
const ContainerPokemon = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-items: flex-start;
`

export default function Home(props) {
  const { title, type, pokemons } = props

  // const {isFallback} = useRouter();

  // if (isFallback) {
  //   return <>Carregando...</>
  // }
  
  const bag = {
    itens: [
    ],
  }

  return (
    <Page>
      <HtmlHeader title={title}/>
      <Header>
        <HeaderBody>
          <h1>Pokedex</h1>

          <nav><Link href="/">Escolher Loja</Link></nav>
        </HeaderBody>
      </Header>
      <Container>
        <Main>
          <MainTitle>Pokemon do tipo {type}</MainTitle>
          <ContainerPokemon>
            { pokemons && pokemons.map((pokemon, index) => <Pokemon key={index} pokemon={pokemon} />)}
            { !pokemons 
              || !pokemons.length 
              && <span>Não há pokemon para exibir.</span> }
          </ContainerPokemon>
        </Main>
        <Aside>
          <Bag bag={bag} />
        </Aside>
      </Container>
      
      <Footer />
    </Page>
  )
}

export async function getStaticProps (props) {
  const type = props.params.type || "padrão"
  
  const title = "Lista de pokemons do tipo " + type
  const listPokemon = await serviceTypePokemon(type)

  const pokemons = [];
  for ( const onePokemon of listPokemon.reduce((acc, pokemon) => (acc.length > 7? acc : [...acc, pokemon]), []) ) {
    if (onePokemon.pokemon && onePokemon.pokemon.name) {
      pokemons.push(await servicePokemon(onePokemon.pokemon.name))
    }
  }

  // console.log(pokemons && pokemons.map(pokemon => (Object.keys(pokemon))));

  return {
    props: {
      type,
      pokemons,
      title
    }
  }
}

export async function getStaticPaths () {
  return {
    paths: [
      {
        params: {
          type: "fire"
        }
      },
      {
        params: {
          type: "water"
        }
      },
      {
        params: {
          type: "normal"
        }
      }
    ],
    fallback: true,
  }
}