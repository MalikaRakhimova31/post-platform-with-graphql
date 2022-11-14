import React from 'react';
import styles from './Atoms.module.scss';



export default function BodyElement({children, ...restProps}) {
    return (
        <div className={styles.bodyElem}>{children}</div>
    )
}
