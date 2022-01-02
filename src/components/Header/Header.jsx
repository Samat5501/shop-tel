import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai';
import { HiLocationMarker } from 'react-icons/hi';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    // AiOutlineSearch
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
                <Link to="/login" className='header-link'>
                    <div className="header-option">
                        <span className='header-option1'>Hello Guest</span>
                        <span className='header-option2'>Sign In</span>
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
                        <span className="header-option2 basket-count">0</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
