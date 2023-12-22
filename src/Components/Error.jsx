import { Link, useLocation } from "react-router-dom";

export default function Error() {
    const location = useLocation()
    return (
        <>
            <h1>Ah!..Seems like an error now</h1>
            <Link state={{ cartCount: location.state.cartCount, cart: location.state.cart }} to="/">
                <h3>Click here to go to home page</h3>
            </Link>
        </>
    )
}