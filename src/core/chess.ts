import {
  getIndexFromSquare,
  getSquareFromIndex,
} from '../helpers/board/squares';
import { ChessColor } from '../helpers/enums/chessColor';
import { ChessPiece } from './pieces/piece';

export interface ChessConfig {
  position: string;
  pieces: ChessPiece[];
  boardSize: number;
}

export const defaultConfig: ChessConfig = {
  position: 'k',
  pieces: [
    new ChessPiece('k', ChessColor.w, 8, [getIndexFromSquare('e1')]),
    new ChessPiece('k', ChessColor.b, 8, [getIndexFromSquare('e8')]),
  ],
  boardSize: 8,
};

export class Chess {
  private pieces: ChessPiece[];

  private currentPlayer = ChessColor.w;

  constructor(config: Partial<ChessConfig> = {}) {
    const { pieces } = { ...defaultConfig, ...config };

    this.pieces = pieces;
  }

  makeMove(move: string) {}
}
