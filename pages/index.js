import { useRouter } from 'next/router';
import ChoiceType from '../components/ChoiceType/ChoiceType'
import Footer from '../components/Footer/Footer'
import HtmlHeader from '../components/HtmlHeader/HtmlHeader'
import styles from '../styles/Home.module.css'

export default function Home(props) {

  const { title, types } = props

  const {isFallback} = useRouter();

  if (isFallback) {
    return <>Carregando...</>
  }

  return (
    <div className={styles.container}>
      <HtmlHeader title={title}/>

      <main className={styles.main}>
        <ChoiceType types={types} />
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps () {
  const title = "Escolha o tipo do pokemon"

  const response = await fetch(process.env.API_POKEMON_TYPES)
  const typesResponse = await response.json()
  const { types } = typesResponse

  return {
    props: {
      title,
      types
    }
  }
}
