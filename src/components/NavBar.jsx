import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

import logo from '../logo.svg';
import './NavBar.css'

export default function NavBar() {

    const menuOverlayRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const exitMenu = () => {
        setIsMenuOpen(false);
        menuOverlayRef.current.style.left = "-100%";
    };
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        const menuOverlay = menuOverlayRef.current;
        menuOverlay.style.left = menuOverlay.style.left === "0%" ? "-100%" : "0%";
    };

    return(
        <div className='nav'>
            <nav className='nav-container'>
                <div>
                    <Link to='/' className='home-link'>
                        <img className='logo' src={logo} alt='logo' />
                    </Link>
                </div>
                <ul className='desktop-nav'>
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

                <div 
                    id="menuOverlay" 
                    className={isMenuOpen ? "overlay open" : "overlay"} 
                    ref={menuOverlayRef}>
                    <button className="exit-button" id="exitButton" onClick={exitMenu}>✕</button>

                    <div className="menu-item">
                        <Link 
                            to='/projects' 
                            className='projects-link'
                            onClick={exitMenu}
                            >Projects
                        </Link>
                    </div>

                    <div className="menu-item">
                        <a 
                            href="mailto:lukechristophermoore@gmail.com?subject=Hi Luke!" 
                            target="_blank" 
                            rel='noreferrer' 
                            className='projects-link'
                            >Contact
                        </a>
                    </div>

                    <div className="menu-item">
                        <a 
                            href="https://github.com/papa-fish" 
                            target='_blank' 
                            rel='noreferrer'
                            className='projects-link'
                            >GitHub
                        </a>
                    </div>
                </div>
                <button className="mobile-nav" id="navToggle" onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </nav>
            <hr className='navbar-bottom-line'/>
        </div>
    );
};
