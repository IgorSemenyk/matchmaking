import React from 'react';
import preloader from './5.gif';
import style from './Preloader.module.css';


const Preloader = () => {
    return <div className={style.preloader}>
       <img src={preloader} />
    </div>
};

export default Preloader;