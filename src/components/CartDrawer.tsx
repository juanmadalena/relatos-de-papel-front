import { useContext, useEffect } from "react";
import { CartContext } from "../context/cartContext/CartContext";
import { useNavigate } from "react-router";
import { CartList } from "./CartList";


type CartDrawerProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

export const CartDrawer = ({ isOpen, setIsOpen }: CartDrawerProps) => {

    const { items } = useContext(CartContext);

    const navigate = useNavigate();

    const handleCheckout = () => {
        setIsOpen(false)
        navigate('/checkout')
    }

    //Fix temporal para pa superposicion de el collage y el carrito
    useEffect(() => {
        const book_collage = document.getElementById('book_collage_container');
        if(book_collage) {
            if(isOpen) {
                book_collage.classList.add('z-[-1]')
            } else {
                book_collage.classList.remove('z-[-1]')
            }
        }
    }, [isOpen])

    
    return (
        <>
            <div onClick={() => setIsOpen(false)} className="z-[2147483646] fixed md:block bg-neutral-800 bg-opacity-40 top-0 h-screen left-0 md:w-[100dvw]" style={{display: isOpen ? 'block' : 'none'}}></div>
            <div className="z-[2147483647] w-screen md:w-[35dvw] h-screen bg-[#dedede] fixed top-0 right-0 shadow-lg transform transition-transform duration-300 ease-in-out flex justify-between flex-col" style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}>
                <div className="flex justify-between items-center p-4 border-b border-neutral-400">
                    <h1 className="text-xl font-bold">Carrito</h1>
                    <button onClick={() => setIsOpen(false)}>✖️</button>
                </div>
                {
                    items.length === 0 &&
                    <div className="p-4">
                        <p>Carrito vacío</p>
                    </div>
                }
                <div className="flex-grow overflow-y-auto">
                    <CartList />
                </div>
                {
                    items.length > 0 &&
                    <div className="p-4 border-t border-neutral-400">
                        <p className="text-lg text-right font-medium mb-2">Total: {items.reduce((acc, item) => acc + item.price, 0).toFixed(2)}€</p>
                        <button onClick={(handleCheckout)} className="bg-orange-500 text-white p-2 rounded w-full">
                            Checkout
                        </button>
                    </div>
                }
            </div>
        </>
    );

}