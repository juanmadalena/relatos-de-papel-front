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
            const items = [...state.items, action.payload]
            localStorage.setItem('cart', JSON.stringify(items))

            return {
                items
            }
        case 'removeFromCart':
            return {
                items: state.items.filter(item => item !== action.payload)
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