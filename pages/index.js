import Head from 'next/head'
import Image from 'next/image'
import Footer from '../src/components/common/Footer'
import Navbar from '../src/components/common/Navbar'
import About from '../src/components/HomePage/About'
import Projects from '../src/components/HomePage/Projects'
import Skills from '../src/components/HomePage/Skills'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Subin S K Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-full flex flex-col'>

        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}
