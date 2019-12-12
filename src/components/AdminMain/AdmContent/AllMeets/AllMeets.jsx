import React from 'react';
import style from "../../../Main/Content/Meets/Meets.module.css";
import {format} from "date-fns";

const AllMeets = (props) => {
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
                    <div>Company one</div>
                    <div>Company another</div>
                    <div>Stand</div>
                    <div>Date</div>
                    <div>Time</div>
                    <div>Status</div>
                    <div>Actions</div>
                </div>
                <div className={style.meetsContentList}>
                    {
                        props.meets.map(m => <div key={m.mid}>
                                <div>Dell</div>
                                <div>Asus</div>
                                <div>ZXC-9-RTYU</div>
                                <div>{ format( new Date(m.date), 'LLLL, dd') }</div>
                                <div>{ format( new Date(m.date), 'kk:mm')}</div>
                                <div>
                                    { (m.status === 'Canceled') && <span className={style.red}>{m.status}</span>}
                                    { (m.status === 'Approve') && <span className={style.green}>{m.status}</span>}
                                    { (m.status === 'Waiting') && <span className={style.yellow}>{m.status}</span>}
                                    </div>
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



export default AllMeets;