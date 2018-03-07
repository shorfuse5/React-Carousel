import React, { Component } from 'react';

import tribeSvg from '../../assets/img/individual-tribe.svg';
import './Slide.css';

export default class Slide extends Component {

    renderFacts(facts) {
        const factsList = facts.map((fact, i) => {
            return (
                <li key={i} className="factsListItem">{fact}</li>
            )
        });
        return factsList
    }

    render() {
        const { image, name, title, bio, quote, funFacts, index } = this.props;
        return (
            <div className="slide" key={index}>
                <div className="individual-member-container">
                        <div className="member-title-container">
                            <img className="tribe-svg" src={tribeSvg} alt=""/>
                            <h2 className="headline"> {name}, <span className="text-highlight">{title}</span></h2>
                        </div>

                        <div className="member-description-container">
                            <img className="member-photo" src={image} alt=""/>
                            <div className="description">
                                <p >{bio}</p>
                                <blockquote className="subheading"><span className="text-highlight">"</span>{quote}<span className="text-highlight">"</span></blockquote>
                                <ul className="member-description-list">
                                    {this.renderFacts(funFacts)}
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
} 