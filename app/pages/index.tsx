import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Stopwatch from '../Components/Stopwatch/Stopwatch'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Timer</title>
        <meta name="description" content="timer created by ten-hub" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Timer
        </h1>

        <p className={styles.description}>
          
        </p>
        <Stopwatch/>
        
      
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/ten-hub/time-utilities"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Wanteng
          <span className={styles.logo}>
            <Image src="/personalIcon.png" alt="girl illustration image" width={50} height={50} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
