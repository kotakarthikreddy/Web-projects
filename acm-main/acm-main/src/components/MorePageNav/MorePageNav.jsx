import React, {useState} from 'react'
import styles from './moreNav.module.css'
import Acmlogo from '../../svgs/Acmlogo.png'

const MorePageNav = () => {

    // const [showBurger, setShowBurger] = useState(false);
    const [showTimes, setShowTimes] = useState(false);
    const [showUl, setShowUl] = useState(false);

    const [upcomingEvents, setUpcomingEvents] = useState(true);
    const [faq, setFaq] = useState(false);
    const [contact, setContact] = useState(false);

    const handleBurger = () => {
        setShowUl(!showUl)
        setShowTimes(true)
    }

    const handleTimes = () => {
        setShowTimes(false);
        setShowUl(!showUl)
    }

    const handelEvents = () => {
        setUpcomingEvents(true)
        setFaq(false)
        setContact(false)
    }
    const handleFaq = () => {
        setUpcomingEvents(false)
        setFaq(true)
        setContact(false)
    }
    const handleContact = () => {
        setUpcomingEvents(false)
        setFaq(false)
        setContact(true)
    }
    

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <div className={styles.logoImage}>
                    <a href="/"><img src={Acmlogo} alt="Acm Logo" /></a>
                </div>
                <div className={styles.text_typing}>
                    <h2>ACM VIT-AP</h2>
                    <h4 style={{marginTop: '5px'}} className={styles.sarada}>Student Chapter</h4>
                </div>

            </div>

            {/* part2 */}
            <ul className={showUl ? styles.show : ''}>
                <li><a href="#upcomingEvents" className={upcomingEvents ? styles.active : ""} onClick={handelEvents}> &nbsp;Upcoming Events</a></li>
                <li><a href="https://women.acmvitap.in/" target="_blank" onClick={handelEvents}> &nbsp;ACM-W</a></li>
                <li><a href="https://jobs.acm.org/" target="_blank" onClick={handelEvents}> &nbsp;Career</a></li>
                <li><a href="https://dl.acm.org/"  target="_blank" onClick={handelEvents}> &nbsp;Library</a></li>
                <li><a href="#faq" className={faq ? styles.active : ""} onClick={handleFaq}> &nbsp;FAQ</a></li>
                <li><a href="#contactUs" className={contact ? styles.active : ""} onClick={handleContact}> &nbsp;Contact Us</a></li>
            </ul>
                <button className={showTimes ? styles.times : `${styles.times} ${styles.show}`} onClick={handleBurger}><i className="fas fa-bars"></i></button>
                <button className={showTimes ? `${styles.times} ${styles.show}` : styles.times} onClick={handleTimes}><i class="fas fa-times"></i></button>   
        </nav>
    )
}

export default MorePageNav
