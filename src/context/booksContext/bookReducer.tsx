import { Book } from "../../interface";

export interface BookState {
    books: Book[];
    filteredBooks: Book[];
}

export type BookAction =
    | { type: 'getBooks'}
    | { type: 'setBooks', payload: Book[]}
    | { type: 'filterBooks', payload: Book[]}

export const bookReducer = ( state: BookState, action: BookAction ): BookState => {
    switch (action.type) {
        case 'getBooks':

            return {
                ...state
            }
        case 'setBooks':
            
            return {
                books: action.payload,
                filteredBooks: state.filteredBooks
            }
        case 'filterBooks':

            return {
                books: state.books,
                filteredBooks: action.payload
            }

        default:
            return state;
    }
};