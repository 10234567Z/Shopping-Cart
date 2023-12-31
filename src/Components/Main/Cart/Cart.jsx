import { useLocation } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import styles from "./cart.module.sass"
import { useState } from "react";

export default function Cart() {
    const location = useLocation();
    const [reload, setReload] = useState(0)
    const total = location.state.cart.reduce((total , item) => total + item.price , 0)
    return (
        <>
            <Header count={location.state.cartCount} cart={location.state.cart} />
            <main className={styles.main}>
                <div className={`cartWrap ${styles.mWrap}`}>
                    {location.state.cart.length >= 1
                        ? location.state.cart.map((el) => (
                            <div className={`item ${el.id} ${styles.item}`} key={`item ${el.id}`}>
                                <img src={el.image} width="200px" height="200px"></img>
                                <div className={styles.tWrap}>
                                    <h1>{el.title}</h1>
                                </div>
                                <h3>${el.price}</h3>
                                <h4>Quantity: {el.quantity}</h4>
                                <button className={styles.btn} onClick={() => {
                                    location.state.cartCount -= el.quantity;
                                    location.state.cart.splice(location.state.cart.findIndex((it) => it.id === el.id), 1)
                                    setReload(Math.random())
                                }}>Remove</button>
                            </div>))
                        : <h1 className={styles.h1}>Nothing here....YET!</h1>
                    }
                </div>
                {location.state.cart.length >= 1 && 
                <>
                <button className={`${styles.btn} ${styles.check}`}>Checkout Total ${total}</button>
                </>
                }
            </main>
            <Footer />
        </>
    )
}