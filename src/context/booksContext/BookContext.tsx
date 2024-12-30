import { createContext, useEffect, useReducer } from "react";

import { BookState, bookReducer } from "./bookReducer";

import { books } from '../../data/books'
import { Book } from "../../interface";

interface BookContextType {
    books: Book[],
    filteredBooks: Book[],
    getBooks: () => void,
    filterBooks: (book: any) => void,
} 

const initialState: BookState = {
    books: [],
    filteredBooks: [],
}

export const BookContext = createContext({} as BookContextType);

export const BookProvider = ({ children }:any) => {

    const [ state, dispatch ] = useReducer( bookReducer, initialState )

    const getBooks = async () => {
        dispatch({
            type: 'setBooks',
            payload: books
        })
    }

    const filterBooks = (input: string) => {
        let result = []
    
        if (input === '') {
            result = books
        }else{
            result = books.filter((b: any) => b.title.toUpperCase().includes(input.toUpperCase()) || b.author.toUpperCase().includes(input.toUpperCase()))
        }

        dispatch({
            type: 'filterBooks',
            payload: result
        })
    }

    


    return (
        <BookContext.Provider value={{
            ...state,
            getBooks,
            filterBooks,
        }}>
            {children}
        </BookContext.Provider>
    )
}