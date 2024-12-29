import { Book } from "../../interface";

export interface CartState {
    items: Book[];
}

export type CartAction =
    | { type: 'addToCart', payload: Book}
    | { type: 'removeFromCart', payload: Book}
    | { type: 'clearCart'};

export const cartReducer = ( state: CartState, action: CartAction ): CartState => {
    switch (action.type) {
        case 'addToCart':

            let items;

            const bookInCart = state.items.find(item => item.id === action.payload.id)
            if (bookInCart) {
                console.log(bookInCart.quantity)
                bookInCart.quantity = ++bookInCart.quantity!
                console.log(bookInCart.quantity)
                items = [...state.items]
            } else {
                action.payload.quantity = 1
                items = [...state.items, action.payload]
            }

            localStorage.setItem('cart', JSON.stringify(items))

            return {
                items
            }

        case 'removeFromCart':

            let books;

            const bookToDelete = state.items.find(item => item.id === action.payload.id)
            if (bookToDelete?.quantity === 1) {
                books = state.items.filter(item => item !== action.payload)
            } else {
                bookToDelete!.quantity = bookToDelete!.quantity! - 1
                books = [...state.items]
            }

            localStorage.setItem('cart', JSON.stringify(books))
            return{
                items: books
            }

        case 'clearCart':
            localStorage.removeItem('cart')
            return {
                items: [],
            }
        default:
            return state;
    }
};