import React, {useEffect, useState} from 'react'
import styles from './ourCoordinator.module.css'
import {Typography} from '@material-ui/core'
import facebook from '../../svgs/facebook.png'
import linkedin from '../../svgs/linkedin.png'
import twitter from '../../svgs/twitter.png'
import mail from '../../svgs/mail.png'
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Aos from 'aos'
import "aos/dist/aos.css"
// import bob from '../../svgs/bob.svg'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const OurCoordinator = () => {

    const [showPoints, setShowPoints] = useState(false);
    const handleReadMore = () => {
        setShowPoints(!showPoints);
    }

    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])

    // state to switch from co-ordinator to president
    const [coOrdinator, setCoordinator] = useState(true)
    const [president, setPresident] = useState(false)

    const handleCoordinator = () => {
        setCoordinator(true);
        setPresident(false)
    }

    const handlePresident = () => {
        setPresident(true);
        setCoordinator(false);
    }
    

    return (
        <div className={styles.whole}>
            <div className={styles.title} id="about"><h1 className={styles.titleHeading}>Our Co-ordinator</h1>
                <div className={styles.underline}></div>
            </div>

{/* switch */}
        <div className={styles.switch}>
            <button onClick={handleCoordinator} className = {coOrdinator ? styles.highlight : ''}>Co-ordinator</button>
            <button onClick={handlePresident} className = {president ? styles.highlight : ''}>President</button>
        </div>

            {
                coOrdinator ? 
                <div className={styles.wrapper}>
                {/* box1 */}
                <div className={styles.box1} data-aos="fade-right">
                    <Typography variant="h4" className={styles.titleBox}>Name: </Typography>
                    <Typography variant="h5" style={{fontWeight: '400'}}>Dr. Nagaraju Devarakonda</Typography>
                    <Typography variant="body1" style={{fontWeight: '300'}}>Associate Professor, School of Computer Science & Engineering, VIT-AP University</Typography>
                </div>

                {/* box2 */}
                <div className={styles.box2} data-aos="fade-left">
                    <Typography variant="h4" className={styles.titleBox}>About: </Typography>
                    <Typography variant="body1" style={{fontWeight: '300'}}>Associate Professor, School of Computer Science & Engineering, VIT-AP University</Typography>
                </div>

                {/* box3 */}
                <div className={styles.box3} data-aos="zoom-in">
                <div className={styles.image}>
                <div className={styles.imageContainer}>
                        <img className={styles.image__img}   src="https://vitap.ac.in/wp-content/uploads/2020/07/devarkonda-copy.jpg" alt="Nagaraju Devarkonda Prof" />
                    </div>
                    <div className={`${styles.image__overlay} ${styles.image__overlay__primary}`}>
                        <div className={styles.image__title}>Dr. Nagaraju Devarakonda </div>
                        {/* <p className={styles.image__description}>
                            Vellore Institute of Technology
                        </p> */}
                    </div>
                </div>
                </div>

                {/* box4 */}
                <div className={styles.box4} data-aos="fade-left">
                    <div className={styles.experienceItems}>
                        <Typography variant="h4" className={styles.titleBox}>PRESENT: </Typography>
                        <Typography variant="h5" style={{fontWeight: '400'}}>Associate Professor</Typography>
                        <Typography variant="body1">VIT-AP University</Typography>
                        <Typography variant="body1">May 2019 - Present · 2 yrs 8 mos</Typography>
                        <Typography variant="h5" style={{fontWeight: '400'}}>Co-ordinator</Typography>
                        <Typography variant="body1">ACM Student Chaper</Typography>
                    </div>                   
                </div>

                {/* box5 */}
                <div className={styles.box5} data-aos="fade-right">
                    <Typography variant="h4" className={styles.titleBox}>Connect:</Typography>
                    <div className={styles.icons}>
                        {/* <div className={styles.images}>
                            <a href="/#"><img src={facebook} alt="" /></a>
                        </div> */}
                        <div className={styles.images}>
                            <a href="https://www.linkedin.com/in/dr-nagaraju-devarakonda-5a635a87/" target="_blank"><img src={linkedin} alt="" /></a>
                        </div>
                        <div className={styles.images}>
                            <a href="https://twitter.com/dnr_anu" target="_blank"><img src={twitter} alt="" /></a>
                        </div>
                    </div>
                </div>

            {/* <div className={styles.box6}>
                <img src={bob} style={{width: '300px'}} alt="bob" />
            </div> */}
            </div> : 
            <div className={styles.wrapper}>
            {/* box1 */}
            <div className={styles.box1} data-aos="fade-right">
                <Typography variant="h4" className={styles.titleBox}>Name: </Typography>
                <Typography variant="h5" style={{fontWeight: '400'}}>C Yagnesh</Typography>
                <Typography variant="body1" style={{fontWeight: '300'}}>President at ACM_VIT-AP University</Typography>
            </div>

            {/* box2 */}
            <div className={styles.box2} data-aos="fade-left">
                <Typography variant="h4" className={styles.titleBox}>About: </Typography>
                <Typography variant="body1" style={{fontWeight: '300'}}>Currently, I am pursuing my UG at VIT_AP in CSE With specialization in AI. I can see how computer technology can be pivotal in handling a human-crisis situation that is where my interest-lies and got inspired to became an AI Engineer, I may be just a cog in the huge universe of technology, but I want to be the cog that makes a better world for all living beings.</Typography>
            </div>

            {/* box3 */}
            <div className={styles.box3} data-aos="zoom-in">
            <div className={styles.image}>
            <div className={styles.imageContainer}>
                    <img className={styles.image__img}  src="https://media-exp1.licdn.com/dms/image/C5603AQH-3vDsIiwGCw/profile-displayphoto-shrink_800_800/0/1641002967570?e=1648080000&v=beta&t=s8mRZf_Rxg5Zy2kS8UbyhIZ9AoMyJmuztuHRKCVk8as" alt="Yagnesh" />
                </div>
                <div className={`${styles.image__overlay} ${styles.image__overlay__primary}`}>
                    <div className={styles.image__title}>C. Yagnesh </div>
                    {/* <p className={styles.image__description}>
                        Vellore Institute of Technology
                    </p> */}
                </div>
            </div>
            </div>

            {/* box4 */}
            <div className={styles.box4} data-aos="fade-left">
                <div className={styles.experienceItems} >
                    <Typography variant="h4" className={styles.titleBox}>Experience: </Typography>
                    <Typography variant="h5" style={{fontWeight: '400'}}>President</Typography>
                    <Typography variant="body1">VIT-AP University</Typography>
                    <Typography variant="body1">Oct 2021 - present . 4 mos</Typography>
                    <Typography variant="body1">Amaravathi, Andhra Pradesh, India</Typography>
                </div>
                <div className={showPoints ? `${styles.points} ${styles.show}` : `${styles.points}`}>
                <div className={styles.experienceItems}>
                    <Typography variant="h5" style={{fontWeight: '400'}}>Director of Treasury</Typography>
                    <Typography variant="body1"></Typography>
                    <Typography variant="body1">Oct 2020 - Oct 2021 . 1 yr 1 mo</Typography>
                    <Typography variant="body1">India</Typography>
                </div>
                {/* <div className={styles.experienceItems}>
                    <Typography variant="h5">Assistant Professor</Typography>
                    <Typography variant="body1">Acharya Nagarjuna University</Typography>
                    <Typography variant="body1">Aug 2008 - Jun 2015 · 6 yrs 11 mos</Typography>
                </div>
                <div className={styles.experienceItems}>
                    <Typography variant="h5">Assistant Professor</Typography>
                    <Typography variant="body1">V. R Siddhartha Engineering College</Typography>
                    <Typography variant="body1">Oct 2005 - Aug 2008 · 2 yrs 11 mos</Typography>
                </div> */}
                </div>
                <button className={styles.join} onClick={handleReadMore}>
                    {
                        showPoints ? <p>Read Less<KeyboardArrowUpIcon style={{fontSize: '15px'}} /></p> : <p>Read More <KeyboardArrowDownIcon style={{fontSize: '15px'}} /></p>
                    }
                </button>
            </div>

            {/* box5 */}
            <div className={styles.box5} data-aos="fade-right">
                <Typography variant="h4" className={styles.titleBox}>Connect:</Typography>
                <div className={styles.icons}>
                    <div className={styles.images}>
                        <a href="yagneshnaidu1234@gmail.com" target="_blank"><img src={mail} alt="mail" /></a>
                    </div>
                    <div className={styles.images}>
                        <a href="https://www.linkedin.com/in/yagnesh-732284g/" target="_blank"><img src={linkedin} alt="Linkdin" /></a>
                    </div>
                    {/* <div className={styles.images}>
                        <a href="/#"><img src={twitter} alt="twitter" /></a>
                    </div> */}
                </div>
            </div>

        {/* <div className={styles.box6}>
            <img src={bob} style={{width: '300px'}} alt="bob" />
        </div> */}
        </div>
            }
            {/* background */}
            <div className={styles.background}></div>
        </div>
    )
}

export default OurCoordinator
