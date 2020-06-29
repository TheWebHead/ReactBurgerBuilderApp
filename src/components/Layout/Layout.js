import React from 'react'
import Aux from '../../hoc/Aux';

const layout = ( props ) => {
    return (
        <Aux>
            <div> Toolbar, SideDrawer, Backdrop
            <main>
                {props.children}
            </main> 
            </div>
        </Aux>
    )
}

export default layout;
