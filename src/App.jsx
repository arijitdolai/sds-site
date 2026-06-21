import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Playground from './pages/Playground';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  const [activePage, setActivePage] = useState('Home');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app-container">
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        activePage={activePage} 
        setActivePage={setActivePage} 
      />
      <main>
        {activePage === 'Home' ? <Home setActivePage={setActivePage} /> : <Playground />}
      </main>
      
      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid var(--border-color)', marginTop: '4rem', color: 'var(--text-muted)' }}>
        <p>&copy; {new Date().getFullYear()} Society for Data Science. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
