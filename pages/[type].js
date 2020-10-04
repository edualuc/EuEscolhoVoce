import Link from 'next/link'
import { useRouter } from 'next/router'
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

export async function getStaticProps ({params}) {
  const { typeParams } = params
  const type = typeParams || '/agua2'
  
  const title = "Lista de pokemons do tipo " + type
  const pokemons = [
    { 
      name: "Buba",
      description: "Descrição do pokemon",
      power: "Força"
    },{ 
      name: "Charm",
      description: "2Descrição",
      power: "mais de 8000"
    },
  ]
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
          type: "agua"
        }
      },
      {
        params: {
          type: "fogo"
        }
      }
    ],
    fallback: true,
  }
}