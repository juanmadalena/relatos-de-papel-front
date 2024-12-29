import { createContext, useEffect, useReducer } from "react";

import { CartState, cartReducer } from "./cartReducer";
import { Book } from "../../interface";

interface CartContextType {
    items: Book[],
    addToCart: (book: any) => void,
    removeFromCart: (book: any) => void,
    clearCart: () => void,
} 

const initialState: CartState = {
    items: [],
}

export const CartContext = createContext({} as CartContextType);

export const CartProvider = ({ children }:any) => {

    const [ state, dispatch ] = useReducer( cartReducer, initialState )

    useEffect(() => {
        //get cart from local storage
        const cart = localStorage.getItem('cart')
        if (cart) {
            dispatch({
                type: 'clearCart'
            })

            const cartItems = JSON.parse(cart)
            cartItems.forEach((item: any) => {
                dispatch({
                    type: 'addToCart',
                    payload: item
                })
            })
        }
    }, [])


    const addToCart = async (book: any) => {
        dispatch({
            type: 'addToCart',
            payload: book
        })

    }

    const removeFromCart = (book: any) => {
        dispatch({
            type: 'removeFromCart',
            payload: book
        })
    }

    const clearCart = () => {
        dispatch({
            type: 'clearCart'
        })
    }
    


    return (
        <CartContext.Provider value={{
            ...state,
            addToCart,
            removeFromCart,
            clearCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}