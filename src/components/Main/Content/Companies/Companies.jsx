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
                <table>
                    <thead>
                    <tr>
                        <td>COMPANY NAME</td>
                        <td>CONTACT NAME</td>
                        <td>PRODUCT CATEGORY</td>
                        <td>BOOTH</td>
                        <td>COUNTRY</td>
                        <td>CATEGORY</td>
                        <td>ACTION</td>
                    </tr>
                    </thead>
                    <tbody>
                        { props.companies.items.map( c => <tr key={c.id}>
                            <td>{c.name}</td>
                            <td>{c.contact}</td>
                            <td>{c.description}</td>
                            <td>{c.stand}</td>
                            <td>{c.country}</td>
                            <td>
                                {c.category.map(category => <span>{category}</span>)}
                            </td>
                            <td>
                                <button> Request Meeting </button>
                            </td>
                        </tr>)}
                    </tbody>

                </table>
            </div>
        </div>
    )
};



export default Companies;