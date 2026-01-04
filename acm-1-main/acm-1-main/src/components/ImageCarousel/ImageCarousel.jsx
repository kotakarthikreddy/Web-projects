import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';   
import styles from './imageCarousel.module.css';

import image1 from './ImageCarouselImages/image1.jpg'
import image2 from './ImageCarouselImages/image2.jpg'
import image3 from './ImageCarouselImages/image3.jpg'

const ImageCarousel = () => {
    return (
        <div className={styles.imageContainer}>
            <Carousel autoPlay infiniteLoop stopOnHover>
                <div className={styles.images}>
                    <img src={image1} alt="image1" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div className={styles.images}>
                    <img src={image2} alt="image1"/>
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div className={styles.images} alt="image1">
                    <img src={image3} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        </div>
    )
}

export default ImageCarousel
