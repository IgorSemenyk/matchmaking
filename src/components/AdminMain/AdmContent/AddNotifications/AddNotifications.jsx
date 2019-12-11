import React from 'react';
import style from "../../../Main/Content/Profile/Profile.module.css";
import {Field} from "redux-form";
import LogotypeInput from "../../../Main/Content/Profile/LogotypeInput";

const AddNotifications = (props) => {
    return(
        <div>
            <header>Create new notification</header>
            <div className={style.mainProfileContainer}>
                <form>
                    <div>
                        <label>Who get this notify?: </label>
                        <Field name={'company'} component={'select'} >
                            <option value="">All companies</option>
                            <option value="">Distributors</option>
                            <option value="">Manufacturers</option>
                            <option value="">Some company</option>
                        </Field>
                    </div>
                    <div>
                        <label>Link for notify: </label>
                        <Field name={'company'} component={'input'} type={'text'}  />
                    </div>
                    <div>
                        <label>Text of notify: </label>
                        <Field name={'contactName'} component={'textarea'}  />
                    </div>
                    <div>
                        <button>Create notify</button>
                    </div>
                </form>
            </div>
        </div>
    )
};



export default AddNotifications;