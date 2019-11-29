import React from 'react';
import {Field} from "redux-form";
import style from './Profile.module.css';
import LogotypeInput from "./LogotypeInput";

const Profile = (props) => {
    return(
        <div className={style.mainProfileContainer}>
            <div className={style.companyLogoContainer}>
                <label><img src={props.data.logotype} alt={props.data.logotype}/> </label>
                <LogotypeInput />
            </div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label>Company </label> 
                    <Field name={'company'} component={'input'} type={'text'}  />
                </div>
                <div>
                    <label>Contact name </label> 
                    <Field name={'contactName'} component={'input'} type={'text'}  />
                </div>
                <div>
                    <label>Job title </label> 
                    <Field name={'jobTitle'} component={'input'} type={'text'}  />
                </div>
                <div>
                    <label>Country </label> 
                    <Field name={'country'} component={'select'}>
                        <option value="Germany">Germany</option>
                        <option value="Poland">Poland</option>
                        <option value="Ukraine">Ukraine</option>
                    </Field>
                </div>
                <div>
                    <label>Telephone </label>
                    <Field name={'telephone'} component={'input'} type={'number'}  />
                </div>
                <div>
                    <label>Email </label>
                    <Field name={'email'} component={'input'} type={'email'}  />
                </div>

                <div>
                    <label>City </label>
                    <Field name={'city'} component={'input'} type={'text'} />
                </div>
                <div>
                    <label>Adress </label>
                    <Field name={'adress'} component={'input'} type={'text'} />
                </div>
                <div>
                    <label>Website </label>
                    <Field name={'website'} component={'input'} type={'text'} />
                </div>
                <div>
                    <label>Description</label>
                    <Field name={'description'} component={'textarea'}/>
                </div>
                <div className={style.multiSelectContainer}>
                    <label>Category</label>
                    <div className={style.activeCompanyCategory}>
                        { /* props.data.category.map(a => {
                            return(
                                <blockquote> {a} <span onClick={a}>&#10008;</span></blockquote>
                            )
                        })*/
                        }
                    </div>
                    <div className={style.companyCategoryVariants}>
                        <h3>Add new category:</h3>
                        <div><Field name={'backend'} component={'input'} type={'checkbox'} /><label>backend</label></div>
                        <div><Field name={'frontend'} component={'input'} type={'checkbox'} /><label>frontend</label></div>
                        <div><Field name={'fullstack'} component={'input'} type={'checkbox'} /><label>fullstack</label></div>
                        <div><Field name={'yiii'} component={'input'} type={'checkbox'} /><label>yiii</label></div>
                        <div><Field name={'angular'} component={'input'} type={'checkbox'} /><label>angular</label></div>
                    </div>
                </div>
                <div className={style.multiSelectContainer}>
                    <label>Interest</label>
                    <div className={style.activeCompanyCategory}>
                        { /*props.data.interest.map(a => {
                            return(
                                <blockquote> {a} <span onClick={a}>&#10008;</span></blockquote>
                            )
                        })*/}
                    </div>
                    <div className={style.companyCategoryVariants}>
                        <h3>Add new interest:</h3>
                        <div><Field name={'javascript'} component={'input'} type={'checkbox'} /><label>javascript</label></div>
                        <div><Field name={'react'} component={'input'} type={'checkbox'} /><label>react</label></div>
                        <div><Field name={'redux'} component={'input'} type={'checkbox'} /><label>redux</label></div>
                        <div><Field name={'html'} component={'input'} type={'checkbox'} /><label>html</label></div>
                        <div><Field name={'css'} component={'input'} type={'checkbox'} /><label>css</label></div>
                        <div><Field name={'thunk'} component={'input'} type={'checkbox'} /><label>thunk</label></div>
                    </div>
                </div>
                <div>
                    <button>Save changes</button>
                </div>
            </form>
        </div>
    )
};


export default Profile;