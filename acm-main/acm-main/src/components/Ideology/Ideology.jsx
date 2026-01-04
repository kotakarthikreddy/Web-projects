import { Typography } from '@material-ui/core'
import React, {useEffect} from 'react'
import './ideology.css'
import technologyImage from '../../svgs/technology.png'
// import excellenceImage from '../../svgs/excellence.png'
import spritImage from '../../svgs/sprit.png'
// import ethicalImage from '../../svgs/ethical.png'
import excel from '../../svgs/excel.png'
import computing from '../../svgs/computing.png'

import Aos from 'aos'
import "aos/dist/aos.css"

const Ideology = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])


    return (
        <div>
            <div className="ideologyTitle" id="ideology">
                <h1 className="titleHeadingg">Our Ideology</h1>
                <div className="ideologyUnderLink"></div>
            </div>
            <div class="ideologyWrapper">
            <div class="ideologycontainer">
                <div class="box box-cyan box-push">
                    <Typography variant="h4" className="ideoTI" style={{fontWeight: '300'}}>Excellence</Typography >
                    <Typography variant="body1" className="desc">To bring technical excellence among students</Typography >
                    <img src={excel} alt="Excellence Image" />
                </div>

                <div class="box box-red" data-aos="fade-down">
                    <Typography variant="h4" className="ideoTI" style={{fontWeight: '300'}}>Technology</Typography >
                    <Typography variant="body1" className="desc">
                        Improve education and advancement in Technology
                    </Typography >
                    <img src={technologyImage} alt="Technology Image" />
                </div>

                <div class="box box-blue box-push">
                    <Typography variant="h4" className="ideoTI" style={{fontWeight: '300'}}>Ethical Computing</Typography >
                    <Typography variant="body1" className="desc">Promoting ethical computing to make positive impact</Typography >
                    <img src={computing} alt="supervisor" />
                </div>

                <div class="box box-orange" data-aos="fade-up">
                    <Typography variant="h4" className="ideoTI" style={{fontWeight: '300'}}>Competative Spirit</Typography >
                    <Typography variant="body1" className="desc">Diversity with pears and enhance healty competative spirit</Typography >
                    <img src={spritImage} alt="sprit image" />
                </div>
		</div>
        </div>
        </div>
    )
}

export default Ideology
