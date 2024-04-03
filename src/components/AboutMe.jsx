import Spline from '@splinetool/react-spline';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

const esMobile = window.innerWidth <= 640;

const AboutMe = () => {
    return (
        <div className='relative isolate overflow-hidden h-dvh bg-[#E5E9F6] select-none'>


            <div className="absolute object-cover overflow-hidden -z-20 w-full h-full">
                <Spline scene="https://prod.spline.design/9sDDO6Wvn3jTwR5s/scene.splinecode" />
            </div>
            <main className='flex flex-col px-10 mt-4 mx-auto sm:max-w-[75%] xl:max-w-6xl'>

                <NavBar />
                <div className="text-center lg:flex-auto lg:py-16 lg:text-left mb-5">
                    {esMobile ? <div>
                        <h1 className="drop-shadow-md  pt-10 text-3xl font-bold tracking-normal text-pink text-center sm:text-7xl">
                            Welcome to my portfolio
                        </h1>
                        <p className="drop-shadow-md mt-6 text-lg  leading-tight text-pink text-center">
                            This is a test of 3D interactive website by Nesmanpro
                        </p>
                    </div>
                        :
                        <div>
                            <h1 className="drop-shadow-md  pt-10 text-3xl sm:text-6xl font-bold tracking-normal text-pink text-center lg:text-7xl">
                                Welcome to my portfolio
                            </h1>
                            <p className="drop-shadow-md mt-6 text-lg  leading-tight text-pink text-center">
                                This is a test of 3D interactive website by Nesmanpro
                            </p>
                        </div>
                    }


                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            className="cursor-pointer drop-shadow-md rounded-full hover:bg-pink px-6 py-2.5 text-sm font-semibold hover:text-white border-2 border-pink text-pink shadow-sm bg-transparent transition hover:duration-500 ease-in-out"
                            to="/"
                            spy={true}
                            smooth={true}
                            offset={-150}
                            duration={500}

                        >
                            Go home
                        </Link>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default AboutMe