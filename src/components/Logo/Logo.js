import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from '../Logo/Logo.module.css';

const Logo = ( props ) => {
    return (
        <div className={classes.Logo} >
           <img src={burgerLogo} alt="YourBurger"/>
        </div>
    )
}

export default Logo;
