import React,{useContext,useState} from 'react';
import { Context } from '../context/context';


const Index = ()=>{

    //to get user input
    const [Input,SetInput] = useState('');

    const {Book} = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault();
       // console.log(Book);

       console.log(Input);
    }

    return(
        <div className='container'>
            <form onSubmit={handleSubmit}>
            <input onChange={e=> SetInput(e.target.value)} type="text" className='form-control mt-4'/> 
            <button className='btn btn-default'>Click</button>
            </form>
        </div>
    )

};

export default Index;