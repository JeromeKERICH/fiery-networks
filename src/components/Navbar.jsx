import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css"

const Header = () => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    
    const [setIsMobile] = useState(window.innerWidth <= 768);
  
    
    const toggleMenu = () => {
      setIsMenuOpen((prev) => !prev);
    };
  
    
    const closeMenu = () => {
      setIsMenuOpen(false);
    };
  
    
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
  
       
        if (window.innerWidth > 768) {
          setIsMenuOpen(false);
        }
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

  return (
    <header className="header">
      <div className="header-container">
        
      <Link to="/" className="navbar-logo">
          <img src="assets/logo.png" alt="Fiery Networks Logo" className="logo" />
      </Link>

       
        <nav className="nav-desktop">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/aboutpage" className="nav-link">About</Link>
          <Link to="/servicepage" className="nav-link">Services</Link>
          <Link to="/eventspage" className="nav-link">Events</Link>
          <Link to="/book" className="nav-link">Dear Newbie</Link>
        </nav>

      
        <button
          className="menu-toggle"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <Link
            to="/"
            className="mobile-link"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/aboutpage"
            className="mobile-link"
            onClick={closeMenu}
          >
           About
          </Link>
          <Link
            to="/eventspage"
            className="mobile-link"
            onClick={closeMenu}
          >
            
            Events
          </Link>
          <Link
            to="/servicepage"
            className="mobile-link"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="/book"
            className="mobile-link"
            onClick={closeMenu}
          >
            
            Dear Newbie
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;  
