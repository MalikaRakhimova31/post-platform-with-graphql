import AsideLabel from 'components/atoms/AsideLabel'
import { ColorSwatch } from 'components/Icons'
import React from 'react'
import styles from './Moleculas.module.scss'


export default function Aside() {
    return (
        <aside className={styles.aside}>
            <AsideLabel labelName='Posts' image={<ColorSwatch />}/>
        </aside>
    )
}
