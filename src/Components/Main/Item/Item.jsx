import { useParams } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

export default function Item(){

    const {id ,name} = useParams()
    return (
        <>
            <Header />
            <Footer />
        </>
    )
}