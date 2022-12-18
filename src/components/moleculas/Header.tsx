import { ArrowLeft, Logo } from 'components/Icons'
import React from 'react'
import styles from './Moleculas.module.scss'
import { useRouter } from 'next/router'

export default function Header() {
    const childRout = ['/create-post']
    const router = useRouter()
    return (<header className={styles.header}>
        <div className={styles.header__logoBox} onClick={() => router.push('/')}>LOGO</div>
        <div>{childRout.includes(router.pathname) ?
            <div className='flex items-center'>
                <div  onClick={() => router.push('/')}
                className='flex mr-4 cursor-pointer items-center justify-center w-7 h-7 border rounded border-border-color bg-white'>
                    <ArrowLeft />
                </div>
                New Post
            </div> :
            "Posts"}</div>
    </header>)
}