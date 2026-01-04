import React , {useState, useEffect} from 'react'
import styles from './profile.module.css'
import {Typography} from '@material-ui/core'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Aos from 'aos'
import "aos/dist/aos.css"

const Profile = ({data, title}) => {

    let [idx, setIdx] = useState(0);


    const next = () => {
        setIdx(idx === data.length - 1 ? 0 : idx + 1)
    }

    const prev = () => {
        setIdx(idx === 0 ? data.length - 1 : idx - 1);
    }

    const [showPop, setShowPop] = useState(false);

    const [showPopId, setShowPopId] = useState(0);
    const handleOpen = (id) => {
        setShowPop(!showPop)
        setShowPopId(id);
    }

    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])

    // style={{transform: `translateX(${-idx * 350}px)`}}
    return (
            
        <div className={styles.wholeWrapper} data-aos="fade-up" id="profile">
            <Typography variant="h4" gutterBottom className={styles.proTit} style={{paddingLeft: '20px', fontWeight: '300'}}>{title}</Typography>
            <div className={styles.opeartions}>
                    <div className={styles.prev} onClick={prev}>
                    <ArrowBackIosNewIcon   />
                    </div>
                    <div className={styles.next} onClick={next}>
                    <ArrowForwardIosIcon  />
                    </div>
                </div>
            <div className={styles.wrapper} data-aos="fade-up">
                
                {
                    data.map((data) => (
                        <div className={`${styles.container} ${styles.active}`} style={{transform: `translateX(${-idx * 320}px)`}} onClick={() => handleOpen(data.id)} >
                        <div className={styles.background}><Typography variant="h5" className={styles.name}>{data.name}</Typography></div>
                        <div className={styles.bgImageContainer}>
                        {/* data.backgroundImage */}
                            <img src={data.backgroundImage} 
                            className={styles.profileImage}
                            alt="" />
                        </div>
                        <div className={styles.content}>
                            

                            {
    showPopId === data.id ? <div className={showPop ? styles.popup : `${styles.popup} ${styles.dontshow}`}>
    <button className={styles.closeBtn} onClick={() => setShowPop(!showPop)}><i class="fas fa-times"></i></button>
    <h3>{data.name}</h3>
    <h4 className={styles.popUptag}>{data.tag}</h4>
    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eum iste debitis corrupti temporibus eius similique sunt quia ullam necessitatibus?</p> */}
    <div className={styles.icons}>
        <a href={data.linkedin} target="_blank" className={styles.linkedin} ><i className="fab fa-linkedin-in"></i></a>
        <a href={data.instagram} target="_blank" className={styles.instgram} ><i className="fab fa-instagram"></i></a>
        {
            data.github ? <a href={data.github} target="_blank" className={styles.github} ><i class="fab fa-github"></i></a> : ''
        }
    </div>
</div>: ''
}
                        </div>
                    </div>


    //                 <div>
    //                     <div className={styles.imageContainer}>
    //                     <img src={data.backgroundImage} 
    //                     alt="" />
    //                     </div>

    //                     <div className={styles.card}>
    //                         <h3>Prabhas</h3>
    //                         <div className={styles.icons}>
    //      <a href="#" className={styles.linkedin} ><i className="fab fa-linkedin-in"></i></a>
    //      <a href="#" className={styles.instgram} ><i className="fab fa-instagram"></i></a>
    //  </div>
    //                     </div>
    //                 </div>
                    ))
                }
        </div>
        </div>
    )
}

export default Profile
