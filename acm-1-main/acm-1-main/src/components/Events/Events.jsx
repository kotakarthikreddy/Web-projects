import React, {useState, useEffect} from 'react'
import styles from './events.module.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const data = [
    {
        id: 1,
        video: 'https://www.youtube.com/embed/i6ulqLd41Ys?autoplay=1&mute=1&loop=1&rel=0&playlist=i6ulqLd41Ys'
    },
    {
        id: 2,
        video: 'https://www.youtube.com/embed/gD_CxMDa730?autoplay=1&mute=1&loop=1&rel=0&playlist=gD_CxMDa730'
    }, 
    {
        id: 3,
        video: 'https://www.youtube.com/embed/xvuq0i_NW8M?autoplay=1&mute=1&loop=1&rel=0&playlist=xvuq0i_NW8M'
    }
]

const Events = () => {

    let [idx, setIdx] = useState(-1);

const run = () => {
    idx++;

    if(idx === data.length) {
        idx = 0;
    }
    setIdx(idx);

    // setTimeout(() => {
    //     run();
    // }, 4000)
    // console.log(data[idx].image)
}

const next = () => {
    console.log("clicked next btn")

    setIdx(idx === data.length - 1 ? 0 : idx + 1)
}

const prev = () => {
    console.log("clicked prev btn")
    setIdx(idx === 0 ? data.length - 1 : idx - 1);
}

useEffect(() => {
    run();
}, [])

// style={{transform: `translateX(${-idx * 40}vw)`}}

    return (
        <div className={styles.w}>
            <div className={styles.controls}>
                                <button className={styles.icons} onClick={prev}>
                                <ArrowBackIosNewIcon   />
                                    </button> 
                                <button className={styles.icons} onClick={next}>
                                <ArrowForwardIosIcon  />
                                </button>
                            </div>
        <div className={styles.carouselWrapper}>
            
            {/* carousel */}
            <div className={styles.carContainer}>
            <div className={styles.carousel}>
            <div className={styles.imageContainer}>
                {
                    data.map((data) => {
                    return <div className={styles.indiContainer} style={{transform: `translateX(${-idx * 60}vw)`}}>
                            <iframe src={data.video} frameborder='0' allow='autoplay; encrypted-media' allowfullscreen title='video' className={styles.image} />
                        </div>
                    })
                }
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Events
