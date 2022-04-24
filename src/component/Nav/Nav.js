import React from 'react';
import './Nav.scss';
import team_icon from '../../img/team.svg';
import file_icon from '../../img/file.svg';
import dollar_icon from '../../img/dollar.svg';
import { NavLink } from 'react-router-dom';
export default function Nav() {
    const navs = [
        {
            name: 'Overview',
            icon: '',
            link: 'overview'
        },
        {
            name: 'Clients',
            icon: team_icon,
            link: 'clients'
        },
        {
            name: 'Products & Services',
            icon: file_icon,
            link: '/'
        },
        {
            name: 'Invoices',
            icon: dollar_icon,
            link: 'invoices'
        },
    ];
    return (
        <div className='nav'>
            <ul>
                {navs.map((nav, index) => {
                    return (
                        <li key={index}>
                            <NavLink to={nav.link}>
                                {(nav.icon) && <img src={nav.icon} alt="icon" />}
                                {nav.name}
                            </NavLink>

                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
