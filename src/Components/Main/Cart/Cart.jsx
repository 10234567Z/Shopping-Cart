import { useLocation } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "./cart.sass"

export default function Cart() {
    const location = useLocation();
    return (
        <>
            <Header count={location.state} />
            <main>
                
            </main>
            <Footer />
        </>
    )
}