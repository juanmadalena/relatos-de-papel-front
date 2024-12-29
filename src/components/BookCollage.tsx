import { useRef } from "react";
import catch22 from '../assets/catch22.jpg'
import godfather from '../assets/godfather.jpg'
import handmaidsTale from '../assets/handmaidsTale.jpg'
import prideAndPrejudice from '../assets/prideAndPrejudice.jpg'
import people from '../assets/people.jpg'

export const BookCollage = () => {

    const indexRef = useRef(5);

    const bringToFront = (e: any) => {
        indexRef.current += 1;
        e.target.style.zIndex = indexRef.current;
    }


    return (
        <div className="h-full w-full relative">
            <div onMouseEnter={bringToFront} className="h-[55vh] max-h-[33rem] aspect-[2/3] absolute left-10 top-0 -rotate-[20deg] transition-all duration-100 hover:scale-105 hover:rotate-0">
                <img src={catch22} alt=""  className="h-full pointer-events-none"/>
            </div>
            <div onMouseEnter={bringToFront} className="h-[55vh] max-h-[33rem] aspect-[2/3] absolute left-16 bottom-0 -rotate-6 transition-all duration-100 hover:scale-105 hover:rotate-0">
                <img src={people} alt=""  className="h-full pointer-events-none"/>
            </div>
            <div onMouseEnter={bringToFront} className="h-[55vh] max-h-[33rem] aspect-[2/3] absolute right-0 left-96 bottom-0 top-10 rotate-6 mx-auto transition-all duration-100 hover:scale-105 hover:rotate-0">
                <img src={handmaidsTale} alt=""  className="h-full pointer-events-none" />
            </div>
            <div onMouseEnter={bringToFront} className="h-[55vh] max-h-[33rem] aspect-[2/3] absolute bottom-0 right-10 m-auto rotate-[10deg] transition-all duration-100 hover:scale-105 hover:rotate-0">
                <img src={prideAndPrejudice} alt=""  className="h-full pointer-events-none"/>
            </div>
            <div onMouseEnter={bringToFront} className="h-[57vh] max-h-[35rem] aspect-[2/3] absolute bottom-0 top-0 left-0 right-0 m-auto transition-all duration-100 hover:scale-105 hover:rotate-0">
                <img src={godfather} alt=""  className="h-full pointer-events-none"/>
            </div>
        </div>
    )
}