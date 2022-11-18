import React from 'react';
import styles from './Atoms.module.scss';

export default function BodyElement(props) {
    return (
        <div className={styles.bodyElem} {...props} />
    )
}
