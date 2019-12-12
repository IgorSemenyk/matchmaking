import React from 'react';
import {NavLink} from "react-router-dom";
import style from './Sidebar.module.css';
import IconProfile from "./Icons/IconProfile";
import IconCompanies from "./Icons/IconCompanies";
import IconMeets from "./Icons/IconMeets";
import IconChat from "./Icons/IconChat";
import IconLogout from "./Icons/IconLogout";
import logo from './../../../img/logotype.png';
import IconLang from "./Icons/IconLang";
import IconDashboard from "./Icons/IconDashboard";

const Sidebar = (props) => {
    return(
        <div className={style.sidebar}>
            <div className={style.logoContainer}>
                <img src={logo} alt=""/>
            </div>
            <div className={style.langSwitcherContainer}>
                <div>
                    <span className={style.active}>RU</span>
                </div>
                <div className={style.langSwitcherIcon}> <IconLang/> </div>
                <div>
                    <span>UKR</span>
                </div>
            </div>
            <nav>
                <ul className={style.menu}>
                    <li>
                        <NavLink to={'/dashboard'} activeClassName={style.active}> <IconDashboard/> Dashboard </NavLink>
                    </li>
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
                        <span onClick={ () => props.logout() }> <IconLogout/> Logout</span>
                    </li>
                </ul>
            </nav>
            <div className={style.consultations}>
                <div><b>Ned help?</b></div>
                <div>Peter Jackson</div>
                <div>admin@matchmaking.com</div>
                <div>+380 (99) 999 99 99</div>
                <div><a href="">Start online chat!</a></div>
            </div>
            <footer>
                <p>Matchmaking © 2019. All rights reserved. </p>
            </footer>
        </div>
    )
};

export default Sidebar;