import React, { useEffect, useState } from 'react'
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
// import './Slider.css'
import banner1 from '../../BannerImages/Banner1.jpg'

const Slider = ({ images }) => {
    const [index, setIndex] = useState(0)
    console.log(index);
    useEffect(() => {
        const lastIndex = images.length - 1;
        if (index< 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
             setIndex(0)
        }
    }, [index, images])

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 5000);
        return () => {
            clearInterval(slider)
        }
    }, [index])

    return (
        <div className='section'>
            <div className="section-center">
                {images.map((image, indexImage) => {
                    console.log(image);
                    let position = "nextSlide";
                    if (indexImage === index - 1) {
                        position = "activslide"
                    } if (indexImage === index - 1 || (index === 0 && indexImage === images.length - 1)) {
                        position = "lastSlide"
                    }
                    return (
                        <article key={indexImage}>
                            <img src={banner1} alt="slide" className='banner-img1'/>
                        </article>
                    )
                })}
                <p className='prev' onClick={() => setIndex(index - 1)}>
                    <BsFillArrowLeftSquareFill/>
                </p>
                <p className='next' onClick={() => setIndex(index + 1)}>
                    <BsFillArrowRightSquareFill/> 
                </p>
            </div>
        </div>
    )
}

export default Slider
