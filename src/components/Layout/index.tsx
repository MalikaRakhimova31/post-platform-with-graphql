import Aside from "components/moleculas/Aside";
import Header from "components/moleculas/Header";
import React from "react";
import styles from './Layout.module.scss'

interface LayoutProps {
    children: JSX.Element
}

export default function Layout({ children} : LayoutProps) {
    return <div className={styles.root}>
        <Header />
        <div className={styles.root__body}>
            <Aside />
            {children}
        </div>
    </div>
}