import React, {useEffect} from 'react'
import styles from './about.module.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Typography, Button} from '@material-ui/core'
import Aos from 'aos'
import "aos/dist/aos.css"
import aboutImg from './aboutImg.jpg'

const About = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])

    return (
        <div>
            <div className={styles.title} id="about"><h1 className={styles.titleHeading}>About Us</h1>
                <div className={styles.underline}></div>
            </div>
            <div className={styles.wrapper}>
            

            {/* part 2 */}
            <div className={styles.container2}>
                {/* <div className={styles.aboutImage} data-aos="fade-right">
                    <img src="https://www.vidyavision.com/CollegeUploads/Photos/2020-30-11-11-02-31_EfOFC0IU8AA1hOb.jpg" alt="VIT-IMAGE" />
                </div> */}
                <div className={styles.image} data-aos="fade-right">
    <div className={styles.imageContainer}>
        <img className={styles.image__img} src={aboutImg} alt="Vit" />
    </div>
    <div className={`${styles.image__overlay} ${styles.image__overlay__primary}`}>
        <div className={styles.image__title}>VIT-AP</div>
        <p className={styles.image__description}>
            Vellore Institute of Technology
        </p>
    </div>
</div>

                {/* <div className={styles.cardContainer} data-aos="fade-left">
                    <h2 style={{color: '#ffac30'}}>VIT-AP</h2>
                    <Typography variant='body1' className={styles.point}>Vellore Institute of Technology, AP is one of the most esteemed institutions which has the privilege of being one of the few colleges to impart world class
education along with the encouragement towards co-curricular activities which helps in the overall development of students and transform
them into responsible citizens with great ethics and human values.</Typography>
                    <div className={styles.icons}>
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div> */}

<div className={styles.content} data-aos="fade-left">
                    <div className={styles.points}>
                        <ArrowForwardIosIcon className={styles.pointIcon} />
                        <Typography variant='body1' className={styles.point}>Vellore Institute of Technology, AP is one of the most esteemed institutions which has the privilege of being one of the few colleges to impart world class
education along with the encouragement towards co-curricular activities which helps in the overall development of students and transform
them into responsible citizens with great ethics and human values</Typography>
                    </div>
                    <div className={styles.points}>
                        <ArrowForwardIosIcon className={styles.pointIcon} />
                        <Typography variant='body1' className={styles.point}>Vellore Institute of Technology was started with utmost initiation and perseverance of our respected chancellor,
Dr. G. Viswanathan to improve the world through transformative education by fostering intellectual and creative workforce.</Typography>
                    </div>
                    <div className={styles.points}>
                        <ArrowForwardIosIcon className={styles.pointIcon} />
                        <Typography variant='body1' className={styles.point}>Impact industry and society through innovative and collaborative work. To enhance core values like team work, Creativity, Sustainability, Accountability and Integrity among students.</Typography>
                    </div>

                    <button className={styles.join}><a href="https://vitap.ac.in/" target="_blank">LEARN MORE</a> <ArrowForwardIosIcon style={{fontSize: '20px'}} /></button>
                </div>
            </div>

{/* part 1 */}
            <div className={styles.container}>

                <div className={styles.content} data-aos="fade-left">
                    <div className={styles.points}>
                        <ArrowForwardIosIcon className={styles.pointIcon} />
                        <Typography variant='body1' className={styles.point}>ACM VIT-AP, one of the most eminent technical chapter in VITAP. VIT-AP has been working with vision and determination since it’s start.</Typography>
                    </div>
                    <div className={styles.points}>
                        <ArrowForwardIosIcon className={styles.pointIcon} />
                        <Typography variant='body1' className={styles.point}>ACM VIT-AP is working with aspirations of advancement of computer science as a science and a profession.</Typography>
                    </div>
                    <div className={styles.points}>
                        <ArrowForwardIosIcon className={styles.pointIcon} />
                        <Typography variant='body1' className={styles.point}>We are not just an organization, we are family, united by one cause, working towards making technology more accessible much like our parent organization, ACM.</Typography>
                    </div>
                    <div className={styles.points}>
                        <ArrowForwardIosIcon className={styles.pointIcon} />
                        <Typography variant='body1' className={styles.point}>ACM-VITAP continues to pursue projects with diligence and ambition.Technology is their cause, objective, vision, and mission.</Typography>
                    </div>

                    <button className={styles.join}> <a href="https://chat.whatsapp.com/DeaBpUPFePk6DdxDYfc93i" target="_blank">WhatsApp</a> <ArrowForwardIosIcon style={{fontSize: '20px'}} /></button>
                </div>

                <div className={styles.iframe} data-aos="fade-right">
                    <iframe src='https://www.youtube.com/embed/i6ulqLd41Ys?autoplay=1&mute=1&loop=1&rel=0&playlist=i6ulqLd41Ys' autoplay frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen title='video' />
                </div>
            </div>

                    
        </div>
        </div>
    )
}

export default About
