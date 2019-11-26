import React from 'react';
import style from './Meets.module.css';

const Meets = () => {
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
                    <div>
                        <div>Anigo Web Studio</div>
                        <div>Varvarych Anton</div>
                        <div>FGH-789-R</div>
                        <div>26.11.2019</div>
                        <div>19:00</div>
                        <div>Complete</div>
                        <div>
                            <button>Cancel meet</button>
                        </div>
                    </div>
                    <div>
                        <div>Anigo Web Studio</div>
                        <div>Varvarych Anton</div>
                        <div>FGH-789-R</div>
                        <div>26.11.2019</div>
                        <div>19:00</div>
                        <div>Complete</div>
                        <div>
                            <button>Cancel meet</button>
                        </div>
                    </div>
                    <div>
                        <div>Anigo Web Studio</div>
                        <div>Varvarych Anton</div>
                        <div>FGH-789-R</div>
                        <div>26.11.2019</div>
                        <div>19:00</div>
                        <div>Complete</div>
                        <div>
                            <button>Cancel meet</button>
                        </div>
                    </div>
                    <div>
                        <div>Anigo Web Studio</div>
                        <div>Varvarych Anton</div>
                        <div>FGH-789-R</div>
                        <div>26.11.2019</div>
                        <div>19:00</div>
                        <div>Complete</div>
                        <div>
                            <button>Cancel meet</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};



export default Meets;