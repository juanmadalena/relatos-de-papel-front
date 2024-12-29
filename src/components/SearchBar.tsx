import { useContext, useEffect, useState } from "react"
import useDebouncer from "../hooks/useDebouncer"
import { BookContext } from "../context/booksContext/BookContext"
import { SearchIcon } from "./Icons"

export const SearchBar = () => {

    const [ inputValue, setInputValue ] = useState('')
    const { debouncedValue } = useDebouncer(inputValue, 500)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const { filterBooks } = useContext(BookContext)

    useEffect(() => {
        filterBooks(debouncedValue)
    }, [debouncedValue])


    return (
        <>
        <input value={inputValue} onChange={handleInputChange} type="text" placeholder="Buscar..." className="w-[90%] h-full px-4 text-sm focus:outline-none focus:ring-0 focus:ring-transparent bg-transparent" />
        <button className="w-[10%]">
            <SearchIcon />
        </button>
        </>
    )
}