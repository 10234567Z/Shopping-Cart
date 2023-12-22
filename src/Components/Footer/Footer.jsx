import styles from './footer.module.sass'
export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={`gtk ${styles.div}`}>
                <h2>Get To Know Us</h2>
                <a href='#'>About Us</a>
                <a href='#'>Careers</a>
                <a href='#'>Press Releases</a>
                <a href='#'>Web Science</a>
            </div>
            <div className={`connect ${styles.div}`}>
                <h2>Connect With Us</h2>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
            </div>
        </footer>
    )
}