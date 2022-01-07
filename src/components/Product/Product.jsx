import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addToBasket } from '../../redux/auth/action';

const Product = ({id, title, image, price, rating, specification, detail}) => {
    console.log("basket: ", id);
    const dispatch = useDispatch()
    const onAddItemToBasket = () => {
        const item = {
            id,
            title,
            price,
            image,
            rating
        }
        dispatch(addToBasket(item))
    }
    const {basket} = useSelector(state => state.basket)
    return (
        <div className='product'>
            <div className="info">
                <Link to={`/product/${id}`} className='title'>
                    <p>{title}</p>
                </Link>
                <p className='price'>
                    <strong>$</strong>
                    <strong>{price}</strong>
                </p>
                <div className="rating">
                    {Array(rating).fill().map((_, index) => <p key={index}>⭐</p>)}
                </div>
                </div>
                <img src={image} alt="" />
                <button onClick={onAddItemToBasket}>
                    <i>
                        <FaShoppingCart/>
                    </i>
                    Add to Basket
                </button>
        </div>
    )
}

export default Product
