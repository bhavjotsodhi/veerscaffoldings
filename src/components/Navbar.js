import React,{ useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button';


function Navbar() {
    const [click,setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu =()=>setClick(false); 

    const [button ,setButton] =useState(true)

    const showButton =() => {
        if(window.innerWidth <=960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize',showButton);

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                 VEER SCAFFOLDING
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className = 'nav-item'>
                        <Link to='/' className ='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                         </li>
                         <li className = 'nav-item'>
                        <Link to='/Products' className ='nav-links' onClick={closeMobileMenu}>
                            Product
                        </Link>
                        
                    </li>
                    <li className = 'nav-item'>
                        <Link to='/About Us' className ='nav-links' onClick={closeMobileMenu}>
                            About us
                        </Link>
                        
                    </li>
                    <li className = 'nav-item'>
                        <Link to='/Contact Us' className ='nav-links-mobile' onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                        
                    </li>

                
                </ul>
                {button && <Button buttonStyle='btn--outline'>Contact Us</Button>}
            </div>
        </nav>
            
        </>
    )
}

export default Navbar
