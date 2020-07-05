import React from 'react';
import classes from '../NavigationItems/NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = ( props ) => {
    return (
        <div>
         <ul className={classes.NavigationItems}>
             <NavigationItem link="/" active>Burger Builder</NavigationItem>
             <NavigationItem link="/" active>Checkout</NavigationItem>
         </ul>   
        </div>
    )
}

export default NavigationItems;
