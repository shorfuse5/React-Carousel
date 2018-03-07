import React, { Component } from 'react';
import './Avatar.css';

export default class Avatar extends Component {

    handleClick = (e) => () => {
        this.props.setSliderCount(e);
    }

    render() {
        const { index, image } = this.props;

        return (
            <div
                className="avatar"
                key={index}
                itemScope
                itemType="http://schema.org/Person"
                onClick={this.handleClick(index)}
            >
                <img
                    className="avatar__image"
                    src={image}
                    alt=""
                />
            </div>
        )
    }
}
