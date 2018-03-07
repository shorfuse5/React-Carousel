import React, { Component } from 'react';
import Swipe from 'react-easy-swipe';

import Slide from './Slide';
import RightArrow from '../RightArrow/RightArrow';
import LeftArrow from '../LeftArrow/LeftArrow';

import './Slider.css';

export default class Slider extends Component {
    constructor(props){
        super(props);

        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
    }

    nextSlide() {
        this.props.nextSlide()
    }

    prevSlide() {
        this.props.prevSlide()
    }

    renderMembers = (member, index) => {
        const { image, name, title, bio, quote, facts } = member;
        return (
            <Slide index={index} image={image} name={name} title={title} bio={bio} quote={quote} funFacts={facts}/>
        )
    }

    render() {

        const teamMembers = this.props.team.map(this.renderMembers);

        return (
            <div className="slider">
                <Swipe className="slide" onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
                    {teamMembers[this.props.sliderNumber]}
                </Swipe>
                <LeftArrow className="left-arrow" prevSlide={this.prevSlide} />
                <RightArrow className="right-arrow" nextSlide={this.nextSlide} />
                
            </div>
        )
    }
}