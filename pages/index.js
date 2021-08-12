import Head from 'next/head'
import HeroWithAngledImageOnRight from "../components/HeroWithAngledImageOnRight";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Benkobit | Agencia de Software</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <HeroWithAngledImageOnRight/>
    </div>
  )
}
