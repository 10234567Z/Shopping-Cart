import { useParams , useNavigate} from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { useEffect, useState } from "react";
import Back from "./Assets/back.svg"

export default function Item() {

    const { id, name } = useParams()
    const [loading, setLoading] = useState(true)
    const [item, SetItem] = useState('')
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
    } , [])

    const { iid, title, image, description, price } = item;
    return (
        <>
            {loading
                ?
                <p>Loading...</p> 
                :
                <>
                    <Header />
                    <img src={Back} height="50px" width="50px" 
                    style={{cursor: "pointer",position: "absolute"}} 
                    onClick={() => navigate(-1)}></img>
                    <main>
                        <img src={image} height="290px" width="290px" alt={`${title}`}></img>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <h3>${price}</h3>
                    </main>
                    <Footer />
                </>}

        </>
    )
}