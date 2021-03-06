import React from 'react';
import{ Nav, NavLink, Bars, NavMenu} from './NavBar';
const Navbar = () => {
    return(
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to='/'> Home</NavLink>
                    <NavLink to='/about'> About</NavLink>
                    <NavLink to='/makeinvo'> Make Invoice </NavLink>
                    <NavLink to='/print'> Print Invo</NavLink>
                  
                </NavMenu>
            </Nav>
        </>

    );
};
export default Navbar;