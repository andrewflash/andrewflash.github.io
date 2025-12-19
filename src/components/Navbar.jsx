import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Cpu, Sun, Moon } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Apply theme
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [theme]);

  // Handle hash navigation after route change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleNavClick = (to) => {
    setIsOpen(false);
    if (!isHome) {
      navigate(`/#${to}`);
    }
  };

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Research', to: 'research' },
    { name: 'Skills', to: 'skills' },
    { name: 'Education', to: 'education' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-brand" onClick={() => isHome ? window.scrollTo({ top: 0, behavior: 'smooth' }) : navigate('/')} style={{ cursor: 'pointer' }}>
          <div className="brand-icon-wrapper">
            <Cpu size={24} color="white" />
          </div>
          <span className="brand-text">
            Andri<span className="brand-dot">Rahmadhani</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="nav-menu-desktop">
          {navLinks.map((link) => (
            isHome ? (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link"
              >
                {link.name}
              </ScrollLink>
            ) : (
              <RouterLink
                key={link.name}
                to={`/#${link.to}`}
                className="nav-link"
              >
                {link.name}
              </RouterLink>
            )
          ))}
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="mobile-actions">
          <button
            onClick={toggleTheme}
            className="theme-toggle mobile-theme-btn"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          <button
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="nav-menu-mobile">
          {navLinks.map((link) => (
            isHome ? (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsOpen(false)}
                className="mobile-link"
              >
                {link.name}
              </ScrollLink>
            ) : (
              <RouterLink
                key={link.name}
                to={`/#${link.to}`}
                onClick={() => setIsOpen(false)}
                className="mobile-link"
              >
                {link.name}
              </RouterLink>
            )
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
