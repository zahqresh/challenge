import React,{useContext,useState,useEffect} from 'react';
import { Context } from '../context/context';
import Result from './Results';
import uuid from 'react-uuid'
import Loader from './Loader';

const Index = ()=>{

    //to get user input
    const [Input,SetInput] = useState({});

    const {loadBooks,state,addBook,loading} = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault();
       addBook(Input)
    }
    console.log(loading);

    //Load All the books with useEffect after the components have been loaded
   useEffect(()=>{
       console.log('Index has been loaded');
       loadBooks();
       console.log(loading);
   },[]);

   //onchange even
   const onChange = (e)=>{
       SetInput({
           ...Input,
           //this has to be in this format in array
           [e.target.name]:e.target.value
       });
       
   }
   
    return(
        <div className='container'>
            <form onSubmit={handleSubmit}>
            <input name='title' placeholder='title' onChange={onChange} type="text" className='form-control mt-4'/> 
            <input name='author' placeholder='Author' onChange={onChange} type="text" className='form-control mt-4'/> 
            <button className='btn btn-block btn-primary mt-3'>Add Book</button>
            </form>
            {/* To render a componet it has to be inside a main div to render multiple compoent they have to be inside fragement */}
            
                { loading ? <Loader/>:state.map(book=>{
                        //we have to return a component here
                        return(
                            <Result key={uuid()} data={book}/>
                        )
            }) }
            
        </div>

    )
}

export default Index;