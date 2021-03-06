import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import Modal from 'react-modal'

import serviceTypes from '../services/serviceTypes'
import serviceTypePokemon from '../services/serviceTypePokemon'
import servicePokemon from '../services/servicePokemon'
import HtmlHeader from '../components/HtmlHeader/HtmlHeader'
import ChoiceType from '../components/ChoiceType/ChoiceType'
import Pokemon from '../components/Pokemon/Pokemon'
import Bag from '../components/Bag/Bag'
import SummaryBag from '../components/SummaryBag/SummaryBag'
import Footer from '../components/Footer/Footer'
import Button from '../components/Button/Button'

const Page = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
`
const Header = styled.div`
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.header.color1}, 
    ${({ theme }) => theme.colors.header.color2}, 
    ${({ theme }) => theme.colors.header.color3}, 
    ${({ theme }) => theme.colors.header.color4}, 
    ${({ theme }) => theme.colors.header.color5}); 
;
  min-height: calc(100px + ${({ theme }) => theme.margin.default}px);
  margin: 0 auto;
  padding: ${({ theme }) => theme.margin.default}px 0px;
  color: ${({ theme }) => theme.colors.light};
  display: flex;
  justify-content: center;
`
const HeaderBody = styled.div`
  max-width: ${({ theme }) => theme.maxWidth}px;
  padding: 0 10px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  > h1 {
    margin-right: 15px;
  }
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
  flex-direction: row-reverse;
`
const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.border.radius}px;
  margin: 0 ${({ theme }) => theme.margin.default}px;
  padding: 0 ${({ theme }) => theme.margin.thin}px;
  min-width: 280px;
  flex: 2;
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
  padding: 0 ${({ theme }) => theme.margin.thin}px;
  margin: 0 ${({ theme }) => theme.margin.thin}px;
  min-width: 260px;
  height: min-content;
  min-height: 250px;
  flex: 1;
  color: ${({ theme }) => theme.colors.light};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`
const ContainerPokemon = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-items: flex-start;
`
const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`
const Label = styled.label`
  margin: 0 0  ${({ theme }) => theme.margin.thin}px ${({ theme }) => theme.margin.thin}px;
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.font.body}rem;
`
const Input = styled.input`
  flex: 2;
  margin: 0 ${({ theme }) => theme.margin.thin}px  ${({ theme }) => theme.margin.thin}px 10px;
  padding: 7px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px dotted ${({ theme }) => theme.colors.backgroundDark};
`

const ButtonCustom = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  margin: 2px 8px 4px;
  padding: 6px 4px;
  :hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const ModalActions = styled.div`
  margin: 30px 10px 10px;
`

const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.font.title};
`


function Home (props) {
  const { title, type, pokemons, types } = props

  // const {isFallback} = useRouter();

  // if (isFallback) {
  //   return <>Carregando...</>
  // }

  useEffect(() => {
    props.setTheme(type.type)
  }, [type])
  
  const [bag, setBag] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [modalIsOpen,setIsOpen] = useState(false);
  
  function openModal() {
    setIsOpen(true);
  }
  function closeModal(){
    setIsOpen(false);
  }
  const addBagPokemon = (pokemon) => {
    setBag(bag.some(value => value.id === pokemon.id) ? bag : [...bag, pokemon]);
  }

  const removeBagPokemon = (pokemon) => {
    setBag(bag.reduce((acc, value) => (value.id === pokemon.id ? acc : [...acc, value] ), []));
  }

  const cleanBagPokemon = (pokemon) => {
    setBag([]);
    closeModal();
  }
  
  const setFilterNamePokemon = (event) => {
    setFilterName(event.target.value);
  }

  return (
    <Page>
      <HtmlHeader title={title}/>
      <Header>
        <HeaderBody>
          <h1>Pokedex</h1>

          <nav>
            <ChoiceType variant="condensed" widthBase="20" sizeText="0.8" types={types} Back={() => <Link href="/">voltar</Link>} />
          </nav>
        </HeaderBody>
      </Header>
      <Container>
        <Aside>
          <Bag bag={bag} removeBag={removeBagPokemon} />
          <SummaryBag bag={bag} catchThem={openModal} />
        </Aside>
        <Main>
          <MainTitle>Pokemon do tipo: {type.name}</MainTitle>
          <Filters><Label htmlFor="filterName">Buscar por nome:</Label>{" "}<Input onChange={setFilterNamePokemon} value={filterName} type="text" placeholder="Digite um nome para filtrar" /></Filters>
          <ContainerPokemon>
            { pokemons 
              && pokemons.filter(pokemon => (pokemon.name.match(new RegExp('^'+filterName, 'i')) || !filterName))
                  .map((pokemon, index) => <Pokemon key={index} pokemon={pokemon} addBag={addBagPokemon} />)
            }
            { !pokemons 
              || !pokemons.length 
              && <span>Não há pokemon para exibir.</span> }
          </ContainerPokemon>
        </Main>
      </Container>

      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Finalizar Compra">
          <H2>Confirme os pokemon escolhidos para levar com você</H2>
          <Bag variant="notitle" bag={bag} />

          <ModalActions>
            <Button onClick={closeModal}>Escolher Outros</Button>
            <ButtonCustom onClick={cleanBagPokemon}>Confirmar Pokemon</ButtonCustom>
          </ModalActions>
      </Modal>
      
      <Footer />
    </Page>
  )
}

export async function getStaticProps (props) {
  const typeId = props.params.type || "padrão"
  
  const types = await serviceTypes()
  const type = types.find(type => type.type === typeId)
  
  const title = "Lista de pokemons do tipo " + (type && type.name ? type.name : 'desconhecido')
  const listPokemon = type && (await serviceTypePokemon(type.type)) || []

  const pokemons = [];
  for ( const onePokemon of listPokemon.reduce((acc, pokemon) => (process.env.NODE_ENV !== 'production' && acc.length >= 6? acc : [...acc, pokemon]), []) ) {
    if (onePokemon.pokemon && onePokemon.pokemon.name) {
      let pokemonToInclude = await servicePokemon(onePokemon.pokemon.name);
      pokemonToInclude.power = pokemonToInclude.base_experience
      pokemons.push(pokemonToInclude)
    }
  }

  return {
    props: {
      type,
      pokemons,
      title,
      types
    }
  }
}

export async function getStaticPaths () {
  const types = await serviceTypes()
  const paramTypes = types.map(type => (
    {
      params: {
        type: type.type
      }
    }
  ))
  return {
    paths: paramTypes,
    fallback: false,
  }
}
export default Home