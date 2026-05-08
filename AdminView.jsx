function AdminView({ tokens, onPass }) {
  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      <div className="card">
        <h2>Currently Serving</h2>
        <h1 className="token-display">
          {tokens.length > 0 ? `#${tokens[0]}` : "No Queue"}
        </h1>
        
        <button className="pass-btn" onClick={onPass} disabled={tokens.length === 0}>
          Mark as Passed / Next
        </button>
      </div>

      <div className="queue-list">
        <h3>Waiting Queue:</h3>
        {tokens.slice(1).map(t => (
          <span key={t} className="badge">#{t}</span>
        ))}
      </div>
    </div>
  );
}
export default AdminView;