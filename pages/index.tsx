import { Logo } from 'components/Icons'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import BodyElement from 'components/atoms/BodyElement'
import Posts from 'components/organisms/Posts'

export default function Home() {
  return (
    <div className={styles.container}>
      <BodyElement><Posts/></BodyElement>
    </div>
  )
}
