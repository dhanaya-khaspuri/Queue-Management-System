import { useState } from 'react';
import './App.css';

function App() {
  const [tokens, setTokens] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const generateToken = () => {
    // If empty, start at 1. Otherwise, take last token + 1
    const newNumber = tokens.length > 0 ? tokens[tokens.length - 1] + 1 : 1;
    setTokens([...tokens, newNumber]);
  };

  const passToken = () => {
    // Remove the first item in the array
    setTokens(tokens.slice(1));
  };

  return (
    <div className="app-wrapper">
      <div className="nav-container">
        <button 
          className={`nav-btn ${!isAdmin ? 'active' : ''}`} 
          onClick={() => setIsAdmin(false)}
        >
          User View
        </button>
        <button 
          className={`nav-btn ${isAdmin ? 'active' : ''}`} 
          onClick={() => setIsAdmin(true)}
        >
          Admin View
        </button>
      </div>

      <div className="main-card">
        {!isAdmin ? (
          /* USER VIEW */
          <>
            <h1>Queue</h1>
            <p>Click below to join the virtual line</p>
            
            {tokens.length > 0 && (
              <div className="token-circle">
                #{tokens[tokens.length - 1]}
              </div>
            )}
            
            <button className="btn-action btn-generate" onClick={generateToken}>
              Generate Token
            </button>
            
            {tokens.length > 0 && (
              <p style={{ marginTop: '15px', fontSize: '0.9rem' }}>
                Currently Serving: <strong>#{tokens[0]}</strong>
              </p>
            )}
          </>
        ) : (
          /* ADMIN VIEW */
          <>
            <h1>Admin Panel</h1>
            <p>Manage the current queue</p>
            
            <div className="token-circle" style={{ borderColor: 'var(--danger-color)', color: 'var(--danger-color)' }}>
              {tokens.length > 0 ? `#${tokens[0]}` : '--'}
            </div>
            
            <button 
              className="btn-action btn-pass" 
              onClick={passToken}
              disabled={tokens.length === 0}
            >
              Mark as Passed
            </button>
            
            <p style={{ marginTop: '15px' }}>
              Remaining in queue: {tokens.length > 0 ? tokens.length - 1 : 0}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;