'use client'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import dynamic from 'next/dynamic'

// const DigitalText = dynamic(() => import('../../components/DigitalText'))
// const KajBosteDosegnuli = dynamic(() =>
//   import('../../components/KajBosteDosegnuli')
// )
// const Statistika = dynamic(() => import('../../components/Statistika'))
// const Projekti = dynamic(() => import('../../components/Projekti'))
// const Mnenja = dynamic(() => import('../../components/MnenjaStrank'))
// const IzdelavaStrani = dynamic(() => import('../../components/IzdelavaStrani'))
// const DigitEkipa = dynamic(() => import('../../components/DigitEkipa'))
// const Popup = dynamic(() => import('../../components/helperFunctions/Popup'))

// import DigitalText from '../../components/DigitalText'
// import KajBosteDosegnuli from '../../components/KajBosteDosegnuli'
// import Statistika from '../../components/Statistika'
// import Projekti from '../../components/Projekti'
// import Mnenja from '../../components/MnenjaStrank'
// import IzdelavaStrani from '../../components/IzdelavaStrani'
// import DigitEkipa from '../../components/DigitEkipa'
// import Popup from '../../components/helperFunctions/Popup'

// const CircleComponents = dynamic(() =>
//   import('../../components/CircleComponents')
// )
// import CircleComponents from '../../components/CircleComponents'
import Hero from '../../public/hero-image.webp'
import Logo from '../../public/digit-logo-final.svg'

///
// const HeroMobile = dynamic(() => import('../../components/mobile/HeroMobile'))
// const KajBosteDoseegliMobile = dynamic(() =>
//   import('../../components/mobile/KajBosteDoseegliMobile')
// )
const SquaresLandingLeft = dynamic(() =>
  import('../../components/helperFunctions/SquaresLandingLeft')
)
const SquaresLanding = dynamic(() =>
  import('../../components/helperFunctions/SquaresLanding')
)

// import HeroMobile from '../../components/mobile/HeroMobile'
// import KajBosteDoseegliMobile from '../../components/mobile/KajBosteDoseegliMobile'
// import SquaresLandingLeft from '../../components/helperFunctions/SquaresLandingLeft'
// import SquaresLanding from '../../components/helperFunctions/SquaresLanding'

const PageLayoutHolder = dynamic(() =>
  import('../../components/PageLayoutHolder')
)
// import PageLayoutHolder from '../../components/PageLayoutHolder'

export default function Home() {
  return (
    <main className={`${styles.pageContainer}`}>
      <div className={styles.imageContainer}>
        <Image
          src={Hero}
          alt='big landing image containing cat and text our team'
          priority={true}
          width={1915}
          height={1523}
        />
        <div className={styles.mainContentContainer}>
          <Image src={Logo} alt='digit logo' priority={true} />
          <p>
            Z intenzivno spletno prisotnostjo, dvignemo prihodke vašega
            podjetja.
          </p>
          <Link href='/informativno-ponudbo'>
            <button className={`${styles.btn} ${styles.btnhite}`}>
              PRIDOBITE INFORMATIVNO PONUDBO
            </button>
          </Link>

          <Link href='/brezplacna-analiza'>
            <button className={`${styles.btn} ${styles.btnBorder}`}>
              BREZPLAČNA SPLETNA ANALIZA
            </button>
          </Link>
        </div>

        <SquaresLandingLeft />
        <SquaresLanding />
      </div>
      {/* <HeroMobile />
      <section className={styles.circleSection}>
        <CircleComponents />
        <DigitalText />
      </section>
      <Popup />

      <KajBosteDosegnuli />
      <KajBosteDoseegliMobile />
      <Statistika />
      <Projekti />

      <Mnenja />

      <IzdelavaStrani />
      <DigitEkipa /> */}

      <PageLayoutHolder />
    </main>
  )
}

// "eslint": "8.37.0",
//     "eslint-config-next": "13.2.4",
