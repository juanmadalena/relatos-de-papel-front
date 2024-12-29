import { NavLink } from "react-router";
import { BookIcon, MenuIcon } from "./Icons";
import { CartButton } from "./CartButton";

export const Navbar = () => {
    return (
        <nav className="bg-[#dedede] sticky top-0 grid grid-cols-12 h-16 border-b border-neutral-400 items-center md:grid-rows-12 md:grid-cols-1 md:h-screen md:border-r md:border-b-0 md:w-16">
            <button id="menu_button" className="h-full border-r border-neutral-400 flex items-center justify-center md:border-r-0 md:border-b">
                <MenuIcon />
            </button>
            <div className="h-full flex items-center justify-center border-r-0 border-neutral-400 md:border-b">
                <NavLink to={'/books'} className="h-full md:flex items-center justify-center hidden">
                    <BookIcon />
                </NavLink>
            </div>
            <div className="col-start-3 col-end-11 text-nowrap flex justify-center md:row-span-8 md:col-start-1 md:col-end-2 md:row-start-3 md:row-end-11">
                <NavLink to={'/'} className="text-lg rotate-0 md:-rotate-90">
                    Relatos de papel
                </NavLink>
            </div>
            <div className="h-full flex items-center justify-center border-l border-neutral-400 md:border-l-0">
                <NavLink to={'/books'} className="h-full flex items-center justify-center md:hidden">
                    <BookIcon />
                </NavLink>
            </div>
            <div className="h-full border-l border-neutral-400 flex items-center justify-center md:border-l-0 md:border-t">
                <CartButton />
            </div>
        </nav>
    );
}