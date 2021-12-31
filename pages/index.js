import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const profiles = [
    {id: 1,name: 'Dustin'},
    {id: 2,name: 'Mom'},
    {id: 3,name: 'Dad'},
    {id: 4,name: 'Friends'}
  ]
   
  return (
    <div className={styles.header}>
      <span className={styles.logo}>HBO Max</span>
      <div>Who is watching?</div>
      <div className={styles.profileBox}>
        {
          profiles.map((profile) => {
            return (
              <div className={styles.profileButton} key={profile.id}>
                <div className={styles.letter}>{profile.name.charAt(0)}</div>
                {profile.name}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
