import React,{createContext,useState,useReducer} from 'react';
import axios from 'axios';
import { Reducer } from './Reducer';

export const Context = createContext(); //initalize the context

//so react useReducer cant be top level and it cant be set up here like we called createContext


const BookContext = (props) => {
   
    //setup reducer
//Reducer takes the reducer component and inital array
//it gives us the state and a dispatch method 
//with state we get the mutated state and with dispatch we execute method to
// mutate state in the reducer component
const [state,dispatch] = useReducer(Reducer,[]);
const [loading,setLoading] = useState(false);
    
//Add Book
const addBook = (obj)=>{
    //dispatch
    dispatch({type:'ADD_BOOK',payload:obj})

   
   
}

//Load Book
const loadBooks = ()=>{
            setLoading(true)
    axios.get('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json').then(payload=>{
            //we fire a dispatch method we give it a type and data we want to mutate
            //back in reducer component we match type with a switch and in a case 
            //that matches our type of dispatch we can mutate data anyway we wanted
             dispatch({type:'LOAD_BOOKS',payload:payload.data});
             setLoading(false);
    }).catch(err=> console.log(err))
}

//Remove Book

const removeBook = (name)=>{
    dispatch({type:'REMOVE_BOOK',payload:name});
}

    return(
        <Context.Provider value={{loadBooks,
            state,
            addBook,
        removeBook,
        loading
        }}>
            {props.children}
        </Context.Provider>
    )
} 


export default BookContext;
