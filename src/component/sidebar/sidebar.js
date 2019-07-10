import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
class SideBar extends Component {
    render() {
        return (
            <div>
                <div id="sidebar-wrapper">
            <aside id="sidebar">
                <ul id="sidemenu" className="sidebar-nav">
                    <li>
                    <Link to={'/'}>
                    <span className="sidebar-title" to={'/'}>Apartments</span>
                    <span className="sidebar-icon"><i className="fa fa-home" aria-hidden="true"></i></span>
                    </Link>
                       
                    </li>
                    <li>
                    <Link to={'/'}>
                    <span className="sidebar-title" to={'/'}>Test</span>
                    <span className="sidebar-icon"><i className="fa fa-database" aria-hidden="true"></i></span>
                    </Link>
                       
                    </li>
                  
                </ul>
            </aside>            
        </div>
            </div>
        );
    }
}

export default SideBar; 