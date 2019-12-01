import React from 'react';
import style from './Meets.module.css';
import { format } from 'date-fns'

const Meets = (props) => {
    return(
        <div className={style.meets}>
            <div className={style.meetsFilters}>
                <div className={style.meetsFilter}>
                    <select name="" id="">
                        <option value="">Select meet date</option>
                    </select>
                </div>
                <div className={style.meetsFilter}>
                    <select name="" id="">
                        <option value="">Meet status</option>
                    </select>
                </div>
                <div className={style.meetsFilter}>
                    <select name="" id="">
                        <option value="">Company categories</option>
                    </select>
                </div>
            </div>
            <div className={style.meetsContent}>
                <div className={style.meetsContentHeaders}>
                    <div>Company</div>
                    <div>Contact name</div>
                    <div>Stand</div>
                    <div>Date</div>
                    <div>Time</div>
                    <div>Status</div>
                    <div>Actions</div>
                </div>
                <div className={style.meetsContentList}>
                    {
                        props.meets.map(m => <div key={m.mid}>
                                <div>{m.company}</div>
                                <div>{m.contactName}</div>
                                <div>{m.stand}</div>
                                <div>{ format( new Date(m.date), 'LLLL, dd') }</div>
                                <div>{ format( new Date(m.date), 'kk:mm')}</div>
                                <div>{m.status}</div>
                                <div>
                                    <button onClick={ () => {props.cancelMeet(m.mid)} }>Cancel meet</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
};



export default Meets;