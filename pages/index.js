import { useRouter } from 'next/router';
import styled from 'styled-components'

import serviceTypes from '../services/serviceTypes'
import ChoiceType from '../components/ChoiceType/ChoiceType'
import Footer from '../components/Footer/Footer'
import HtmlHeader from '../components/HtmlHeader/HtmlHeader'

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Main = styled.main`
  max-width: 96vw;
  width: calc(50% + 300px);
  height: 60%;
  border: 3px double #AAA;
  
  padding: 0 0 2rem;
  margin-bottom: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const H1 = styled.h1`
  max-width: 800px;
  width: 70%;
  margin: 18px 0 0 0;
  font-size: 1.6rem;
  font-weight: normal;
  font-variant: small-caps;
`
const H2 = styled.h2`
  max-width: 800px;
  width: 70%;
  margin: 0 0 8px 0;
  font-size: 1.4rem;
  font-weight: lighter;
  font-variant: small-caps;
`
const H3 = styled.h3`
  text-align: center;
  font-size: 1.4rem;
  margin: 0;
`

export default function Home(props) {

  const { title, types } = props

  const {isFallback} = useRouter();

  if (isFallback) {
    return <>Carregando...</>
  }

  return (
    <Container>
      <HtmlHeader title={title} />

      <H1>Eu Escolho Você!</H1>
      <H2>Escolha seus pokemon para levar com você!</H2>

      <Main>
        <H3>
          {title}
        </H3>
        <ChoiceType widthBase="60" sizeText="2.5" types={types} />
      </Main>

      <Footer />
    </Container>
  )
}

export async function getStaticProps () {
  const title = "Escolha o tipo dos pokemon:"

  const types = await serviceTypes()

  return {
    props: {
      title,
      types
    }
  }
}
