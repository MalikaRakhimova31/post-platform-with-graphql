import React from "react";
import styles from './Atoms.module.scss';
import {useRouter} from 'next/router'

interface AsideLabelProps {
    labelName: string;
    image: JSX.Element
}

export default function AsideLabel({ labelName, image }: AsideLabelProps) {
    const router = useRouter()
    return (
        <div className={styles.asideMenu} onClick={() => {router.push('/')}}>
            {image}
            {labelName}
        </div>
    )
}