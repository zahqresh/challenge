import React from 'react';
import img from './loading.gif';

const Loader = ()=>{
    return(
        <img src={img} alt="Loading" className='mb-2'/>
    )
}


export default Loader;