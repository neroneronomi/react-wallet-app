import { useState } from 'react'
import LoginModal from '../Login/LoginModal';
import SignUpModal from '../Signup/SignUpModal';
import './Navbar.scss';


const Navbar = () => {
    const [state, setState] = useState(false)
   
    const handleClick = (e) => {
        setState(!state)
    }

    return (
      <nav className='nav-bar'>
          <h1 className='navbar-logo'>PIE <i className="fas fa-pizza-slice"></i></h1>
          <div className='hamburger-menu' onClick={handleClick}>
                <i className={state ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={state ? 'nav-menu active' : 'nav-menu'}>
              <li>
                <a href="/" className="nav-links">Home</a>
                <a href="/" className="nav-links">Get Started</a>
                <a href="/" className="nav-links">Services</a>
                <a href="/" className="nav-links">Partners</a>
              </li>
          </ul>
          <div className="btn-container">
            <LoginModal />
            <SignUpModal />
          </div>
      </nav>
    )
}

export default Navbar;
