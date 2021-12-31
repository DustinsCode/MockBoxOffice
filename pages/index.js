import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.header}>
      <span className={styles.logo}>HBO Max</span>
      <div>Who is watching?</div>
    </div>
  )
}
