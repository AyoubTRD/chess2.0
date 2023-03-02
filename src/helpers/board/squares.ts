export function getSquareFromIndex(index: number, boardSize = 8): string {
  return (
    String.fromCharCode(97 + Math.floor(index % boardSize)) +
    (Math.floor(index / boardSize) + 1).toString()
  );
}

export function getIndexFromSquare(square: string, boardSize = 8): number {
  return (
    boardSize * (parseInt(square.slice(1)) - 1) + (square.charCodeAt(0) - 97)
  );
}
