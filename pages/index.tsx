import { GetStaticProps } from 'next'
import Head from 'next/head'
import axios from 'axios'
import Contact from '@components/Contact'
import styles from '@styles/pages/home.module.scss'

interface GithubData {
  name: string
  company: string | null
}

const Home = ({ name, company }: GithubData) => {
  const isHired = company !== null
  const yesOrNo = isHired ? 'Yes.' : 'No.'
  const message = isHired
    ? `He is currently working at ${company}.`
    : 'Look no further if you are looking to hire a passionate developer :)'
  return (
    <div>
      <Head>
        <title>Is Freddy Shim Hired?</title>
        <meta
          name="description"
          content="This website will tell you whether or not Freddy Shim is working at an establishment."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.background}>
        <header className={styles.header}>
          <h1>
            Is <span>{name}</span> hired?
          </h1>
        </header>
        <main className={styles.main}>
          <h2 className={styles.main__answer}>{yesOrNo}</h2>
          <aside className={styles.main__message}>{message}</aside>
        </main>
        <footer className={styles.footer}>
          <h2 className={styles.footer__description}>
            Contact {name.split(' ')[0]}
          </h2>
          <Contact />
        </footer>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get<GithubData>(
    'https://api.github.com/users/freddyshim'
  )
  if (!res.data) {
    return {
      notFound: true,
    }
  }

  return {
    props: res.data,
  }
}

export default Home
