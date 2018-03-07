import React from 'react';

import PrevArrow from '../../assets/img/prev-arrow-stroke.svg';

const LeftArrow = (props) => {
    const pointer = {
        cursor: 'pointer',
    }
    return (
        <aside className="aside prev-tribe-conatiner" >
            <img style={pointer} src={PrevArrow} alt="" onClick={props.prevSlide}/>
            <p className="text-highlight">He was interesting...</p>
        </aside>
    )
}

export default LeftArrow;