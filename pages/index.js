import React, { useState, useEffect } from 'react'
import Head from 'next/head'

import Footer from '../src/components/common/Footer'
import Navbar from '../src/components/common/Navbar'
import About from '../src/components/HomePage/About'
import Accomplishments from '../src/components/HomePage/Accomplishments'
import Projects from '../src/components/HomePage/Projects'
import Skills from '../src/components/HomePage/Skills'
import Sociallinks from '../src/components/HomePage/Sociallinks'

import styles from '../styles/Home.module.css'

export default function Home() {
  const [sticky, setSticky] = useState(true)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    setOffset(window.pageYOffset)
    var bottom = document.getElementById('footer');
    if (offset < bottom.offsetTop - 1000) {
      setSticky(true)
    }
    else {
      setSticky(false)
    }
    console.log(offset, ' ', bottom.offsetTop)
  }, [offset])

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
        <Accomplishments />
        <Sociallinks sticky={sticky} />
        <Footer />
      </div>
    </div>
  )
}
