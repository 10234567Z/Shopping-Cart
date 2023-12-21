import { Link, useLocation } from "react-router-dom";
import styles from './main.module.sass'
import { useState } from "react";

export default function Main({count , cart}) {
    const location = useLocation();
    if(location.state !== null){
        console.log(location)
    }
    return (
        <main className={styles.main}>
            <div className={styles.div}>Welcome to the Clothing HUB</div>
            <Link state={{cartCount: count , cart: cart}} to='/shop' className={styles.link}>
                <button className={styles.btn}>Shop Here</button>
            </Link>
        </main>
    )
}