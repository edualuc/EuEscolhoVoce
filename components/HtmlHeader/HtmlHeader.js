import Head from 'next/head'
export default function HtmlHeader ({title}) {
  return (
    <Head>
      <title>{title || "Pokedex" }</title>
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
  )
}