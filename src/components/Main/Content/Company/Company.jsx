import React from 'react';
import style from './Company.module.css';

const Company = (props) => {
    return <div className={style.company}>
        <div className={style.mainInfo}>
            <div className={style.companyLogo}>
                <img src={props.company.logotype} alt=""/>
            </div>
            <div className={style.generalInfo}>
                <div>
                    <b>Company name:</b> <span>{props.company.company}</span>
                </div>
                <div>
                    <b>Contact person:</b> <span>{props.company.contactName} <br/> <small>( {props.company.jobTitle} )</small> </span>
                </div>
                <div>
                    <b>Country:</b> <span>{props.company.country}</span>
                </div>
                <div>
                    <b>Stand:</b> <span>{props.company.stand}</span>
                </div>
            </div>
        </div>
        <div className={style.aboutCompany}>
            <div>
                <h4>About this company:</h4>
                <p>{props.company.description}</p>
            </div>
            <h4>Contact info:</h4>
            <div className={style.contactInfo}>
                <div>
                    <b>Adress:</b><span>{props.company.adress}</span>
                </div>
                <div>
                    <b>City:</b><span>{props.company.city}</span>
                </div>
                <div>
                    <b>Email:</b><span>{props.company.email}</span>
                </div>
                <div>
                    <b>Telephone:</b><span>{props.company.telephone}</span>
                </div>
            </div>
        </div>
        <div className={style.categoriesContainer}>
            <div>
                <h3>Company interests this products:</h3>
                <div>

                </div>
            </div>
            <div>
                <h3>Category of this company:</h3>
                <div>

                </div>
            </div>
        </div>
    </div>
};

export default Company;