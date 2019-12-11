import React from 'react';
import {connect} from "react-redux";
import style from "../../../Main/Content/Profile/Profile.module.css";
import {Field, reduxForm} from "redux-form";

let mapStateToProps = () => {
    return {

    }
};

const Import = () => {
    return(
        <div>
            <header>Create new notification</header>
            <div className={style.mainProfileContainer}>
                <form>
                    <div>
                        <label>I want to import: </label>
                        <Field name={'company'} component={'select'} >
                            <option value="">Distributors</option>
                            <option value="">Manufacturers</option>
                            <option value="">Country</option>
                            <option value="">Interest</option>
                            <option value="">Categories</option>
                        </Field>
                    </div>
                    <div>
                        <label>Select Excel file with data: </label>
                        <Field name={'company'} component={'input'} type={'file'}  />
                    </div>
                    <div>
                        <button>Import</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

const ImportRedux = reduxForm({ form: 'importv'})(Import)



export default connect(mapStateToProps, {})(ImportRedux);