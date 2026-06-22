export default function PresidentMessage() {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ 
          width: '120px', 
          height: '120px', 
          borderRadius: '50%', 
          background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
          margin: '0 auto 1.5rem auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '3rem',
          fontWeight: 'bold',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}>
          VR
        </div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Vaibhav Raj</h3>
        <p style={{ color: 'var(--color-primary)', fontWeight: '600' }}>President, Society for Data Science</p>
      </div>
      <div style={{ flex: 1, borderLeft: '4px solid var(--color-primary)', paddingLeft: '1.5rem' }}>
        <p style={{ fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
          "Data science is not just about crunching numbers; it's about uncovering the stories hidden within them to drive meaningful impact. 
          At SDS, we strive to build a community where curiosity meets technical excellence."
        </p>
      </div>
    </div>
  );
}
