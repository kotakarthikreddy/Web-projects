import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import styles from './nav.module.css'
import Acmlogo from '../../svgs/Acmlogo.png'

const Navigation = () => {

    // const [showBurger, setShowBurger] = useState(false);
    const [showTimes, setShowTimes] = useState(false);
    const [showUl, setShowUl] = useState(false);

    const [home, setHome] = useState(true);
    const [about, setAbout] = useState(false);
    const [ideology, setIdeology] = useState(false);
    const [events, setEvents] = useState(false);
    const [crew, setCrew] = useState(false);

    const handleBurger = () => {
        // setShowBurger(false);
        // setShowTimes(true)
        setShowUl(!showUl)
        setShowTimes(true)
    }

    const handleTimes = () => {
        // setShowBurger(true);
        setShowTimes(false);
        // setShowUl(false)
        setShowUl(!showUl)
    }

    const handleHome = () => {
        setHome(true);
        setAbout(false)
        setIdeology(false)
        setEvents(false)
        setCrew(false)
        setShowUl(false)
        setShowTimes(false);
    }
    const handleAbout = () => {
        setHome(false);
        setAbout(true)
        setIdeology(false)
        setEvents(false)
        setCrew(false)
        setShowUl(false)
        setShowTimes(false);
    }
    const handleIdeology = () => {
        setHome(false);
        setAbout(false)
        setIdeology(true)
        setEvents(false)
        setCrew(false)
        setShowUl(false)
        setShowTimes(false);
    }
    const handleEvents = () => {
        setHome(false);
        setAbout(false)
        setIdeology(false)
        setEvents(true)
        setCrew(false)
        setShowUl(false)
        setShowTimes(false);
    }
    const handleCrew = () => {
        setHome(false);
        setAbout(false)
        setIdeology(false)
        setEvents(false)
        setCrew(true)
        setShowUl(false)
        setShowTimes(false);
    }

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <div className={styles.logoImage}>
                    <a href="#"><img src={Acmlogo} alt="Acm Logo" /></a>
                </div>
                <div className={styles.text_typing}>
                    <h2>ACM VIT-AP</h2>
                    <h4 style={{marginTop: '5px'}} className={styles.sarada}>Student Chapter</h4>
                </div>

            </div>

            {/* part2 */}
            <ul className={showUl ? styles.show : ''}>
                <li><a href="/#" className={home ? styles.active : ""} onClick={handleHome}> &nbsp;Home</a></li>
                <li><a href="#about" className={about ? styles.active : ""} onClick={handleAbout}> &nbsp;About</a></li>
                <li><a href="#ideology" className={ideology ? styles.active : ""} onClick={handleIdeology}> &nbsp;Our Ideology</a></li>
                <li><a href="#events" className={events ? styles.active : ""} onClick={handleEvents}> &nbsp;Events</a></li>
                <li><a href="#profile" className={crew ? styles.active : ""} onClick={handleCrew} > &nbsp;Our Crew</a></li>
                <li className={styles.more}><Link className={styles.moreLink} to='/more' ><p style={{color: 'black', fontStyle: 'uppercase'}}>More</p></Link></li>
            </ul>
                {/* <button className={showBurger ? `${styles.burger} ${styles.show}` : styles.burger} onClick={handleBurger}><i class="fas fa-bars"></i></button> */}
                <button className={showTimes ? styles.times : `${styles.times} ${styles.show}`} onClick={handleBurger}><i className="fas fa-bars"></i></button>
                <button className={showTimes ? `${styles.times} ${styles.show}` : styles.times} onClick={handleTimes}><i class="fas fa-times"></i></button>   
        </nav>
    )
}

export default Navigation
