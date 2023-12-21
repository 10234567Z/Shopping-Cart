import { useLocation } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import styles from "./cart.module.sass"
import { useState } from "react";

export default function Cart() {
    const location = useLocation();
    const [reload , setReload] = useState(0)
    return (
        <>
            <Header count={location.state.cartCount} cart={location.state.cart} />
            <main className={styles.main}>
                {location.state.cart.map((el) => (
                    <div className={`item ${el.id}`} key={`item ${el.id}`}>
                        <img src={el.image} width="200px" height="200px"></img>
                        <h1>{el.title}</h1>
                        <h3>${el.price}</h3>
                        <h4>Quantity: {el.quantity}</h4>
                        <button onClick={() => {
                            location.state.cart.splice(location.state.cart.findIndex((it) => it.id === el.id) , 1)
                            setReload(Math.random())
                        }}>Remove</button>
                    </div>
                ))}
            </main>
            <Footer />
        </>
    )
}