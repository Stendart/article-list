import React from "react";
import {NavLink} from 'react-router-dom';

import './AppNavigation.css'

const AppNavigation = props => {
    return (
        <nav className={`${props.className || ''} nav`}>
            <div className="nav__wrap">
                <ul className="nav__list">
                    {props.navItems.map(item => (
                        <li className="nav__item" key={item.href}>
                            <NavLink exact className="nav__link" to={item.href}>
                                {item.text}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default AppNavigation