import { useRouter } from 'next/router';
import styled from 'styled-components'

import serviceTypes from '../services/serviceTypes'
import ChoiceType from '../components/ChoiceType/ChoiceType'
import Footer from '../components/Footer/Footer'
import HtmlHeader from '../components/HtmlHeader/HtmlHeader'
import styles from '../styles/Home.module.css'

const Main = styled.main`
  max-width: 800px;
  width: 70%;
  max-height: 400px;
  height: 60%;
  border: 3px double #AAA;
`
const H1 = styled.h1`
  max-width: 800px;
  width: 70%;
  margin: 0;
  font-size: 1.6rem;
  font-weight: normal;
  font-variant: small-caps;
`
const H2 = styled.h2`
  max-width: 800px;
  width: 70%;
  margin: 0;
  font-size: 1.4rem;
  font-weight: lighter;
  font-variant: small-caps;
`

export default function Home(props) {

  const { title, types } = props

  const {isFallback} = useRouter();

  if (isFallback) {
    return <>Carregando...</>
  }

  return (
    <div className={styles.container}>
      <HtmlHeader title={title} />

      <H1>Eu Escolho Você!</H1>
      <H2>Escolha seus pokemon para levar com você!</H2>

      <Main className={styles.main}>
        <ChoiceType title={title} types={types} />
      </Main>

      <Footer />
    </div>
  )
}

export async function getStaticProps () {
  const title = "Escolha o tipo do pokemon"

  const types = await serviceTypes()

  return {
    props: {
      title,
      types
    }
  }
}
