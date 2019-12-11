import React from 'react';
import {NavLink} from "react-router-dom";
import style from './AdmSidebar.module.css';
import IconProfile from "./Icons/IconProfile";
import IconCompanies from "./Icons/IconCompanies";
import IconMeets from "./Icons/IconMeets";
import IconChat from "./Icons/IconChat";
import IconLogout from "./Icons/IconLogout";
import logo from './../../../img/logotype.png';
import IconDashboard from "./Icons/IconDashboard";

const AdmSidebar = (props) => {
    return(
        <div className={style.sidebar}>
            <div className={style.logoContainer}>
                <h1 className={style.title}>ADM Panel</h1>
            </div>
            <div className={style.langSwitcherContainer}>

            </div>
            <nav>
                <ul className={style.menu}>
                    <li>
                        <NavLink to={'/dashboard'} activeClassName={style.active}> <IconDashboard/> Dashboard </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/settings'} activeClassName={style.active}> <IconProfile/> Main Settings </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/notify-create'} activeClassName={style.active}> <IconChat /> Notifications </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/chat'} activeClassName={style.active}> <IconChat /> Chat </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/all-companies'} activeClassName={style.active}> <IconCompanies/> All companies </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/all-meets'} activeClassName={style.active}> <IconMeets /> Meets </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/import-data'} activeClassName={style.active}> <IconCompanies/> Import </NavLink>
                    </li>
                    <li>
                        <span onClick={ () => props.logout() }> <IconLogout/> Logout</span>
                    </li>
                </ul>
            </nav>
            <footer>
                <p>Matchmaking © 2019. All rights reserved. </p>
            </footer>
        </div>
    )
};

export default AdmSidebar;