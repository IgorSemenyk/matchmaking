import React from 'react';
import style from './Companies.module.css';

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
                        <div>{c.name}</div>
                        <div>{c.contact}</div>
                        <div>{c.stand}</div>
                        <div>{c.country}</div>
                        <div>
                            {c.category.map(category => <span>{category}</span>)}
                        </div>
                        <div>
                            <button> Request Meeting </button>
                        </div>
                    </div>)}
                </div>

            </div>
        </div>
    )
};



export default Companies;