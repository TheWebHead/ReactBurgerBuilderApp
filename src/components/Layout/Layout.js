import React from 'react'
import Aux from '../../hoc/Aux';
import classes from '../Layout/Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/NavigationItems/SideDrawer/SideDrawer';

const layout = ( props ) => {
    return (
        <Aux>
         <Toolbar />
         <SideDrawer /> 
         Backdrop
           
            <main className={classes.Content}>
                {props.children}
            </main> 
           
        </Aux>
    )
}

export default layout;
