import { FilterBar } from "../components/FilterBar"
import { BookItem } from "../components/BookItem";
import { useContext, useEffect } from "react";
import { BookContext } from "../context/booksContext/BookContext";
  

export const BooksList = () => {

    const { filteredBooks, getBooks } = useContext(BookContext)

    useEffect(() => {
        getBooks()
    }, [])

    return (
        <>
            <FilterBar />
            <section>
                <div className="w-full grid grid-flow-row auto-rows-max grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 p-8">
                    {
                        filteredBooks.map(book => (
                            <BookItem key={Math.random()} book={book} />
                        ))
                    }
                </div>
            </section>
        </>
    )
}