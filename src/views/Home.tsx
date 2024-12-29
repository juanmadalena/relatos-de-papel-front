import { Link, useNavigate } from 'react-router';
import { BookCollage } from '../components/BookCollage';
import { useEffect, useRef } from 'react';

export const Home = () => {

    const navigate = useNavigate()
    const timeoutId = useRef<number>(0)

    useEffect(() => {
        const cancelTimeout = () => {
            clearTimeout(timeoutId.current)
        }

        timeoutId.current = setTimeout(() => {
            navigate('/books')
        }, 5000)

        console.log('setting timeout', timeoutId.current)

        window.addEventListener('mousemove', cancelTimeout)
        window.addEventListener('scroll', cancelTimeout)
        window.addEventListener('click', cancelTimeout)
        window.addEventListener('keypress', cancelTimeout)

        return () => {

            if (timeoutId.current) {
                clearTimeout(timeoutId.current);
            }

            window.removeEventListener('mousemove', cancelTimeout)
            window.removeEventListener('scroll', cancelTimeout)
            window.removeEventListener('click', cancelTimeout)
            window.removeEventListener('keypress', cancelTimeout)
        }

    }, [navigate])

    return (
        <>
            <section className="flex flex-row h-[80svh] md:h-full p-8 flex-wrap md:flex-nowrap">
                <div className="md:h-full flex flex-col justify-between items-start ">
                    <div className=''></div>
                    <div className="flex justify-center items-start flex-col p-4 gap-8 md:gap-2 md:p-0">
                        <h1 className="text-6xl md:text-2xl font-bold">
                            Donde la Literatura se Encuentra con la Tecnología
                        </h1>
                        <h5 className="text-2xl md:text-xl">
                            Explora, Compra y Disfruta Libros desde Cualquier Lugar.
                            Tu biblioteca favorita ahora está al alcance de un clic.
                        </h5>
                    </div>
                    <div className="w-full">
                        <Link to="/books" className="hover:text-orange-600 text-lg underline-offset-8 underline font-semibold hover:underline-offset-[12px] transition-all duration-200">
                            Explora nuestro catálogo
                        </Link>
                    </div>
                </div>
                <div className="relative w-full max-w-3xl md:flex justify-center items-center hidden">
                    <BookCollage />
                </div>
            </section>
        </>
    )
}