import { TextField } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import styles from './contactForm.module.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Aos from 'aos'
import "aos/dist/aos.css"
// import { Typography } from '@material-ui/core';
import axios from 'axios'
import acmLogo from '../ContactForm/acmLogo.png';
const ContactForm = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])

    const [name, setName] = useState('')
    const [email, setMail] = useState('')
    const [message, setMessage] = useState('')

    const [error, setError] = useState(false);
    const [msg, setMsg] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()

        const pattern = '/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/'
        // || !pattern.match(email)
        if(name.length === 0 || email.length === 0 || message.length === 0 ) {
            setError(true)
            setMsg(false)
            return;
        } else {
            setError(false)
            // http://localhost:3001/
            // https://acmcontact.herokuapp.com/
        axios.post('https://acmvitap.herokuapp.com/', {
            name: name,email: email, message: message
        })
        .then(res => {
            console.log(res)
            // setMsg(res.data.)
            if(res.data.message === 'success') {
                setMsg(true);
            } else {
                setMsg(false);
            }
        })
        .catch(err => {
            console.log(err)
        })
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className="title" id="contactUs"><h1 className={styles.titleHeading}>Contact Form</h1>
                <div className="underline"></div>
            </div>
        <div className={styles.container}>
            <div className={styles.background}>
            {
            error ? (
            <h3 className={styles.error}>Please fill the Form...</h3> 
             ) : 
             ''
        }

        {
            msg ? (
                <h3 className={styles.success}>Sent Successfully!!!</h3>
            ) : ''
        }
            </div>

            <div className={styles.contactContainer} > {/* display: flex */}
                <form onSubmit={(e) => handleSubmit(e)} className={styles.textFieldsContainer} data-aos="fade-right">
                    <h1>Get in Touch</h1>
                    <h4 style={{color: 'rgb(141, 141, 141)'}}>We're open to any suggestions or simply have a chat</h4>

                    <TextField variant="outlined" label="Name: " fullWidth onChange={(e) => setName(e.target.value)}></TextField>
                    <TextField variant="outlined" label="Mail: " fullWidth onChange={(e) => setMail(e.target.value)}></TextField>
                    <TextField
                        variant="outlined" label="Message"
                        multiline
                        minRows={3}
                        maxRows={4}
                     onChange={(e) => setMessage(e.target.value)}/>

                    <button className={styles.button}>Send</button>
                </form>

                {/* infoContainer */}
                <div className={styles.infoContainer} data-aos="fade-left">
                    <h1>Contact Information</h1>

                    <div className={styles.contentImag}>
                        <img className={styles.imageLogo} src={acmLogo} alt="acm Logo" />
                    </div>
                    <div className={styles.content}>
                        <EmailIcon />
                        <p> &nbsp;acm.studentchapter@vitap.ac.in</p>
                    </div>
                    <div className={styles.content}>
                        <LocationOnIcon />
                        <p>Vellore Institute of Technology, Amaravathi</p>
                    </div>
                    {/* <div className={styles.content}>
                        <PhoneIcon />
                        <p>+91 8392930023</p>
                    </div> */}

                    {/* <div className={styles.icons}>
                        <a href="#" style={{color: 'blue'}}><i className="fab fa-facebook"></i></a>
                        <a href="#" style={{color: 'red'}}><i className="fab fa-instagram"></i></a>
                        <a href="#" style={{color: 'blue'}}><i className="fab fa-linkedin-in"></i></a>
                    </div> */}
                </div>
            </div>
        </div>
        </div>
    )
}

export default ContactForm
