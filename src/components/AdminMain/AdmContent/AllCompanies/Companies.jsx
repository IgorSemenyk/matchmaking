import React from 'react';
import style from './Companies.module.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./../../../../App.css";
import {NavLink} from "react-router-dom";



const Companies = (props) => {
    return(
        <div className={style.companies}>
            <div className={style.filtersContainer}>
                <div>
                    <select name="" id="">
                        <option value="">Please select country</option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                </div>
                <div>
                    <select name="" id="">
                        <option value="">Please select category</option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                </div>
                <div>
                    <select name="" id="">
                        <option value="">Please select interests</option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                </div>
                <div>
                    <input type="text" placeholder={'Enter company name'}/>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </div>
            <div className={style.listContainer}>
                <div className={style.companiesListHeaders}>
                        <div>COMPANY NAME</div>
                        <div>CONTACT NAME</div>
                        <div>BOOTH</div>
                        <div>COUNTRY</div>
                        <div>CATEGORY</div>
                        <div>ACTION</div>
                </div>
                <div className={style.companiesListContent}>
                    { props.companies.items.map( c => <div className={style.companiesListRow} key={c.id}>
                        <div>
                            {c.company} <br/>
                            <NavLink to={'/company/' + c.id}>View profile </NavLink>
                        </div>
                        <div>{c.contactName}</div>
                        <div>{c.stand}</div>
                        <div>{c.country}</div>
                        <div>
                            Computers, Notebook, Phones
                        </div>
                        <div>
                            <button onClick={ () => {props.setDialog(c.id) && (window.location.href = '/chat')}}>Start chat</button>
                        </div>
                    </div>)}
                </div>
                { props.isOpen && <div className={style.newMeetContainer}>
                    <div>
                        <p>Select date and time:</p>
                        <DatePicker selected={props.startDate}
                                    onChange={props.handleChange}
                                    showTimeSelect
                                    dateFormat="MMMM d, hh:mm"
                                    minDate={new Date("2019/11/19")}
                                    maxDate={new Date("2019/11/24")}
                                    timeIntervals={15}
                                    inline
                        />
                        <button onClick={ () => {props.setMeet()} }> Complete </button>
                    </div>
                </div> }
            </div>

        </div>
    )
};



export default Companies;