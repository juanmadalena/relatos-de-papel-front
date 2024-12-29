import { useContext } from "react"
import { ShoppingCartIcon } from "./Icons"
import { CartContext } from "../context/cartContext/CartContext"
import { useNavigate } from "react-router"

type BookItemProps = {
    book: any
}

export const BookItem = ({book}: BookItemProps) => {

    const { addToCart } = useContext(CartContext)

    const navigate = useNavigate()

    const handleNavigationToDetails = () => {
        // navigate to details page
        navigate(`/books/${book.id}`)
    }

    return (
        <div className="flex flex-col aspect-[2/3] w-72 border border-neutral-500 bg-neutral-100 cursor-pointer">
            <div onClick={handleNavigationToDetails} className="h-96 w-full flex justify-center items-center border-b border-neutral-500">
                <img src={book.image} alt="Book cover" className="h-full w-full" />
            </div>
            <div className="grid grid-rows-3 grid-cols-2">
                <div onClick={handleNavigationToDetails} className="border-b border-neutral-500 p-2 col-span-2 row-span-2">
                    <h3 className="text-lg font-bold">{book.title}</h3>
                    <h4 className="text-lg">{book.author}</h4>
                </div>
                <div onClick={handleNavigationToDetails} className="border-r border-neutral-500 flex justify-center items-center">
                    <p className="font-bold">{book.price}€</p>
                </div>
                <div className="">
                    <button onClick={() => addToCart(book)} className="h-full w-full flex justify-center items-center text-center text-orange-800 bg-orange-300">
                        <ShoppingCartIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}