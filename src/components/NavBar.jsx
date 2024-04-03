import Logo from '../assets/logo/logo.svg';
import { Link } from 'react-router-dom';

const esMobile = window.innerWidth <= 640;

function NavBar() {
    return (
        <section className='flex justify-between items-center pt-5 drop-shadow-xl mt-3 mb-3 max-w-6xl'>

            {esMobile ?

                <nav>
                    <Link to="/">
                        <img className='size-16 transition-all ease-in-out hover:scale-105 duration-150' src={Logo} alt="Logo nesmanpro web development agency" />
                    </Link>
                </nav>
                :

                <nav>
                    <Link to="/">
                        <img className='size-16 transition-all ease-in-out hover:scale-105 duration-150' src={Logo} alt="Logo nesmanpro web development agency" />
                    </Link>
                </nav>

            }

            <nav>

                <ul className='drop-shadow-md flex text-xs sm:text-base gap-2 sm:gap-5 font-sans font-bold text-arenaClaro'>
                    <li className="navlink"><Link to="/">Home</Link>
                    </li>
                    <Link to="/bottle" className="navlink">Bottle</Link>
                    <Link to="/aboutme" className="navlink">About Me</Link>
                    <li className="navlink">Contact</li>

                </ul>


            </nav>
        </section>
    )
}

export default NavBar