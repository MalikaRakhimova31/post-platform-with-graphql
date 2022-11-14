import React from "react";
import styles from './Atoms.module.scss'

interface AsideLabelProps {
    labelName: string;
    image: JSX.Element
}

export default function AsideLabel({labelName, image}: AsideLabelProps) {
    return (
        <div className={styles.asideMenu}>
            {image}
            {labelName}
        </div>
    )
}