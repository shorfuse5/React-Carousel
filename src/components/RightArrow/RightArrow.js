import React from 'react';

import NextArrow from '../../assets/img/next-arrow-stroke.svg';

const RightArrow = (props) => {
    const pointer = {
        cursor: 'pointer',
    }
    return (
        <aside className="aside next-tribe-conatiner" >
            <img style={pointer} src={NextArrow} alt="" onClick={props.nextSlide}/>
            <p className="text-highlight">Moving on...</p>
        </aside>
    )
}

export default RightArrow;