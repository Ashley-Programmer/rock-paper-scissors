import React, { useState } from 'react';
import Start from "./App.Start";
import Select from "./App.Result";

const choices = ["rock", "paper", "scissors"];

function getResult(user, computer) { // function to determine game result(s)
  if (user === computer) return "draw"; // draw if both choices are the same
  if (
    (user === "rock" && computer === "scissors") || (user === "paper" && computer === "rock") ||
    (user === "scissors" && "paper")
  ) 
  {return "win"}
  return "lose";
}

export default function App() {
  const [phase, setPhase] = useState("start"); // state to track current phase: "start" | "select" | "result"
  const [userChoice, setUserChoice] = useState(null); // => track user's choice
  const [computerChoice, setComputerChoice] = useState(null); // => track computer's choice
  const [result, setResult] = useState(null); // => track results

  // game starting handler
  const handleStart = () => {
    setPhase("select"); // select phase on game start
    setUserChoice(null); // resets user choice
    setComputerChoice(null); 
    setResult(null); 
  };

  // handler for user's selection
  const handleSelect = (choice) => {
    const comp = choices[Math.floor(Math.random() * choices.length)]; // random comp choice
    setUserChoice(choice); // save user's choice
    setComputerChoice(comp);
    setResult(getResult(choice, comp)); // determine & save result
    setPhase("result"); // result phase
  };

  const handleReplay = () => { // handler for game replay
    setPhase("select"); // back to selection phase
    setUserChoice(null);
    setComputerChoice(null)
    setResult(null);
  };

  return (
    <div>
      {phase === "start" && <Start onStart={handleStart} />}
      {phase === "select" && <Select onStart={handleSelect} />}
      {phase === "result" && (
        <Result userChoice={userChoice} computerChoice={computerChoice} result={result} 
        onReplay={handleReplay} />
      )};
    </div>
  );
}
