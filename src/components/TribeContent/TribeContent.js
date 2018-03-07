import React, { Component } from 'react';

import Avatar from '../Avatar/Avatar';
import Tribe from '../../assets/img/tribe.svg';
import './TribeContent.css';

export default class TribeContent extends Component {

    renderTeam = (member, index) => {
        const { image } = member;
        return (
            <div className="grid__item one-half md--one-fifth sm--one-third">
                <Avatar index={index} image={image} setSliderCount={this.props.setSliderCount}/>
            </div>
        )
    }
    
    render() {

        const team = this.props.team.map(this.renderTeam);

        return (
            <div className="grid-container">
           
                <div className="grid tribe-photos">
                    <div className="tribe-grid">
                        <h2 className="headline">The RedBrain <span className="text-highlight">tribe</span></h2>
                        <div className="tribe__img">
                            <img alt="" className="tribe-image" src={Tribe} />
                        </div>
                    </div>
                    {team}
                </div>
                
            </div>
        )
    }
}
