import ChoiceType from '../components/ChoiceType/ChoiceType'
import Footer from '../components/Footer/Footer'
import HtmlHeader from '../components/HtmlHeader/HtmlHeader'
import styles from '../styles/Home.module.css'

export default function Home() {
  const title = "Escolha o tipo do pokemon"

  const types = [
    { 
      name: "fogo",
      link: "/fogo",
    },
    { 
      name: "agua",
      link: "/agua",
    },
    { 
      name: "terra",
      link: "/terra",
    },
  ]

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
