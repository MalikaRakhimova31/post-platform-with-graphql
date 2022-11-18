import styles from '../styles/Home.module.css'
import BodyElement from 'components/atoms/BodyElement'
import CreatePost from 'components/organisms/CreatePost'

export default function Home() {
  return (
    <div className={styles.container}>
      <BodyElement><CreatePost/></BodyElement>
    </div>
  )
}