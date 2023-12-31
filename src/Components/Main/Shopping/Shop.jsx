import { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "./shop.sass"
import { Progress } from "rsup-progress";
import { Link, useLocation } from "react-router-dom";

export default function Shop() {
    const [objects, setObjects] = useState([])
    const [loading, setLoading] = useState(true)
    const location = useLocation();
    const progress = new Progress({
        height: 5,
        color: '#33eafd',
    })
    useEffect(() => {
        async function FetchThings() {
            progress.start()
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                const json = await response.json();
                setObjects(prevObjs => [...prevObjs, ...json.slice(0, 20).filter((item) => item.id !== 10)])
                setLoading(false)
            } catch (error) {
                throw new Error(error)
            }
            progress.end()
        }
        if (objects.length === 0) {
            FetchThings()
        }
    }, [])
    return (
        <>
            <Header count={location.state.cartCount} cart={location.state.cart} />
            <main>
                {!loading && (
                    objects.map((item, index) => {
                        const { id, title, image, description, price } = item;
                        return (
                            <Link state={{ cartCount: location.state.cartCount, cart: location.state.cart }} to={`/shop/${id}/${title.replace(/\s/g, "&")}`} key={`${title} , ${index}`} style={{ textDecoration: "none" }}>
                                <div className={`item ${id}`}>
                                    <img src={image} height="250px" width="250px"></img>
                                    <div className="titleWrap">
                                        <h3>{title}</h3>
                                    </div>
                                    <h3>${price}</h3>
                                </div>
                            </Link>
                        );
                    })
                )}
            </main>
            {!loading && <Footer />}
        </>
    )
}