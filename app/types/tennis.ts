/**
 * Represents a player in a tennis match
 */
export interface Player {
  name: string;
  avatar?: string;
}

/**
 * Represents the points in a tennis game
 * 0, 15, 30, 40, Adv
 */
export interface GamePoints {
  player1: number;
  player2: number;
}

/**
 * Represents the games won in a set
 */
export interface Set {
  player1: number;
  player2: number;
}

/**
 * Valid point values in tennis
 */
export type PointValue = '0' | '15' | '30' | '40' | 'Adv';

/**
 * Represents a player identifier
 */
export type PlayerId = 'player1' | 'player2';

/**
 * Represents the winner of a match
 */
export type MatchWinner = 'Player 1' | 'Player 2' | null;

/**
 * Represents a tennis match state
 */
export interface Match {
  sets: Set[];
  currentSet: number;
  points: GamePoints;
  matchWinner: MatchWinner;
}

/**
 * Action types for tennis match
 */
export enum TennisActionType {
  SCORE_POINT = 'SCORE_POINT',
  RESET_MATCH = 'RESET_MATCH',
}

/**
 * Score point action
 */
export interface ScorePointAction {
  type: TennisActionType.SCORE_POINT;
  payload: {
    scorer: PlayerId;
  };
}

/**
 * Reset match action
 */
export interface ResetMatchAction {
  type: TennisActionType.RESET_MATCH;
}

/**
 * Union type of all possible tennis actions
 */
export type TennisAction = ScorePointAction | ResetMatchAction;
