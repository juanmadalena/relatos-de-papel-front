import { useContext } from "react";
import { CartList } from "../components/CartList";
import { CartContext } from "../context/cartContext/CartContext";
import { useNavigate } from "react-router";

export const Checkout = () => {

    const { items, clearCart } = useContext(CartContext)
    const navigate = useNavigate()

    const handlePayment = () => {
        clearCart()
        navigate('/')
    }

  return (
    <div className="h-full w-full p-8 grid grid-cols-2">
        <div className="border-r border-neutral-400 px-6 overflow-y-auto">
            <CartList />
        </div>
        <div className="p-8 flex justify-center items-center flex-col gap-4">
            <div className="flex justify-center gap-8 w-[80%] min-w-96">
               <div className="w-2/4">
                    <p>Nombre</p>
                    <input type="text" placeholder="Nombre"  className="w-full h-12 px-4 text-lg border-b border-neutral-400 focus:outline-none focus:ring-1 focus:ring-orange-400 bg-transparent"/>
                </div>
               <div className="w-2/4">
                    <p>Apellido</p>
                    <input type="text" placeholder="Apellido"  className="w-full h-12 px-4 text-lg border-b border-neutral-400 focus:outline-none focus:ring-1 focus:ring-orange-400 bg-transparent"/>
                </div>
            </div>
            <div className="w-[80%]">
               <p>Direción</p>
               <input type="text" placeholder="Dirección"  className="w-full h-12 px-4 text-lg border-b border-neutral-400 focus:outline-none focus:ring-1 focus:ring-orange-400 bg-transparent"/>
            </div>
            <div className="w-[80%]">
               <p>Número de tarjeta</p>
               <input type="number" min={0} placeholder="Número de tarjeta"  className="w-full h-12 px-4 text-lg border-b border-neutral-400 focus:outline-none focus:ring-1 focus:ring-orange-400 bg-transparent"/>
            </div>
            <div className="flex justify-center gap-8 w-[80%] min-w-96">
               <div className="w-2/4">
                    <p>Vencimiento</p>
                    <input type="month" placeholder="Vencimiento"  className="w-full h-12 px-4 text-lg border-b border-neutral-400 focus:outline-none focus:ring-1 focus:ring-orange-400 bg-transparent"/>
                </div>
               <div className="w-2/4">
                    <p>CVV</p>
                    <input type="password" placeholder="CVV"  className="w-full h-12 px-4 text-lg border-b border-neutral-400 focus:outline-none focus:ring-1 focus:ring-orange-400 bg-transparent"/>
                </div>
            </div>
            <div className="w-[80%] mt-8 flex justify-between items-end">
                <div>
                    <p>Total</p>
                    <p className="text-2xl font-semibold">
                        {
                            items.reduce((acc, item) => acc + item.price * (item?.quantity || 1), 0).toFixed(2)
                        }€
                    </p>
                </div>
                <button onClick={handlePayment} className="py-3 px-12 bg-orange-500 text-white rounded">
                    Pagar
                </button>
            </div>
        </div>
    </div>
  );
};