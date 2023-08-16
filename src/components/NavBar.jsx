import { Link } from 'react-router-dom';

import logo from '../logo.svg';
import './NavBar.css'

export default function NavBar() {

    return(
        <div className='nav'>
            <nav className='nav-container'>
                <div>
                    <Link to='/' className='home-link'>
                        <img className='logo' src={logo} alt='logo' />
                    </Link>
                </div>
                <ul>
                    <Link to='/projects' className='projects-link'>
                        <li>Projects</li>
                    </Link>
                    <a 
                        href="mailto:lukechristophermoore@gmail.com?subject=Hi Luke!" 
                        target="_blank" 
                        rel='noreferrer' 
                        className='projects-link'>
                        <li>Contact</li>
                    </a>
                    <a 
                        href="https://github.com/papa-fish" 
                        target="_blank" 
                        rel='noreferrer' 
                        className='projects-link'>
                        <li>GitHub</li>
                    </a>
                </ul>
            </nav>
            <hr className='navbar-bottom-line'/>
        </div>
    );
};
