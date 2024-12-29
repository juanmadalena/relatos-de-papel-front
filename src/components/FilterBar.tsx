import { useEffect } from "react"
import { SearchBar } from "./SearchBar"

export const FilterBar = () => {

    // Fix temporal de tamaño
    useEffect(() => {
        const menu_button = document.getElementById('menu_button')
        const menu_button_height = menu_button?.offsetHeight || 8

        const filter_bar = document.getElementById('filter_bar')
        filter_bar?.style.setProperty('height', `${menu_button_height}px`)

    }, [])

    return (
        <section id="filter_bar" className="grid grid-cols-2 w-full h-16 border-b border-neutral-400">
            <div></div>
            <div className="flex flex-col flex-wrap items-center justify-center h-full w-full border-l border-neutral-400">
                <SearchBar />
            </div>
        </section>
    )

}