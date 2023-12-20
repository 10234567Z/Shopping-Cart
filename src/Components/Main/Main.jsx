import { Link, useLocation } from "react-router-dom";
import styles from './main.module.sass'
import { useState } from "react";

export default function Main({count}) {
    const location = useLocation();
    if(location.state !== null){
        //...
    }
    return (
        <main className={styles.main}>
            <div className={styles.div}>Welcome to the Clothing HUB</div>
            <Link state={count} to='/shop' className={styles.link}>
                <button className={styles.btn}>Shop Here</button>
            </Link>
        </main>
    )
}