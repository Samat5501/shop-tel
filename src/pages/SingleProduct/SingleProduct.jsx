import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToBasket } from '../../redux/auth/action'
import { products } from '../../utils/ProductsData'
import './SingleProduct.css'

const SingleProduct = () => {
    let {id} = useParams()
    console.log("id: ", id);
    let singleProduct = products.find((item) => item.id == id)
    console.log("singleProduct", singleProduct);

    const dispatch = useDispatch()
    const addItemToBasket = () => {
        const item = {
            id: singleProduct.id,
            rating: singleProduct.rating,
            title: singleProduct.title,
            price: singleProduct.price,
            image: singleProduct.image,
            speechSynthesis: singleProduct.specification,
            detail: singleProduct.detail,
        }
        dispatch(addToBasket(item))
    }
    
    return (
        <div className='single-product-container'>
            <img src="https://t4.ftcdn.net/jpg/03/34/53/51/360_F_334535136_vvbWaKEpsHIMS4dpJUxgXZL6clQX7VGs.jpg" className='single-product-ad' alt="" />
            <div>
                <div className="single-product">
                    <img
                        src={singleProduct?.image}
                        className='single-product-image'
                        alt="" />
                    <div className="single-product-info">
                        <div className="single-product-title">
                            {singleProduct?.title}
                        </div>
                        <div className="single-product-rating">
                            {Array(singleProduct?.rating).fill().map((_, index) => <p key={index}>⭐</p>)}
                        </div>
                        <p className="single-produnct-price">
                            Price: <strong>$</strong>
                            <strong>{singleProduct?.price}</strong>
                        </p>
                        <div className="single-product-specification">
                            <h4>Specifications</h4>
                            {singleProduct?.specification && singleProduct.specification.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </div>
                        <div className="single-product-description">
                            <h4>Produc description</h4>
                            <p>{singleProduct?.detail}</p>
                        </div>
                        <button onClick={addItemToBasket}> Add To Basket</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
