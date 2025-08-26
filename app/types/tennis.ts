/**
 * Interfaces para la aplicación de marcador de tenis
 */

/**
 * Representa un jugador en el partido
 */
export interface Player {
  name: string;
  avatar?: string;
}

/**
 * Puntos dentro de un juego (game) de tenis
 */
export interface GamePoints {
  player1: number;
  player2: number;
}

/**
 * Juegos (games) ganados dentro de un set
 */
export interface Set {
  player1: number;
  player2: number;
}

/**
 * Estado completo de un partido de tenis
 */
export interface Match {
  sets: Set[];
  currentSet: number;
  points: GamePoints;
  matchWinner: string | null;
}

/**
 * Tipo para identificar a un jugador
 */
export type PlayerKey = 'player1' | 'player2';

/**
 * Valores posibles para los puntos en tenis
 */
export const POINTS = ['0', '15', '30', '40', 'Adv'];

/**
 * Props para el componente ScoreDisplay
 */
export interface ScoreDisplayProps {
  points: GamePoints;
}

/**
 * Props para el componente SetHistory
 */
export interface SetHistoryProps {
  sets: Set[];
}

/**
 * Props para el componente PlayerControls
 */
export interface PlayerControlsProps {
  onPlayerScore: (player: PlayerKey) => void;
  onReset: () => void;
  matchWinner: string | null;
}

/**
 * Props para el componente MatchResult
 */
export interface MatchResultProps {
  winner: string | null;
}
