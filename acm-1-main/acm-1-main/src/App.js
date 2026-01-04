import React  from 'react'
import './components/index.css'
import Profile from './components/Profile/Profile'
import './components/index.css'
import About from './components/About/About'
import Ideology from './components/Ideology/Ideology'
import Faq from './components/Faq/Faq'
import ContactForm from './components/ContactForm/ContactForm'
import Events from './components/Events/Events'
import {Typography} from '@material-ui/core'
// import MainSection from './components/MainSection/MainSection'
import OurCoordinator from './components/OurCoordinator/OurCoordinator'
import Social from './components/Social/Social'
import ImageCarousel from './components/ImageCarousel/ImageCarousel'

import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';


// Nav
import faqData from './components/Faq/faqData'
// import techData from './components/Profile/TechData'
// import markData from './components/Profile/MarketData'
import admin from './components/Profile/Admin'
import lead from './components/Profile/lead'
import developedBy from './components/Profile/developedBy'
import managingBy from './components/Profile/managingBy'

// time line
import Timeline from './components/Timeline/Timeline'
import Footer from './components/Footer/Footer'
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents'
import MainPage from './components/MainPage/MainPage'
import Navigation from './components/Navigation/Navigation'
import MorePageNav from './components/MorePageNav/MorePageNav'
import NewsLetter from './components/NewsLetter/NewsLetter'
import e41 from './components/UpcomingEventsImages/e41.jpeg'
import e42 from './components/UpcomingEventsImages/e42.jpeg'
import e5 from './components/UpcomingEventsImages/e5.jpeg'
import e52 from './components/UpcomingEventsImages/e52.jpeg'

import eventImage1 from './components/UpcomingEventsImages/eventImage1.jpg'
import eventImage2 from './components/UpcomingEventsImages/eventImage2.jpg'

const upcomingEvent1 = {
        id: 1, 
        title: "ACM_TechTalks Series 4",
        description: "TechToday series primarily aims for spreading the information that can aid in obtaining proficiency in numerous fields of technology. ",
        points: [
            "Name of the speaker: Latha T K",
            "Topic: Data Science ( Market Basket Analysis)",
            "This is completely about how business people come up with the right combination of products for discount or one plus one offer etc...",
            "Join Us, this is definitely going to interesting Webinar "
        ],
        image1: e41,
        image2: e42,
        registerLink: 'https://forms.gle/i5cmSrozCFEfgxDV6',
        date: 21,
        hours: 23, 
        minutes: 59,
        seconds: 59
    }
    const upcomingEvent2 = {
        id: 2, 
        title: "Front-End series",
        description: "In collaboration with ACM (VIT-AP) and Android Club (VIT-AP) ",
        points: [
            "In collaboration with ACM (VIT-AP) and Android Club (VIT-AP) ",
            "Day 1 : HTML & CSS ( 20th feb)",
            "Day 2 : JAVA SCRIPT ( 21st feb)",
            ],
        image1: e5,
        image2: e52,
        registerLink: 'https://docs.google.com/forms/d/1ysa9lvD3XRIZ8fAPHlMZbdo9zAag89YF6DRQPYUnkDE/edit?ts=620ba55b',
        date: 21,
        hours: 23, 
        minutes: 59,
        seconds: 59
    }
    const upcomingEvent3 = {
        id: 3, 
        title: "APPRENTICESHIP",
        description: "Hey coders ACM is back with an other event in collaboration with machine learning club. ",
        points: [
            "Our upcoming event APPRENTICESHIP highlights about the salient importance of internships and proper guidance for the engineering students.  Mr.Taufique Ahmad who is our next knowledge hour speaker,is the co founder and coo at SKOLAR who has strong business development professional skilled in managment, communication and many more              ",
            "Having real life work exposure counts a lot in today's competitive era as it fostures personal and professional development.Internships helps us in imbibing professional aptitude,broadens the spectrum,widens the horizon of our theoritical knowledge.Join now, to listen about the proper guidance, cracking a internship from an industry expert.",
            "What are you waiting for. Hop up the link given below to register before the time ticks off.",
            ],
        image1: eventImage1,
        image2: eventImage2,
        registerLink: 'https://forms.gle/teFycTmcQhFc65F36',
        date: 21,
        hours: 23, 
        minutes: 59,
        seconds: 59
    }
    

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                <Route path="/" element={[<Navigation />,<MainPage />, <ImageCarousel />, <About />, <OurCoordinator />, <Ideology />,
                <div className="title" id="events"><Typography variant="h2">Events</Typography>
                <div className="underline"></div>
            </div>,
                <Events />, 
                // <EventsNew />,
                <div className="title" id="profile"><Typography variant="h2">Our Crew</Typography>
                    <div className="underline"></div>
                    <Typography variant="h6" className="tag">Click on the profile for more info</Typography>
                </div>, 
            // <Profile data={techData} title={'Technical Department'} />,
            // <Profile data={markData} title={'Marketing Department'}/>, 
            <Profile data={admin} title={'Admins'} />,
            <Profile data={lead} title={'Leads'} />,
            <Profile data={developedBy} title={'Developed By'} />,
            <Profile data={managingBy} title={'Managed By'} />,
            <Social /> , <Footer />]} />
            {/* more */}
                    <Route path='/more' element={[<MorePageNav />, <NewsLetter />, <Timeline  />,
                    <div className="title" id="upcomingEvents"><h1 className="upcomingheadingTitle">Upcoming Events</h1>
                        <div className="underline"></div>
                    </div>,
                    <UpcomingEvents upcomingEvent = {upcomingEvent1} />,
                    <UpcomingEvents upcomingEvent = {upcomingEvent2} />,
                    <UpcomingEvents upcomingEvent = {upcomingEvent3} />,
                    <Faq faq={faqData}/>, <ContactForm />, <Footer />]} />
                </Routes>
            </Router>
        </div>

    )
}

export default App

// onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}

// https://dev.to/germavinsmoke/how-to-create-a-page-load-animated-loader-in-react-3cen