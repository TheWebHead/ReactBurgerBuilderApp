import React from 'react';
import Logo from '../../../Logo/Logo';
import NavigationItems from '../NavigationItems';
import classes from '../SideDrawer/SideDrawer.module.css';

const SideDrawer = ( props ) => {
    //... conditionally attach CSS classes

    return (
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
            <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
}

export default SideDrawer;
