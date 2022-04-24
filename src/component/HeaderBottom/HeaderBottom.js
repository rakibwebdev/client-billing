import React from 'react';
import Button from '../Button/Button';
import './HeaderBottom.scss';
import setting_icon from '../../img/setting.svg';
import Nav from '../Nav/Nav';
export default function HeaderBottom() {
    return (
        <div className='header-bottom'>
            <div className="header-bottom__left">
                <Nav />
            </div>
            <div className="header-bottom__right">
                <Button text="Configure" Bgcolor="transparent" color="#555555" icon={setting_icon} position="left" />
            </div>
        </div>
    )
}
