import './header.sass'
import Cart from './cart-outline.svg'
import { Link } from 'react-router-dom'

export default function Header({ count , cart }) {
    return (
        <header>
            <Link state={{ cartCount: count , cart: cart }} to='/home' className='headLink'>
                <h1>F Store</h1>
            </Link>
            <div className="cartWrap">
                <Link state={{ cartCount: count , cart: cart }} to='/cart'>
                    <img src={Cart} width="50px" height="50px" />
                </Link>
                <p>{count > 99 ? "99+" : count}</p>
            </div>
        </header>
    )
}