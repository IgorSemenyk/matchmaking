import React from 'react';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/profile'} activeClassName={'active'}> Profile </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/companies'} activeClassName={'active'}> Companies </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/meets'} activeClassName={'active'}> Meets </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/chat'} activeClassName={'active'}> Chat </NavLink>
                    </li>
                    <li>
                        <a href="">Logout</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default Sidebar;