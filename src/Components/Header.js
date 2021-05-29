import logo from '../Assets/logo.png';
import {Link} from 'react-router-dom';
import {FaSearch} from 'react-icons/fa';



const Header = () => {
    return(
        <header className="w-full bg-green-800 p-2">
            <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-between md:flex-row">
                <Link to='/' className="w-36 md:w-44">
                    <img src={logo} alt={logo} className="w-full"/>
                </Link>
                <Link to='/find' className="text-gray-50 text-md md:text-lg font-medium hover:underline flex items-center mt-4 md:mt-0 md:mr-10">
                    Buscar País
                    <FaSearch className="ml-2"/>
                </Link>
            </div>
        </header>
    )
}

export default Header;