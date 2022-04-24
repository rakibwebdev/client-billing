import React from 'react';
import Button from '../Button/Button';
import plus_icon from '../../img/plus.svg';
import external_icon from '../../img/external.svg';
import './HeaderTop.scss';
export default function HeaderTop() {
    return (
        <div className="header-top">
            <div className="header-top__left">
                <h1>Client Billing</h1>
            </div>
            <div className="header-top__right">
                <Button text="Bill Client" Bgcolor="#286EF1" color="#fff" icon={plus_icon} position="left" />
                <Button text="Docs" Bgcolor="transparent" color="#000000" icon={external_icon} position="right" />
            </div>
        </div>
    )
}