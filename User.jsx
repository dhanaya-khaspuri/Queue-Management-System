function User({ tokens, onGenerate }) {
  const myToken = tokens.length > 0 ? tokens[tokens.length - 1] : "--";
  const nowServing = tokens.length > 0 ? tokens[0] : "0";

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>QueueLess</h1>

      <div className="dashboard-grid">
        <div className="stat-card">
          <p className="stat-label">Now Serving</p>
          <p className="stat-value">{nowServing}</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">In Queue</p>
          <p className="stat-value">{tokens.length}</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Est. Wait</p>
          <p className="stat-value">{tokens.length * 5}m</p>
        </div>
      </div>

      <div className="main-token-card">
        <p className="stat-label">Your Token</p>
        <h1 className="stat-value" style={{ fontSize: '5rem' }}>A{myToken.toString().padStart(3, '0')}</h1>
        <button className="generate-btn" onClick={onGenerate}>
          Join Queue
        </button>
      </div>
    </div>
  );
}