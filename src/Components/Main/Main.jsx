import { Link } from "react-router-dom";
import styles from './main.module.sass'

export default function Main() {
    return (
        <main className={styles.main}>
            <div className={styles.div}>Welcome to the Clothing HUB</div>
            <Link to='/shop' className={styles.link}>
                <button className={styles.btn}>Shop Here</button>
            </Link>
        </main>
    )
}