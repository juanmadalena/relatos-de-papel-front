import { useContext } from "react";
import { CartContext } from "../context/cartContext/CartContext";

export const CartList = () => {

    const { items, removeFromCart } = useContext(CartContext);
    
    return (
        <>
            {
                items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center p-6 border-b border-neutral-400">
                        <div className="flex items-center gap-6">
                            <img src={item.image} alt={item.title} className="h-36" />
                            <div>
                                <h3 className="text-2xl font-semibold">{item.title}</h3>
                                <p className="text-lg">{item.price}€</p>
                                <h4 className="text-lg">Unidades: {item?.quantity}</h4>
                            </div>
                        </div>
                        <button onClick={() => removeFromCart(item)}>❌</button>
                    </div>
                ))
            }
        </>
    );
};