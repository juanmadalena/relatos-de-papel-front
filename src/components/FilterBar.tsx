import { useContext, useEffect, useState } from "react"
import useDebouncer from "../hooks/useDebouncer"
import { BookContext } from "../context/booksContext/BookContext"
import { SearchIcon } from "./Icons"

export const FilterBar = () => {


    useEffect(() => {
        const menu_button = document.getElementById('menu_button')
        const menu_button_height = menu_button?.offsetHeight || 8

        const filter_bar = document.getElementById('filter_bar')
        filter_bar?.style.setProperty('height', `${menu_button_height}px`)

    }, [])

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
        <section id="filter_bar" className="grid grid-cols-2 w-full h-16 border-b border-neutral-400">
            <div></div>
            <div className="flex flex-col flex-wrap items-center justify-center h-full w-full border-l border-neutral-400">
                <input value={inputValue} onChange={handleInputChange} type="text" placeholder="Buscar..." className="w-[90%] h-full px-4 text-sm focus:outline-none focus:ring-0 focus:ring-transparent bg-transparent" />
                <button className="w-[10%]">
                    <SearchIcon />
                </button>
            </div>
        </section>
    )

}