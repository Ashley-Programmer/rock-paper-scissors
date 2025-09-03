/* eslint-disable react/prop-types */
const RELATIONSHIPS = {
  rock: {
    win: "scissors",
    lose: "paper",
  },
  paper: {
    win: "rock",
    lose: "scissors",
  },
  scissors: {
    win: "paper",
    lose: "rock",
  },
};

export function calcWinner(player, opponent) {
  if (player === opponent) return "draw";
  if (RELATIONSHIPS[player].win === opponent) return "win";
  return "lose";
};

// Message for all results
const resultMessages = {
  win: "You Win",
  lose: "You Lose",
  draw: "It's a Draw"
};

const capitalize = (word) => word ? word.charAt(0).toUpperCase() + word.slice(1) : "";

const calcMessage = (player, opponent, status) => {
  if (status === "Draw") return `Both chose ${player}`;
  if (status === "Win") return `${player} beats ${opponent}`;
  return `${opponent} beats ${player}`;
};

/**
 * Shows the result
 *
 * @param {object} props
 * @param {'rock' | 'paper' | 'scissors'} props.player
 * @param {'rock' | 'paper' | 'scissors'} props.opponent
 */
export default function Result({ userChoice, computerChoice, result, onReplay }) {
  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h2>{resultMessages[result]}</h2>
      <div style={{ margin: "2rem 0" }}>
        <p>
          <strong>Your Choice:</strong> {capitalize(userChoice)}
        </p>
        <p>
          <strong>Computer's Choice:</strong> {capitalize(computerChoice)}
        </p>
      </div>
      <button
        onClick={onReplay}
        style={{
          fontSize: "1.25rem",
          padding: "1rem 2rem",
          marginTop: "1rem",
          cursor: "pointer"
        }}
      >
        Play Again
      </button>
    </div>
  );
};
