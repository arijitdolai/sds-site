import { useState } from 'react';

// Simple normal distribution function
const generateNormalCurvePath = (mean, stdDev, width, height) => {
  const points = [];
  const scaleX = width / 100;
  const scaleY = height * 2.5; // Scale height for visibility
  
  for (let i = 0; i <= 100; i++) {
    const x = i;
    // Normal distribution formula
    const y = (1 / (stdDev * Math.sqrt(2 * Math.PI))) * 
              Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2));
    points.push(`${x * scaleX},${height - (y * scaleY)}`);
  }
  return `M ${points.join(' L ')}`;
};

export default function Playground() {
  // Visualizer State
  const [mean, setMean] = useState(50);
  const [stdDev, setStdDev] = useState(15);

  // Idea Generator State
  const [difficulty, setDifficulty] = useState('Beginner');
  const [domain, setDomain] = useState('Healthcare');
  const [projectIdea, setProjectIdea] = useState(null);

  // Chat State
  const [chatMessages, setChatMessages] = useState([{ role: 'bot', text: 'Hello! I am your AI Study Buddy. Ask me a data science question!' }]);
  const [chatInput, setChatInput] = useState('');
  const [apiKey, setApiKey] = useState('');

  const generateProject = () => {
    // Mock template generator
    setProjectIdea({
      title: `${difficulty} ${domain} Predictor`,
      problem: `Build a model to predict outcomes in the ${domain} sector.`,
      dataset: 'Kaggle open datasets',
      models: difficulty === 'Beginner' ? 'Linear Regression, Decision Trees' : 'Random Forest, XGBoost, Neural Networks',
      metrics: 'RMSE, F1-Score, Accuracy'
    });
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    
    const newMessages = [...chatMessages, { role: 'user', text: chatInput }];
    setChatMessages(newMessages);
    setChatInput('');

    setTimeout(() => {
      let botReply = 'That is an interesting data science topic! To get a real AI response, connect a valid API key.';
      if (chatInput.toLowerCase().includes('what is a p-value')) {
        botReply = 'A p-value measures the probability of obtaining the observed results, assuming that the null hypothesis is true.';
      }
      setChatMessages([...newMessages, { role: 'bot', text: botReply }]);
    }, 600);
  };

  return (
    <div className="container section">
      <h1 className="section-title">Interactive <span className="text-gradient">Hub</span></h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        {/* Interactive Distribution Visualizer */}
        <div className="card">
          <h2 style={{ marginBottom: '1rem' }}>Interactive Distribution Visualizer</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Adjust the Mean (μ) and Standard Deviation (σ) to see how the normal distribution curve changes.</p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
            <div style={{ flex: 1, minWidth: '250px' }}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Mean (μ): {mean}</label>
                <input 
                  type="range" min="10" max="90" value={mean} 
                  onChange={(e) => setMean(Number(e.target.value))}
                  style={{ width: '100%' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Standard Deviation (σ): {stdDev}</label>
                <input 
                  type="range" min="5" max="30" value={stdDev} 
                  onChange={(e) => setStdDev(Number(e.target.value))}
                  style={{ width: '100%' }}
                />
              </div>
            </div>
            
            <div style={{ flex: 1, minWidth: '300px', height: '200px', border: '1px solid var(--border-color)', borderRadius: '0.5rem', position: 'relative', overflow: 'hidden', background: 'var(--bg-page)' }}>
              <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="none">
                <path 
                  d={generateNormalCurvePath(mean, stdDev, 400, 200)} 
                  fill="none" 
                  stroke="var(--color-primary)" 
                  strokeWidth="4" 
                />
              </svg>
            </div>
          </div>
        </div>

        {/* AI Project Idea Generator */}
        <div className="card">
          <h2 style={{ marginBottom: '1rem' }}>AI Project Idea Generator</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Difficulty</label>
              <select 
                value={difficulty} 
                onChange={(e) => setDifficulty(e.target.value)}
                style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid var(--border-color)', background: 'var(--bg-page)', color: 'var(--text-main)' }}
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Domain</label>
              <select 
                value={domain} 
                onChange={(e) => setDomain(e.target.value)}
                style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid var(--border-color)', background: 'var(--bg-page)', color: 'var(--text-main)' }}
              >
                <option>Healthcare</option>
                <option>Finance</option>
                <option>Social Good</option>
                <option>NLP</option>
                <option>Computer Vision</option>
              </select>
            </div>
          </div>
          <button className="btn-primary" onClick={generateProject}>Generate Project</button>
          
          {projectIdea && (
            <div style={{ marginTop: '1.5rem', padding: '1.5rem', background: 'var(--bg-page)', borderLeft: '4px solid var(--color-secondary)', borderRadius: '0 0.5rem 0.5rem 0' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>{projectIdea.title}</h3>
              <p><strong>Problem:</strong> {projectIdea.problem}</p>
              <p><strong>Datasets:</strong> {projectIdea.dataset}</p>
              <p><strong>Recommended Models:</strong> {projectIdea.models}</p>
              <p><strong>Metrics:</strong> {projectIdea.metrics}</p>
            </div>
          )}
        </div>

        {/* Data Science AI Study Buddy */}
        <div className="card">
          <h2 style={{ marginBottom: '1rem' }}>AI Study Buddy (Mock)</h2>
          
          <div style={{ marginBottom: '1rem' }}>
            <input 
              type="password" 
              placeholder="Optional: Enter Gemini API Key for real responses" 
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid var(--border-color)', background: 'var(--bg-page)', color: 'var(--text-main)' }}
            />
          </div>

          <div style={{ 
            height: '250px', overflowY: 'auto', border: '1px solid var(--border-color)', 
            borderRadius: '0.5rem', padding: '1rem', marginBottom: '1rem', background: 'var(--bg-page)',
            display: 'flex', flexDirection: 'column', gap: '0.5rem'
          }}>
            {chatMessages.map((msg, i) => (
              <div key={i} style={{ 
                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                background: msg.role === 'user' ? 'var(--color-primary)' : 'var(--bg-section)',
                color: msg.role === 'user' ? 'white' : 'var(--text-main)',
                padding: '0.5rem 1rem',
                borderRadius: '1rem',
                maxWidth: '80%'
              }}>
                {msg.text}
              </div>
            ))}
          </div>

          <form onSubmit={handleChatSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
            <input 
              type="text" 
              value={chatInput} 
              onChange={(e) => setChatInput(e.target.value)} 
              placeholder="Type your question..."
              style={{ flex: 1, padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid var(--border-color)', background: 'var(--bg-page)', color: 'var(--text-main)' }}
            />
            <button type="submit" className="btn-primary">Send</button>
          </form>
        </div>

      </div>
    </div>
  );
}
