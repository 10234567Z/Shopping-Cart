import { useParams, useNavigate, useLocation } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { useEffect, useState } from "react";
import Back from "./Assets/back.svg"
import styles from "./item.module.sass"
import { Progress } from "rsup-progress";

export default function Item() {
    const location = useLocation()
    const { id, name } = useParams()
    const [loading, setLoading] = useState(true)
    const [item, SetItem] = useState('')
    const [count, setCount] = useState(location.state.cartCount)
    const [quantity, setQuantity] = useState(1)
    const [popup, setPopup] = useState(false)
    const [limit , setPLimit] = useState(false)
    const progress = new Progress({
        height: 5,
        color: '#33eafd',
    })
    let navigate = useNavigate()
    useEffect(() => {
        async function FetchItem() {
            progress.start()
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`)
                const json = await response.json();
                SetItem(json)
                setLoading(false)
            } catch (error) {
                throw new Error(error)
            }
            progress.end()
        }
        FetchItem();
    }, [])

    const { category, description, image, price, rating, title } = item;
    return (
        <>
            {!loading &&
                <>
                    <Header count={count} cart={location.state.cart} />
                    <img src={Back} height="50px" width="50px"
                        style={{ cursor: "pointer", position: "absolute" }}
                        onClick={() => navigate('/shop', { state: { cartCount: location.state.cartCount, cart: location.state.cart } })}></img>
                    <div className={`${styles.popup} ${popup && styles.show} ${styles.btn}`}>
                        <h1>You already have this in Cart</h1>
                        <button onClick={() => {
                            setPopup(false)
                        }}>okay</button>
                    </div>
                    <div className={`${styles.popup} ${limit && styles.show} ${styles.btn}`}>
                        <h1>Quantity range is 1-25</h1>
                        <button onClick={() => {
                            setPLimit(false)
                        }}>okay</button>
                    </div>
                    <main className={styles.main}>
                        <img src={image} height="290px" width="290px" alt={`${title}`} className={styles.img}></img>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <h3>${price}</h3>
                        <div className={styles.btn}>
                            <input className={styles.inp} type="number" min={1} max={25} onChange={(e) => setQuantity(+e.target.value)} value={quantity}></input>
                            <button onClick={() => {
                                if (location.state.cart.find((e) => e.id === +id) === undefined) {
                                    if(quantity > 0 && quantity <= 25){
                                        item.quantity = quantity;
                                        location.state.cart.push(item)
                                        location.state.cartCount += quantity
                                        setCount(location.state.cartCount)
                                    }
                                    else{
                                        setPLimit(true)
                                    }
                                }
                                else {
                                    setPopup(true)
                                }
                            }}>Add To Cart</button>
                        </div>
                    </main>
                    <Footer />
                </>}

        </>
    )
}