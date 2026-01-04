import React, {useEffect} from 'react';
import './timeline.css';
import timelineData from './TimelineData'
import TimelineItem from './TimelineItem'
// import { Typography } from '@material-ui/core';


const Timeline = () =>
timelineData.length > 0 && (
    <div>
        <div className="title" id="eventsTimeLine"><h1 className="titleHeadingg">Events Timeline</h1>
                <div className="underline"></div>
            </div>
    <div className="timeline-container">
        {timelineData.map((data, idx) => (
            <TimelineItem data={data} key={idx} />
        ))}
    </div>
    </div>
);

export default Timeline;