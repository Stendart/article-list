import React from 'react';

import AppNavigation from "../Navigation/AppNavigation";
import './MainLayout.css'

function MainLayout(props) {
    return (
        <>
            <header className="layout">
                <AppNavigation navItems={props.navLinks} classNsme="App-header__nav" />
            </header>
            {props.children}
        </>
    );
}

export default MainLayout;