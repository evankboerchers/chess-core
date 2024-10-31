export type BoardSquare = Piece | null;

export type Board = BoardSquare[][];

export enum PieceColour {
  WHITE = "white",
  BLACK = "black",
}

export enum PieceType {
  KING = "king",
  QUEEN = "queen",
  ROOK = "rook",
  BISHOP = "bishop",
  KNIGHT = "knight",
  PAWN = "pawn",
}

export interface Piece {
  colour: PieceColour;
  type: PieceType;
}

export interface Position {
  row: number;
  col: number;
}

export interface Move {
  piece: Piece;
  from: Position;
  to: Position;
  capturedPiece?: Piece;
  promotionType?: Piece;
  castle?: boolean;
}

export interface ColourState {
  kingSide: boolean;
  queenSide: boolean;
}

export interface GameState {
  board: Board;
  currentTurn: PieceColour;
  castlePrivileges: {
    [PieceColour.WHITE]: ColourState
    [PieceColour.BLACK]: ColourState
  };
  history: Move[];
}
