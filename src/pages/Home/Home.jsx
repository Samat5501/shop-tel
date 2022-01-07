import React from 'react'
import Slider from '../../components/Slider/Slider'
import { headerItems, products } from '../../utils/ProductsData'
import './Home.css'
import banner1 from '../../BannerImages/Banner1.jpg'
import banner2 from '../../BannerImages/Banner2.jpg'
import banner3 from '../../BannerImages/Banner3.jpg'
import banner4 from '../../BannerImages/Banner4.jpg'
import banner5 from '../../BannerImages/Banner5.jpg'
import banner6 from '../../BannerImages/Banner6.jpg'
import Product from '../../components/Product/Product'
import BackToTop from '../../components/BackToTop/BackToTop'
import { useSelector, useDispatch } from 'react-redux'
import { loginInitiate } from '../../redux/auth/action'

const Home = () => {
    const images = [banner1, banner2, banner3, banner4, banner5, banner6];
    // console.log("products: ", products);
    const { user } = useSelector(state => state.data)
    console.log("user: ",user);
    const dispatch = useDispatch()
    const logouT = () => {
        dispatch(loginInitiate())
    }
    return (
        <div>
            <div className="item-container">
                {headerItems && headerItems.map((item, index) => <p>{item}</p>)}
            </div> 
            <div className="home">
                    <Slider images={images} />
                <div className="home-container">
                    <div className="home-row">
                        {products.slice(0, 2).map((item) => {
                            return (
                            <Product
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                                specification={item.specification}
                                detail={item.detail}
                            />)
                        })}
                    </div>
                    <div className="home-row">
                        {products.slice(2,5).map((item) => {
                            return (
                            <Product
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                                specification={item.specification}
                                detail={item.detail}
                            />)
                        })}
                    </div>
                    <div className="home-row">
                        {products.slice(5,7).map((item) => {
                            return (
                            <Product
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                                specification={item.specification}
                                detail={item.detail}
                            />)
                        })}
                    </div>
                    <button onClick={logouT}>logout</button>
                    <div style={{ marginTop: "40px" }}>
                        <BackToTop/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
