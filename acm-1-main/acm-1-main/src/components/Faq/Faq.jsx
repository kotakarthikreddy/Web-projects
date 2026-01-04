import React, {useEffect} from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './faq.module.css'
import Aos from 'aos'
import "aos/dist/aos.css"

const Faq = ({faq}) => {

    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])


    return (
        <div>
            <div className="title" id="faq"><Typography variant="h2">FAQ</Typography>
                <div className="underline"></div>
            </div>
        <div className={styles.container} id="faq">
            <h2 style={{color: 'rgba(255,255,255,0.6)', textAlign: 'center', paddingBottom: '40px'}}>Here are a few answers to our most common questions</h2>
            {
                faq.map((faq) => (
        <div className={styles.wrapper} data-aos="fade-left">
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    {faq.answer}
                </Typography>
            </AccordionDetails>
        </Accordion><br />
        </div>
                ))
            }
        </div>
        </div>
    )
}

export default Faq
