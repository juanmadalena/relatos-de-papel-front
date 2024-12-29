import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { BookContext } from "../context/booksContext/BookContext";
import { CartContext } from "../context/cartContext/CartContext";
import { Book } from "../interface";

export const BookDetails = () => {

    //Get url param
    const { id } = useParams<{id: string}>();

    const [book, setBook] = useState<Book | null>(null)

    const { books } = useContext(BookContext)
    const { addToCart } = useContext(CartContext)

    useEffect(() => {
        const bookSelected = books.find(b => b.id.toString() === id)
        setBook(bookSelected!)
    }, [])

    return (
        <div className="h-full w-full">
            {
                book && (
                    <div className="h-[95svh] md:h-[98%] grid grid-cols-8 grid-rows-4 gap-4 p-8">
                        <div className="col-span-8 row-span-3 md:row-span-4 md:col-span-3 border-b md:border-b-0 md:border-r border-neutral-400 flex justify-center items-center">
                            <img src={book.image} alt={book.title} className="p-48 md:p-12 max-h-[90svh]" />
                        </div>
                        <div className="px-8 col-span-8 row-span-1 md:row-span-3 md:col-span-5 border-b border-neutral-400 flex flex-col justify-between">
                            <div className="flex-grow flex justify-center flex-col">
                                <div>
                                    <h2 className="text-5xl md:text-6xl">{book.title}</h2>
                                </div>
                                <div className="mt-4">
                                    <p className="text-neutral-600">Descripción:</p>
                                    <p className="text-xl pl-2">{book.description}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 border-t border-neutral-400 py-4">
                                <div className="border-r border-neutral-400 pr-4">
                                    <p className="text-neutral-600">Autor:</p>
                                    <p className="text-xl pl-2 text-center">{book.author}</p>
                                </div>
                                <div className="border-r border-neutral-400 px-4">
                                    <p className="text-neutral-600">Genero:</p>
                                    <p className="text-xl pl-2 text-center">{book.genre}</p>
                                </div>
                                <div className="px-4">
                                    <p className="text-neutral-600">Año:</p>
                                    <p className="text-xl pl-2 text-center">{book.year}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-8 md:col-span-5 row-span-1 flex flex-row">
                            <div className="w-[50%] border-r border-neutral-400 flex justify-center items-center">
                                <p className="text-3xl font-semibold">{book.price}€</p>
                            </div>
                            <div className="w-[50%] flex justify-center items-center">
                                <button onClick={() => addToCart(book)} className="bg-orange-500 py-4 px-8 rounded">
                                    Añadir al carrito
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}