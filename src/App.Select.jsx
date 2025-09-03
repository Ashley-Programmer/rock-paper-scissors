import React from 'react'

// Select component => receives onSelect prop from App.jsx
export default function Select({ onSelect }) {
  const choices = ["rock", "paper", "scissors"]; // list of choices

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h2>Choose your move:</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "2rem" }}>
        {choices.map((choice) => (
          <button 
            key={choice}
            onClick={() => onSelect(choice)} // Notify parent of the user's choice
            style={{ 
              fontSize: "1.25rem", padding: "1rem 2rem", textTransform: "capitalize", cursor: "pointer" 
            }}
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
}