import Head from 'next/head'
import ConnectionStatus from '../components/ConnectionStatus'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Finance Automation Dashboard</title>
      </Head>
      <main className={styles.main}>
        <h1>Finance Automation Dashboard</h1>
        <p>Welcome — your clean starter dashboard is running.</p>
        <ConnectionStatus />
      </main>
    </div>
  )
}
