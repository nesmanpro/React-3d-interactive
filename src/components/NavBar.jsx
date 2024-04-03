import img from '../assets/logo/logo.svg';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className='flex justify-around items-center relative z-10 drop-shadow-xl mt-3 mb-3'>
            <img src={img} alt="" className='size-16 transition-all ease-in-out hover:scale-105 duration-150' />
            <ul className='h-full flex gap-7 font-bold text-black cursor-pointer '>
                <li className="hover:text-pink-700 transition-all ease-in-out duration-300"><Link to="/">Home</Link>
                </li>
                <Link to="/bottle" className="hover:text-pink-700">Bottle</Link>
                <Link to="/aboutme" className="hover:text-pink-700">About Me</Link>
                <li className="hover:text-pink-700">Contact</li>
            </ul>
        </div>
    )
}

export default NavBar