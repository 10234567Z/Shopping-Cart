import { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "./shop.sass"

export default function Shop() {
    const [objects, setObjects] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function FetchThings() {
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                const json = await response.json();
                setObjects(prevObjs => [...prevObjs, ...json.slice(0, 20)])
                setLoading(false)
            } catch (error) {
                throw new Error(error)
            }
        }
        if (objects.length === 0) {
            FetchThings()
        }
    }, [])
    return (
        <>
            <Header />
            <main>
                {!loading && (
                    objects.map((item, index) => {
                        const { id, title, image, description, price } = item;
                        return (
                            <div className={`item ${id}`} key={`${title} , ${index}`}>
                                <img src={image} height="250px" width="250px"></img>
                                <div className="titleWrap">
                                    <h3>{title}</h3>
                                </div>
                                <h3>${price}</h3>
                            </div>
                        );
                    })
                )}
                {loading && <p>Loading...</p>}
            </main>
            <Footer />
        </>
    )
}