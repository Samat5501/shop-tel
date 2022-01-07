import React, { useEffect, useState } from 'react'
import './BackToTop.css'

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false)
    const toggleVisibility = () => {
         if (window.pageYOffset > 600) {
             setIsVisible(true)
         } else {
             setIsVisible(false)
         }
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility)
        return () => {
            window.removeEventListener("scroll", toggleVisibility)
        }
    }, [])
    return (
        <div className='scroll-to-top'>
            {isVisible && (
                <div className='back-top-container' onClick={scrollToTop}>back to top</div>
            )}
        </div>
    )
}

export default BackToTop
