import React from 'react'
import Slider from '../../components/Slider/Slider'
import { headerItems } from '../../utils/ProductsData'
import './Home.css'
import banner1 from '../../BannerImages/Banner1.jpg'
import banner2 from '../../BannerImages/Banner2.jpg'
import banner3 from '../../BannerImages/Banner3.jpg'
import banner4 from '../../BannerImages/Banner4.jpg'
import banner5 from '../../BannerImages/Banner5.jpg'
import banner6 from '../../BannerImages/Banner6.jpg'

const Home = () => {
    const images = [banner1,  banner3, banner4, banner5, banner6];
    return (
        <div>
            <div className="item-container">
                {headerItems && headerItems.map((item, index) => <p>{item}</p>)}
            </div> 
            <div className="home">
                <div className="home-container">
                    <Slider images={images}/>
                    <div className="home-row">
                        {/* Products */}
                    </div>
                    <div style={{ marginTop: "40px" }}>
                        {/* Back to TOp */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
