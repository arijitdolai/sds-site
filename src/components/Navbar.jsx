import { useState } from 'react';

export default function Navbar({ theme, toggleTheme, activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About Us', id: 'about' },
    { name: 'Events', id: 'events' },
    { name: 'Sponsors', id: 'sponsors' },
    { name: 'Executive Roles', id: 'roles' }
  ];

  const handleNavClick = (id) => {
    if (activePage !== 'Home') {
      setActivePage('Home');
      // Wait for Home to mount
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div 
          className="logo text-gradient" 
          style={{ fontSize: '1.75rem', fontWeight: '800', cursor: 'pointer' }}
          onClick={() => setActivePage('Home')}
        >
          SDS
        </div>
        
        <div className="nav-links desktop">
          {navLinks.map(link => (
            <button key={link.id} onClick={() => handleNavClick(link.id)} style={{ fontSize: '1rem', fontWeight: '500' }}>
              {link.name}
            </button>
          ))}
          <button 
            className="btn-primary"
            onClick={() => setActivePage('Playground')}
          >
            Interactive Hub
          </button>
          
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <button key={link.id} onClick={() => handleNavClick(link.id)} style={{ fontSize: '1.1rem', padding: '0.5rem 0', textAlign: 'left' }}>
            {link.name}
          </button>
        ))}
        <button 
          className="btn-primary"
          style={{ marginTop: '0.5rem', width: '100%' }}
          onClick={() => {
            setActivePage('Playground');
            setMobileMenuOpen(false);
          }}
        >
          Interactive Hub
        </button>
        <button onClick={toggleTheme} className="theme-toggle" style={{ marginTop: '0.5rem', justifyContent: 'flex-start' }}>
          {theme === 'light' ? 'Switch to Dark Mode 🌙' : 'Switch to Light Mode ☀️'}
        </button>
      </div>
    </nav>
  );
}
