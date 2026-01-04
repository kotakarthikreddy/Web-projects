import React, {useEffect} from 'react';
import './timeline.css';
import Aos from 'aos'
import "aos/dist/aos.css"

const TimelineItem = ({ data }) => {
useEffect(() => {
    Aos.init({
        duration: 2000
    })
}, [])  


    return (
    <div className="timeline-item" data-aos = {
         data.id % 2 !== 0 ? "fade-left" : "fade-right"
    }>
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <time>{data.date}</time>
            <p>{data.text}</p>
            {data.link && (
                <a
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.link.text}
                </a>
            )}
            <span className="circle" />
        </div>
    </div>
    )
};

export default TimelineItem