import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {navItems} from '../components/Linkst';

//const nav = ['home', 'about', 'favourites' ,'watchlater' ];

class Nav extends Component {
    
    
    state = { clicked: false}
    
        handleClick = () => {
            this.setState({ clicked: !this.state.clicked })
        }
        render(){
            return(
                <nav>
                    <div className="nav-links">
                        {navItems.map((item, index) => {
                            return(
                                <form key={index}>
                                    <NavLink className={item.cName} to={item.url}>
                                        {item.title}
                                    </NavLink>
                                </form>          
                            )
                        })}
                    </div>
                </nav>
            )
        }
    
    }
    
export default Nav;