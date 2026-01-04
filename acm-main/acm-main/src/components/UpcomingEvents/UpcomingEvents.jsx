import React , {useEffect} from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DataTime from '../UEvents/DataTime'
import Aos from 'aos'
import "aos/dist/aos.css"
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';


import styles from './upcoming.module.css'

import { Typography } from '@material-ui/core'

const UpcomingEvents = ({ upcomingEvent }) => {

    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])


    const {id, title, description, image1, image2, date, hours, minutes, seconds, registerLink, points} = upcomingEvent;

    const DatehoursMinSecs = {date: date, hours: hours, minutes: minutes, seconds: seconds}

    return (
        <div className={styles.wrapper}>

            {
                id % 2 !== 0 ?  
                <div className={styles.container}>
            <div className={`${styles.part1} ${styles.borderRight}`} data-aos="fade-right">
                <Typography variant="h3" className={styles.eventTitle}>{title}</Typography>

{
    points.map(point => (
            <div className={styles.pointFlex}>
                <ArrowForwardIosOutlinedIcon className={styles.pointsIcon} /> <Typography variant="body1" className={styles.content}>{point}</Typography>
            </div>
    ))

}
{/* <Typography variant="body1" className={styles.content}>{description}</Typography> */}

                {/* <Typography variant="body1" className={styles.content}>{description}</Typography> */}
                <a href={registerLink} target="_blank"><button className={styles.join}>Register<ArrowForwardIosIcon style={{fontSize: '17px'}} /></button></a> 
            </div>

            {/* part 2 */}
            <div className={styles.part2}>
                <div className={`${styles.image} ${styles.image1}`}>
                    <img src={image1} alt="" />
                </div>
                <div className={`${styles.image} ${styles.image2}`}>
                    <img src={image2} alt="" />
                </div>
                
                <div className={styles.background}></div>
                <div className={styles.timer}>
                    {/* <Typography variant="h4">00 : 00 : 00</Typography> */}
                    <DataTime DatehoursMinSecs={DatehoursMinSecs}/>
                </div>
            </div>
        </div>
                : 
                <div className={styles.container}>

{/* part 2 */}
<div className={styles.part2}>
                <div className={`${styles.image} ${styles.image1}`}>
                    <img src={image1} alt="" />
                </div>
                <div className={`${styles.image} ${styles.image2}`}>
                    <img src={image2} alt="" />
                </div>
                
                <div className={styles.background}></div>
                <div className={styles.timer}>
                    {/* <Typography variant="h4">00 : 00 : 00</Typography> */}
                    <DataTime DatehoursMinSecs={DatehoursMinSecs}/>
                </div>
            </div>

            <div className={`${styles.part1} ${styles.borderLeft}`} data-aos="fade-left">
                <Typography variant="h3" className={styles.eventTitle}>{title}</Typography>

                {
    points.map(point => (
            <div className={styles.pointFlex}>
                <ArrowForwardIosOutlinedIcon className={styles.pointsIcon} /> <Typography variant="body1" className={styles.content}>{point}</Typography>
            </div>
    ))
}
                {/* <Typography variant="body1" className={styles.content}>{description}</Typography> */}
                <a href={registerLink} target="_blank"><button className={styles.join}>Register<ArrowForwardIosIcon style={{fontSize: '17px'}} /></button></a> 
            </div>
        </div>
            }
        
        </div>
    )
}

export default UpcomingEvents