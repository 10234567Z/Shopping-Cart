import './header.sass'
import Cart from './cart-outline.svg'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <Link to='/home' className='headLink'>
                <h1>F Store</h1>
            </Link>
            <div className="cartWrap">
                <Link to='/cart'>
                    <img src={Cart} width="50px" height="50px" />
                </Link>
                <p></p>
            </div>
        </header>
    )
}