import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai';
import { HiLocationMarker } from 'react-icons/hi';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logoutInititate } from '../../redux/auth/action';

const Header = () => {
    const { user, basket } = useSelector(state => state.data)
    // const { basket } = useSelector(state => state.basket)
    console.log("bsket: ", basket);
    
    const dispatch = useDispatch()
    const handleAuth = () => {
        dispatch(logoutInititate())
    }

    return (
        <div className='header'>
            <Link to='/'>
                <img className='header-logo'
                    src="https://www.freepnglogos.com/uploads/two-phone-mobile-logo-download-9.png" alt="amazan" />
            </Link>
            <div className="header-option" style={{marginRight: "-10px"}}>
                <HiLocationMarker/>
            </div>
            <div className="header-option">
                <span className="header-option1">Hello</span>
                <span className="header-option2">Select your adress</span>
            </div>
            <div className="search">
                <select>
                    <option>All</option>
                </select>
                <input type="text" className='searchInput' />
                <AiOutlineSearch className='searchIcon'/>
            </div>
            <div className="header-nav">
                <Link to={user ? "/": "/login"} className='header-link'>
                    <div onClick={handleAuth} className="header-option">
                        <span className='header-option1'>Hello {user ? user.email : "Guest"}</span>
                        <span className='header-option2'>{user ? "Sign Out" : "SIgn In"}</span>
                    </div>
                </Link>
                <Link to="/order" className='header-link'>
                    <div className="header-option">
                        <span className='header-option1'>Returns</span>
                        <span className='header-option2'>& Orders</span>
                    </div>
                </Link>
                <Link to="/checkout" className='header-link'>
                    <div className="header-basket">
                        <FaShoppingCart/>
                        <span className="header-option2 basket-count">{basket && basket.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
