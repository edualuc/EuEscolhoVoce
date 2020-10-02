import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import HtmlHeader from '../components/HtmlHeader/HtmlHeader'
import Pokemon from '../components/Pokemon/Pokemon'
import Bolsa from '../components/Bolsa/Bolsa'
import Footer from '../components/Footer/Footer'

export default function Home() {
  const { query } = useRouter()
  const { type } = query
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

  const bag = {
    itens: [
    ],
  }

  bag.itens[0] = pokemons[0]

  console.log(bag);

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
          { pokemons && pokemons.map(pokemon => <Pokemon pokemon={pokemon} />)}
        </main>
        <aside>
          <Bolsa bag={bag} />
        </aside>
      </div>
      
      <Footer />
    </div>
  )
}
