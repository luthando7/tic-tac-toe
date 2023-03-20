class TicTacToe {
  public grid: Array<Array<number>>;
  public playerOne: string;
  public playerTwo: string;
  public turn: number;

  constructor() {
    this.grid = [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ];
    this.playerOne = "X";
    this.playerTwo = "O";
    this.turn = 1;
  }

  checkTurn(): number {
    return this.turn;
  }

  play(move: Array<number>): void {
    if (this.turn === 1) {
      this.grid[move[0]][move[1]] = 100;
    } else if (this.turn === 2) {
      this.grid[move[0]][move[1]] = 200;
    }
  }

  switchTurns(): void {
    if (this.turn === 1) {
      this.turn = 2;
      return;
    }
    if (this.turn === 2) {
      this.turn = 1;
      return;
    } else {
      throw new Error(`Invalid turn number: ${this.turn}`);
    }
  }

  checkWin(): string {
    const rows = this.grid;
    const cols = [
      [this.grid[0][0], this.grid[1][0], this.grid[2][0]],
      [this.grid[0][1], this.grid[1][1], this.grid[2][1]],
      [this.grid[0][2], this.grid[1][2], this.grid[2][2]],
    ];
    const diagonals = [
      [this.grid[0][0], this.grid[1][1], this.grid[2][2]],
      [this.grid[0][2], this.grid[1][1], this.grid[2][0]],
    ];

    const lines = [...rows, ...cols, ...diagonals];

    for (const line of lines) {
      const sum = line.reduce((acc, curr) => acc + curr);
      if (sum === 300) {
        return this.playerOne;
      } else if (sum === 600) {
        return this.playerTwo;
      }
    }

    return "";
  }
}

export default TicTacToe;
