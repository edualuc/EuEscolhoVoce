import Link from 'next/link'
import { useRouter } from 'next/router'

import serviceTypePokemon from '../services/serviceTypePokemon'
import servicePokemon from '../services/servicePokemon'
import HtmlHeader from '../components/HtmlHeader/HtmlHeader'
import Pokemon from '../components/Pokemon/Pokemon'
import Bag from '../components/Bag/Bag'
import Footer from '../components/Footer/Footer'

export default function Home(props) {
  const { title, type, pokemons } = props

  const {isFallback} = useRouter();

  if (isFallback) {
    return <>Carregando...</>
  }
  
  const bag = {
    itens: [
    ],
  }

  bag.itens[0] = pokemons[0]

  return (
    <div className="page">
      <HtmlHeader title={title}/>
      <div className="header">
        <h1>Pokedex</h1>

        <nav><Link href="/">voltar para página inicial</Link></nav>
      </div>
      <div className="container">
        <main>
          <h3>Pokemon do tipo {type}</h3>
          { pokemons && pokemons.map((pokemon, index) => <Pokemon key={index} pokemon={pokemon} />)}
        </main>
        <aside>
          <Bag bag={bag} />
        </aside>
      </div>
      
      <Footer />
    </div>
  )
}

export async function getStaticProps (props) {
  const type = props.params.type || "padrão"
  
  const title = "Lista de pokemons do tipo " + type
  const listPokemon = await serviceTypePokemon(type)

  const pokemons = [];
  for ( const onePokemon of listPokemon.reduce((acc, pokemon) => (acc.length > 5? acc : [...acc, pokemon]), []) ) {
    if (onePokemon.pokemon && onePokemon.pokemon.name) {
      pokemons.push(await servicePokemon(onePokemon.pokemon.name))
    }
  }

  console.log(pokemons && pokemons.map(pokemon => (Object.keys(pokemon))));


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