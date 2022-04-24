import './Button.scss';
import React from 'react';

export default function Button(props) {
    const { text, Bgcolor, icon, position, color } = props;
    if (position === "left") {
        return (
            <button className="button" style={{ backgroundColor: Bgcolor, color: color }}>

                <img src={icon} alt="icon" className="button__img" />

                <span className="button__text">
                    {text}
                </span>

            </button>
        )
    }
    if (position === "right") {
        return (
            <button className="button" style={{ backgroundColor: Bgcolor, color: color }}>


                <span className="button__text">
                    {text}
                </span>

                <img src={icon} alt="icon" className="button__img" />

            </button>
        )
    }

}
