import { useParams, useNavigate, useLocation } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { useEffect, useState } from "react";
import Back from "./Assets/back.svg"
import styles from "./item.module.sass"

export default function Item() {
    const location = useLocation()
    const { id, name } = useParams()
    const [loading, setLoading] = useState(true)
    const [item, SetItem] = useState('')
    const [count, setCount] = useState(location.state.cartCount)
    const [quantity, setQuantity] = useState(1)
    let navigate = useNavigate()
    useEffect(() => {
        async function FetchItem() {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`)
                const json = await response.json();
                SetItem(json)
                setLoading(false)
            } catch (error) {
                throw new Error(error)
            }
        }
        FetchItem();
    }, [])

    const { category, description, image, price, rating, title } = item;
    return (
        <>
            {loading
                ?
                <p>Loading...</p>
                :
                <>
                    <Header count={count} cart={location.state.cart} />
                    <img src={Back} height="50px" width="50px"
                        style={{ cursor: "pointer", position: "absolute" }}
                        onClick={() => navigate('/shop', { state: { cartCount: location.state.cartCount, cart: location.state.cart } })}></img>
                    <main className={styles.main}>
                        <img src={image} height="290px" width="290px" alt={`${title}`} className={styles.img}></img>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <h3>${price}</h3>
                        <div className={styles.btn}>
                            <input className={styles.inp} type="number" min={1} max={25} onChange={(e) => setQuantity(+e.target.value)} value={quantity}></input>
                            <button onClick={() => {
                                if (location.state.cart.find((e) => e.id === +id) === undefined) {
                                    item.quantity = quantity;
                                    location.state.cart.push(item)
                                    location.state.cartCount += quantity
                                    setCount(location.state.cartCount)
                                }
                                else {
                                    alert("Nope")
                                }
                            }}>Add To Cart</button>
                        </div>
                    </main>
                    <Footer />
                </>}

        </>
    )
}