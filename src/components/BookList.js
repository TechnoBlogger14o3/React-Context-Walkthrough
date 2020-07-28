import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
    state = {  }
    static contextType = ThemeContext;
    render() { 
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return ( 
            <div className='book-list' style = {{ color: theme.syntax, background: theme.bg}}>
                <ul>
                    <li style = {{background: theme.ui}}>A Walk to Remember</li>
                    <li style = {{background: theme.ui}}> Angels and Demons</li>
                    <li style = {{background: theme.ui}}>The DaVinci Code</li>
                </ul>
            </div>
         );
    }
}
 
export default BookList;