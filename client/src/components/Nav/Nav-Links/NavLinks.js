import { Link } from 'react-router-dom';
import './NavLinks.css'

const NavLinks = () => {
    return ( 
            <nav className="nav__bottom__container">
                <div className="bottom__container">
                    <ul className="nav">
                    <li className='nav-link'><Link to="/">Home</Link></li> 
                        <li className='nav-link'><Link to="/Card/Wishlist">ABOUT</Link></li> 
                        <li className='nav-link'><Link to="/category/men">SERVICES</Link> </li>
                        <li className='nav-link'><Link to="/category/men">BLOG</Link></li> 
                        <li className='nav-link'><Link to="/category/women">CONTACT</Link></li> 
                        <li className='nav-link'><Link to="/category/kids">Kids</Link></li>
                    </ul>
                </div>
            </nav>
     );
}
 
export default NavLinks;