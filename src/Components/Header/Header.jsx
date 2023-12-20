import './header.sass'
import Cart from './cart-outline.svg'
import { Link } from 'react-router-dom'

export default function Header({count}) {
    return (
        <header>
            <Link state={count} to='/home' className='headLink'>
                <h1>F Store</h1>
            </Link>
            <div className="cartWrap">
                <Link state={count} to='/cart'>
                    <img src={Cart} width="50px" height="50px" />
                </Link>
                <p>{count > 99 ? "99+" : count}</p>
            </div>
        </header>
    )
}