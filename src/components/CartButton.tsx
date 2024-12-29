import { useContext, useState } from "react";
import { ShoppingCartIcon } from "./Icons";
import { CartContext } from "../context/cartContext/CartContext";
import { CartDrawer } from "./CartDrawer";

export const CartButton = () => {

    const { items } = useContext(CartContext);

    const [ isOpen, setIsOpen ] = useState(false)

    return (
        <>
            <button onClick={() => setIsOpen(true)} className="relative h-full w-full flex items-center justify-center">
                {/* badge */}
                {
                    items.length > 0 && (
                        <div className="absolute top-2 md:top-1 right-2 md:right-1 w-6 h-6 bg-orange-700 text-xs text-white flex items-center justify-center rounded-full">
                            {items.length}
                        </div>
                    )
                }
                <ShoppingCartIcon />
            </button>
            <CartDrawer isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>
    );
}