import PresidentMessage from '../components/PresidentMessage';
import FAQAccordion from '../components/FAQAccordion';
import '../index.css';

export default function Home({ setActivePage }) {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="section" style={{ textAlign: 'center', padding: '6rem 1rem', background: 'var(--bg-section)' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            Society for <span className="text-gradient">Data Science</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            Empowering students to explore, learn, and innovate in the world of machine learning, analytics, and artificial intelligence.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => document.getElementById('roles')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Roles
            </button>
            <button 
              className="btn-primary" 
              style={{ background: 'transparent', border: '2px solid var(--color-primary)', color: 'var(--color-primary)' }}
              onClick={() => setActivePage('Playground')}
            >
              Try Playground
            </button>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="section container">
        <h2 className="section-title">About Us</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="card">
            <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Our Mission</h3>
            <p style={{ color: 'var(--text-muted)' }}>To cultivate a robust community of data practitioners by offering hands-on workshops, mentorship, and opportunities to solve real-world problems.</p>
          </div>
          <div className="card">
            <h3 style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>Domains</h3>
            <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
              <li style={{ marginBottom: '0.5rem' }}>Machine Learning</li>
              <li style={{ marginBottom: '0.5rem' }}>Data Analytics & Visualization</li>
              <li style={{ marginBottom: '0.5rem' }}>Artificial Intelligence</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="by-the-numbers" style={{ marginBottom: '1rem' }}>By The Numbers</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>100+</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Members</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>10+</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Events/Yr</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="section" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <h2 className="section-title">Flagship Events</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {['Data Science Summit', 'AI Bootcamp', 'Industry Speakers'].map((event, i) => (
              <div key={i} className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ 
                  background: 'var(--color-primary)', 
                  color: 'white', 
                  padding: '1rem', 
                  borderRadius: '0.5rem',
                  fontWeight: 'bold',
                  minWidth: '80px',
                  textAlign: 'center'
                }}>
                  {i + 1}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{event}</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Join us for an immersive experience connecting students with data-driven challenges.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Roles */}
      <section id="roles" className="section container">
        <h2 className="section-title">Executive Roles</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {[
            { role: 'President', desc: 'Vaibhav Raj', icon: '👑' },
            { role: 'Vice Presidents', desc: 'Himanshu Pravansh, Shanvi Vats', icon: '⚡' },
            { role: 'Directors', desc: 'Lakshay Mittal, Devashish Komiya', icon: '💻' },
            { role: 'General Secretary', desc: 'Vedant Pasari', icon: '📊' }
          ].map((item, i) => (
            <div key={i} className="card" style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '60px', height: '60px', borderRadius: '50%', 
                background: 'var(--bg-page)', border: '2px solid var(--border-color)',
                margin: '0 auto 1rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem'
              }}>
                {item.icon}
              </div>
              <h3 style={{ marginBottom: '0.5rem' }}>{item.role}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* President's Message */}
      <section className="section" style={{ background: 'var(--bg-section)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title">A Message From the President</h2>
          <PresidentMessage />
        </div>
      </section>

      {/* Sponsors */}
      <section id="sponsors" className="section container" style={{ textAlign: 'center' }}>
        <h2 className="section-title">Our Sponsors</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4rem', opacity: 0.6 }}>
          {['UNSTOP', 'ADROSONIC', 'AIMERZ.AI', 'GEEKSFORGEEKS'].map((sponsor, i) => (
            <div key={i} style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-muted)', letterSpacing: '1px' }}>
              {sponsor.toUpperCase()}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--bg-section)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <FAQAccordion />
        </div>
      </section>
    </div>
  );
}
