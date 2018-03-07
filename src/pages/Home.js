import React, { Component } from 'react';

import TribeContentContainer from '../components/TribeContent/TribeContentContainer';
import SliderContainer from '../components/Slider/SliderContainer';

export default class Home extends Component {

    render() {
        return (
            <div className="page">
                <SliderContainer />
                <TribeContentContainer />
            </div>
        );
    }
}
