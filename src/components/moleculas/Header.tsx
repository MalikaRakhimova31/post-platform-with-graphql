import { Logo } from 'components/Icons'
import React from 'react'
import styles from './Moleculas.module.scss'

export default function Header() {
    return (<header className={styles.header}>
        <div className={styles.header__logoBox}><Logo /></div>
        <div>Posts</div>
    </header>)
}