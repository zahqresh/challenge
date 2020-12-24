import React,{createContext,useState} from 'react';


export const Context = createContext(); //initalize the context



const BookContext = (props) => {
    const [Book,SetBook] = useState({
        "isbn": "9781593275846",
        "title": "Eloquent JavaScript, Second Edition",
        "subtitle": "A Modern Introduction to Programming",
        "author": "Marijn Haverbeke",
        "published": "2014-12-14T00:00:00.000Z",
        "publisher": "No Starch Press",
        "pages": 472,
        "description": "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
        "website": "http://eloquentjavascript.net/"
      });


    return(
        <Context.Provider value={{Book}}>
            {props.children}
        </Context.Provider>
    )
} 


export default BookContext;
