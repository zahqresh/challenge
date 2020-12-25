//reducer normally reduces and mutates the data it takes two args
//2-user actions 1-State 
//then it mutates the state and gives us back that mutated data the way we want
export const Reducer = (state, action) => {
    switch (action.type) {
        //these are the cases with which we mutate the state
        case 'ADD_BOOK':
            //this needs to return array with all the other objects sperated in it
            return [action.payload,...state]
            
        case 'REMOVE_BOOK':
            //filter anything that we dont want and return
            return state.filter(book => book.author !== action.payload)
        case 'LOAD_BOOKS':
            return action.payload
        ///as a default method we always want to return state
        default:
            return state;
    }
}