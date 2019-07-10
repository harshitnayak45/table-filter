import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <div>
               <header>
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to={'/'}>Apartments</Link>
                    </div>
                    <div id="navbar-collapse" className="collapse navbar-collapse">
                       
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                               
                                <ul className="dropdown-menu dropdown-menu-flag" role="menu">
                                    <li>
                                        <Link to={'/'}>
                                            <img src="http://www.country-dialing-codes.net/img/png-country-4x2-flat-res-640x480/gf.png" alt="Français" width="28px" height="18px"/>
                                         
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <Link id="user-profile" to={'/'} className="dropdown-toggle" data-toggle="dropdown"><img src="http://lorempixel.com/100/100/people/9/" className="img-responsive img-thumbnail img-circle"/> Username</Link>
                               
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

            </div>
        );
    }
}

export default Header; 