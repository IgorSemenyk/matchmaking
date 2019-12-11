import React from 'react';
import style from "../../../Main/Content/Profile/Profile.module.css";
import LogotypeInput from "../../../Main/Content/Profile/LogotypeInput";
import {Field} from "redux-form";


const MainSettings = (props) => {
    return <div>
        <header>Main Settings</header>
        <div className={style.mainProfileContainer}>
            <form>
                <div>
                    <label>Event name: </label>
                    <Field name={'company'} component={'input'} type={'text'}  />
                </div>
                <div>
                    <label>Start date: </label>
                    <Field name={'company'} component={'input'} type={'date'}  />
                </div>
                <div>
                    <label>Finish date: </label>
                    <Field name={'contactName'} component={'input'} type={'date'}  />
                </div>
                <div>
                    <label>Welcome text: </label>
                    <Field name={'contactName'} component={'textarea'}  />
                </div>
                <div className={style.languagesSelector} >
                    <label>Languages: </label>
                    <div>
                        <Field name={'jobTitle'} component={'input'} type={'checkbox'}  />
                        <label htmlFor="">UKR</label>
                    </div>
                    <div>
                        <Field name={'jobTitle'} component={'input'} type={'checkbox'}  />
                        <label htmlFor="">RUS</label>
                    </div>
                    <div>
                        <Field name={'jobTitle'} component={'input'} type={'checkbox'}  />
                        <label htmlFor="">ENG</label>
                    </div>
                </div>
                <div>
                    <label>Admin name: </label>
                    <Field name={'contactName'} component={'input'} type={'text'}  />
                </div>
                <div>
                    <label>Admin e-mail: </label>
                    <Field name={'contactName'} component={'input'} type={'text'}  />
                </div>
                <div>
                    <label>Admin phone: </label>
                    <Field name={'contactName'} component={'input'} type={'text'}  />
                </div>
                <div>
                    <label>Events logo:</label>
                    <div>
                        <label><img src={'https://i.pinimg.com/originals/4b/e5/78/4be578afed4364a25fa3a1ae84c47465.png'}
                                    alt={''}/> </label>
                        <br/>
                        <LogotypeInput />
                    </div>
                </div>
                <div>
                    <button>Save changes</button>
                </div>
            </form>
        </div>
    </div>
};

export default MainSettings;