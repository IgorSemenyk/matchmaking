import React from 'react';
import style from './Dashboard.module.css';
import logo from './../../../../img/logotype.png';

const Dashboard = () => {
    return(
        <div className={style.dashboard}>
            <div className={style.dashboardCounters}>
                <div className={style.dashboardCounterItem}>
                    <p>Meetings</p>
                    <b>1</b>
                    <div className={style.dasboardStatusBar}></div>
                </div>
                <div className={style.dashboardCounterItem}>
                    <p>Pending Meetings</p>
                    <b>5</b>
                    <div className={style.dasboardStatusBar}></div>
                </div>
                <div className={style.dashboardCounterItem}>
                    <p>Unread Messages</p>
                    <b>4</b>
                    <div className={style.dasboardStatusBar}></div>
                </div>
                <div className={style.dashboardCounterItem}>
                    <p>Connections</p>
                    <b>19</b>
                    <div className={style.dasboardStatusBar}></div>
                </div>
            </div>
            <div className={style.dashboardBestExibitors}>
                <div className={style.dashboardBestStatus}>
                    <h3>Best Matching Exhibitors</h3>
                </div>
                <div className={style.dashboardBestExibitorsContainer}>
                    <div className={style.dashboardBestExibitorsItem}>
                        <img src={logo} alt=""/>
                        <b>Company Business & Trade Profile</b>
                        <p>	FSC, Gıda Takviyeleri için Uygunluk Belgesi</p>
                        <span>95-A-GTX</span>
                        <button>View Profile</button>
                        <div>
                            <p>Turkey</p>
                        </div>
                    </div>
                    <div className={style.dashboardBestExibitorsItem}>
                        <img src={logo} alt=""/>
                        <b>Company Business & Trade Profile</b>
                        <p>	FSC, Gıda Takviyeleri için Uygunluk Belgesi</p>
                        <span>95-A-GTX</span>
                        <button>View Profile</button>
                        <div>
                            <p>Turkey</p>
                        </div>
                    </div>
                    <div className={style.dashboardBestExibitorsItem}>
                        <img src={logo} alt=""/>
                        <b>Company Business & Trade Profile</b>
                        <p>	FSC, Gıda Takviyeleri için Uygunluk Belgesi</p>
                        <span>95-A-GTX</span>
                        <button>View Profile</button>
                        <div>
                            <p>Turkey</p>
                        </div>
                    </div>
                    <div className={style.dashboardBestExibitorsItem}>
                        <img src={logo} alt=""/>
                        <b>Company Business & Trade Profile</b>
                        <p>	FSC, Gıda Takviyeleri için Uygunluk Belgesi</p>
                        <span>95-A-GTX</span>
                        <button>View Profile</button>
                        <div>
                            <p>Turkey</p>
                        </div>
                    </div>
                    <div className={style.dashboardBestExibitorsItem}>
                        <img src={logo} alt=""/>
                        <b>Company Business & Trade Profile</b>
                        <p>	FSC, Gıda Takviyeleri için Uygunluk Belgesi</p>
                        <span>95-A-GTX</span>
                        <button>View Profile</button>
                        <div>
                            <p>Turkey</p>
                        </div>
                    </div>
                    <div className={style.dashboardBestExibitorsItem}>
                        <img src={logo} alt=""/>
                        <b>Company Business & Trade Profile</b>
                        <p>	FSC, Gıda Takviyeleri için Uygunluk Belgesi</p>
                        <span>95-A-GTX</span>
                        <button>View Profile</button>
                        <div>
                            <p>Turkey</p>
                        </div>
                    </div>
                    <div className={style.dashboardBestExibitorsItem}>
                        <img src={logo} alt=""/>
                        <b>Company Business & Trade Profile</b>
                        <p>	FSC, Gıda Takviyeleri için Uygunluk Belgesi</p>
                        <span>95-A-GTX</span>
                        <button>View Profile</button>
                        <div>
                            <p>Turkey</p>
                        </div>
                    </div>
                    <div className={style.dashboardBestExibitorsItem}>
                        <img src={logo} alt=""/>
                        <b>Company Business & Trade Profile</b>
                        <p>	FSC, Gıda Takviyeleri için Uygunluk Belgesi</p>
                        <span>95-A-GTX</span>
                        <button>View Profile</button>
                        <div>
                            <p>Turkey</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};



export default Dashboard;