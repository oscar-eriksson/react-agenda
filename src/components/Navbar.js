import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import { ReactComponent as Piraya} from './images/piraya.svg'

function Navbar() {
    const [burger, setBurger] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick = () => setBurger(!burger);
    const closeMobileMenu = () => setBurger(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []); 

    window.addEventListener('resize', showButton);

    return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <div>
                    <Piraya className='piraya-logo'/>
                </div>
                <Link to="/" className="navbar-logo">
                   PIRAYA PARTY PROVIDERS
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={burger ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={burger ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/members' className='nav-links' onClick={closeMobileMenu}>
                            Medlemmar
                        </Link>   
                    </li>
                    <li className='nav-item'>
                        <Link to='/artiklar' className='nav-links' onClick={closeMobileMenu}>
                            Artiklar och bilder
                        </Link>   
                    </li>
                    <li className='nav-item'>
                        <Link to='/os' className='nav-links' onClick={closeMobileMenu}>
                            OS
                        </Link>   
                    </li>
                    <li className='nav-item'>
                        <Link to='/drinkar' className='nav-links' onClick={closeMobileMenu}>
                            Drinkrecept
                        </Link>   
                    </li>
                    <li className='nav-item'>
                        <Link to='/kalendarium' className='nav-links' onClick={closeMobileMenu}>
                            Kalendarium
                        </Link>   
                    </li>
                    <li className='nav-item'>
                        <Link to='/guestbook' className='nav-links' onClick={closeMobileMenu}>
                            Gästbok
                        </Link>   
                    </li>  
                </ul>
                {/*button && <Button buttonStyle='btn--outline'>TEST</Button>*/}
            </div>
        </nav>
    </>
  );
}

export default Navbar;