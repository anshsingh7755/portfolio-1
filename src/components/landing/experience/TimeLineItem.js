import React from 'react';
import './TimeLine.scss';

const TimeLineItem = (props) => {
    return (
        <div className="timeline-item" data-aos={"fade-" + props.position} data-aos-duration="1000" data-aos-offset="-300">
            <div className={"timeline-icon school " + props.experience.indicator}>
                <i className={props.experience.icon}></i>
            </div>
            <div className={"timeline-content block-text " + props.position}>
                <div className="off-box"></div>
                <h5>{props.experience.place}<span>{props.experience.dates}</span></h5>
                <p>{props.experience.info}</p>
            </div>
        </div>
    );
}

export default TimeLineItem;