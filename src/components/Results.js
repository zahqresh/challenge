import React,{useContext} from 'react';
import { Context } from '../context/context';

const Result = (props)=>{

    const {removeBook} = useContext(Context);

   const {
       title,
       author
   } = props.data;
return(
<div>
    <div className="card mt-4">
        <div className="card-body">
            <div className="bookDetail">
                <h2>Title: {title}</h2>
                <h2>Author: {author}</h2>
                <button onClick={e=> removeBook(author)} className='btn btn-sm btn-danger'>Remove</button>
            </div>
        </div>
    </div>
</div>
);
};


export default Result;