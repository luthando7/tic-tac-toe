import { useState } from "react";
import "./App.css";
import TicTacToe from "./game/tic-tac-toe";

function App() {
  const [game, setGame] = useState(new TicTacToe());

  const handleClick = (row: number, col: number) => {
    const currentGrid = [...game.grid];
    currentGrid[row][col] = game.turn === 1 ? 100 : 200;
    const updatedGame = new TicTacToe();
    updatedGame.grid = currentGrid;
    updatedGame.switchTurns();
    setGame(updatedGame);
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div className="container">
        <button className="cell" onClick={() => handleClick(0, 0)}>
          {game.grid[0][0] === 100 ? "X" : game.grid[0][0] === 200 ? "O" : ""}
        </button>
        <button className="cell" onClick={() => handleClick(0, 1)}>
          {game.grid[0][1] === 100 ? "X" : game.grid[0][1] === 200 ? "O" : ""}
        </button>
        <button className="cell" onClick={() => handleClick(0, 2)}>
          {game.grid[0][2] === 100 ? "X" : game.grid[0][2] === 200 ? "O" : ""}
        </button>
        <button className="cell" onClick={() => handleClick(1, 0)}>
          {game.grid[1][0] === 100 ? "X" : game.grid[1][0] === 200 ? "O" : ""}
        </button>
        <button className="cell" onClick={() => handleClick(1, 1)}>
          {game.grid[1][1] === 100 ? "X" : game.grid[1][1] === 200 ? "O" : ""}
        </button>
        <button className="cell" onClick={() => handleClick(1, 2)}>
          {game.grid[1][2] === 100 ? "X" : game.grid[1][2] === 200 ? "O" : ""}
        </button>
        <button className="cell" onClick={() => handleClick(2, 0)}>
          {game.grid[2][0] === 100 ? "X" : game.grid[2][0] === 200 ? "O" : ""}
        </button>
        <button className="cell" onClick={() => handleClick(2, 1)}>
          {game.grid[2][1] === 100 ? "X" : game.grid[2][1] === 200 ? "O" : ""}
        </button>
        <button className="cell" onClick={() => handleClick(2, 2)}>
          {game.grid[2][2] === 100 ? "X" : game.grid[2][2] === 200 ? "O" : ""}
        </button>
      </div>
    </div>
  );
}

export default App;
