import Head from 'next/head'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>Lorem impsum Lorem impsum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic possimus laboriosam esse neque totam! Libero ab nulla, velit earum doloribus voluptates numquam provident ad illo magnam blanditiis? Harum, quia voluptas.</p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listings</a>
      </Link>
    </div>
  )
}
