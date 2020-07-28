import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
    static contextType = ThemeContext;
    render() { 
    console.log(this.context);
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark
        return ( 
            <nav style ={{ background: theme.ui, color: theme}}>
                <h1>Context App</h1>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
         );
    }
}
 
export default Navbar;