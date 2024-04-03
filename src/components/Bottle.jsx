import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const esMobile = window.innerWidth <= 640;

export const Bottle = () => {
    return (
        <div className='relative isolate overflow-hidden h-dvh bg-gradient-to-r from-[#fbfbfb] to-[#f2f2f2] select-none'>
            <div className="absolute object-cover overflow-hidden -z-20 w-full h-full">
                <Spline scene="https://prod.spline.design/ZMS9n-Z-ruiRjf67/scene.splinecode" />
            </div>
            <main className='flex flex-col px-10 mt-4 mx-auto sm:max-w-[75%] xl:max-w-6xl'>

                <NavBar />
                <div className="text-center lg:flex-auto lg:py-16 lg:text-left mb-5">
                    {/* {esMobile ? <div>
                        <h1 className="drop-shadow-md  pt-10 text-3xl font-bold tracking-normal text-black text-center sm:text-7xl">
                            Welcome
                        </h1>
                        <p className="drop-shadow-md mt-6 text-center text-lg leading-tight text-pink">
                            descripcion
                        </p>
                    </div>
                        :
                        <div>
                            <h1 className="drop-shadow-md  pt-10 text-3xl sm:text-6xl font-bold tracking-normal text-arenaClaro text-center lg:text-7xl">
                                Welcome
                            </h1>
                            <p className="drop-shadow-md mt-6 text-lg  leading-tight text-arenaClaro">
                                descripcion
                            </p>
                        </div>
                    } */}


                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            className="cursor-pointer drop-shadow-md rounded-full hover:bg-pink px-6 py-2.5 text-sm font-semibold hover:text-white border-2 border-pink text-pink shadow-sm bg-transparent transition hover:duration-500 ease-in-out"
                            to="/"

                        >
                            Go home
                        </Link>
                    </div>

                </div>
            </main>
        </div>
    )
}
