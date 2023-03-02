import { ChessColor } from '../../helpers/enums/chessColor';

export interface ChessMove {
  from: number;
  to: number;
}

export class ChessPiece {
  private indexBoard: boolean[];

  constructor(
    public readonly letter: string,
    public readonly color: ChessColor,
    boardSize: number,
    private pieceIndexes: number[],
  ) {
    this.indexBoard = new Array(boardSize * boardSize).fill(false);
    pieceIndexes.forEach((idx) => (this.indexBoard[idx] = true));
  }

  makeMove({ from, to }: ChessMove) {
    if (!this.pieceIndexes.includes(from) || this.pieceIndexes.includes(to))
      throw new Error('Invalid move');

    this.indexBoard[from] = false;
    this.indexBoard[to] = true;

    this.pieceIndexes = [
      ...this.pieceIndexes.filter((idx) => idx !== from),
      to,
    ];
  }
}
