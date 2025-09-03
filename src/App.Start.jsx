import React from 'react'

// Start component receives an onStart prop from App.jsx
export default function Start({ onStart }) {
  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>Rock Paper Scissors</h1>
      <button onClick={onStart} style={{ fontSize: "1.5rem", padding: "1rem 2rem", cursor: "pointer" }}>
        Start Game
      </button>
    </div>
  );
}

