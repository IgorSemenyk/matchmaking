import React from 'react';
import {NavLink} from "react-router-dom";
import style from './Sidebar.module.css';
import IconProfile from "./Icons/IconProfile";
import IconCompanies from "./Icons/IconCompanies";
import IconMeets from "./Icons/IconMeets";
import IconChat from "./Icons/IconChat";
import IconLogout from "./Icons/IconLogout";
const Sidebar = () => {
    return(
        <div className={style.sidebar}>
            <nav>
                <ul className={style.menu}>
                    <li>
                        <NavLink to={'/profile'} activeClassName={style.active}> <IconProfile/> Profile </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/companies'} activeClassName={style.active}> <IconCompanies/> Companies </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/meets'} activeClassName={style.active}> <IconMeets /> Meets </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/chat'} activeClassName={style.active}> <IconChat /> Chat </NavLink>
                    </li>
                    <li>
                        <a href=""> <IconLogout/> Logout</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default Sidebar;