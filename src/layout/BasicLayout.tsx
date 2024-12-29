import { Outlet } from "react-router"
import { Navbar } from "../components/Navbar"

export const BasicLayout = () => {
    return (
        <div className="grid grid-rows-[auto_1fr] md:grid-cols-[auto_1fr] md:grid-rows-0">
            <Navbar />
            <main className="md:h-screen overflow-auto">
                <Outlet />
            </main>
        </div>
    )
}