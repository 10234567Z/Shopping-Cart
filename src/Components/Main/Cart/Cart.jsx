import { useLocation } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

export default function Cart() {
    const location = useLocation();
    return (
        <>
            <Header count={location.state} />
            <Footer />
        </>
    )
}