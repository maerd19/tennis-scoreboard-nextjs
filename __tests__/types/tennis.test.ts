import {
  Player,
  GamePoints,
  Set,
  PointValue,
  PlayerId,
  MatchWinner,
  Match,
  TennisActionType,
  ScorePointAction,
  ResetMatchAction,
  TennisAction
} from '../../app/types/tennis';

describe('Tennis Types', () => {
  describe('Player interface', () => {
    it('should correctly type a player with required fields', () => {
      const player: Player = {
        name: 'Roger Federer'
      };
      expect(player.name).toBe('Roger Federer');
    });

    it('should correctly type a player with optional fields', () => {
      const player: Player = {
        name: 'Rafael Nadal',
        avatar: 'nadal.jpg'
      };
      expect(player.name).toBe('Rafael Nadal');
      expect(player.avatar).toBe('nadal.jpg');
    });
  });

  describe('GamePoints interface', () => {
    it('should correctly type game points', () => {
      const points: GamePoints = {
        player1: 0,
        player2: 0
      };
      expect(points.player1).toBe(0);
      expect(points.player2).toBe(0);
    });

    it('should allow changing point values', () => {
      const points: GamePoints = {
        player1: 0,
        player2: 0
      };
      
      points.player1 = 1;
      points.player2 = 2;
      
      expect(points.player1).toBe(1);
      expect(points.player2).toBe(2);
    });
  });

  describe('Set interface', () => {
    it('should correctly type a set', () => {
      const set: Set = {
        player1: 0,
        player2: 0
      };
      expect(set.player1).toBe(0);
      expect(set.player2).toBe(0);
    });

    it('should allow changing set values', () => {
      const set: Set = {
        player1: 0,
        player2: 0
      };
      
      set.player1 = 6;
      set.player2 = 4;
      
      expect(set.player1).toBe(6);
      expect(set.player2).toBe(4);
    });
  });

  describe('PointValue type', () => {
    it('should allow valid point values', () => {
      const points: PointValue[] = ['0', '15', '30', '40', 'Adv'];
      expect(points).toContain('0');
      expect(points).toContain('15');
      expect(points).toContain('30');
      expect(points).toContain('40');
      expect(points).toContain('Adv');
    });
  });

  describe('PlayerId type', () => {
    it('should allow valid player ids', () => {
      const playerIds: PlayerId[] = ['player1', 'player2'];
      expect(playerIds).toContain('player1');
      expect(playerIds).toContain('player2');
    });
  });

  describe('MatchWinner type', () => {
    it('should allow valid match winners', () => {
      const winners: MatchWinner[] = ['Player 1', 'Player 2', null];
      expect(winners).toContain('Player 1');
      expect(winners).toContain('Player 2');
      expect(winners).toContain(null);
    });
  });

  describe('Match interface', () => {
    it('should correctly type a match', () => {
      const match: Match = {
        sets: [{ player1: 0, player2: 0 }],
        currentSet: 0,
        points: { player1: 0, player2: 0 },
        matchWinner: null
      };
      
      expect(match.sets).toHaveLength(1);
      expect(match.currentSet).toBe(0);
      expect(match.points.player1).toBe(0);
      expect(match.points.player2).toBe(0);
      expect(match.matchWinner).toBeNull();
    });

    it('should allow changing match state', () => {
      const match: Match = {
        sets: [{ player1: 0, player2: 0 }],
        currentSet: 0,
        points: { player1: 0, player2: 0 },
        matchWinner: null
      };
      
      match.sets.push({ player1: 6, player2: 4 });
      match.currentSet = 1;
      match.points = { player1: 30, player2: 15 };
      match.matchWinner = 'Player 1';
      
      expect(match.sets).toHaveLength(2);
      expect(match.currentSet).toBe(1);
      expect(match.points.player1).toBe(30);
      expect(match.points.player2).toBe(15);
      expect(match.matchWinner).toBe('Player 1');
    });
  });

  describe('TennisActions', () => {
    it('should correctly type a score point action', () => {
      const action: ScorePointAction = {
        type: TennisActionType.SCORE_POINT,
        payload: {
          scorer: 'player1'
        }
      };
      
      expect(action.type).toBe(TennisActionType.SCORE_POINT);
      expect(action.payload.scorer).toBe('player1');
    });

    it('should correctly type a reset match action', () => {
      const action: ResetMatchAction = {
        type: TennisActionType.RESET_MATCH
      };
      
      expect(action.type).toBe(TennisActionType.RESET_MATCH);
    });

    it('should allow TennisAction to be either ScorePointAction or ResetMatchAction', () => {
      const actions: TennisAction[] = [
        {
          type: TennisActionType.SCORE_POINT,
          payload: {
            scorer: 'player2'
          }
        },
        {
          type: TennisActionType.RESET_MATCH
        }
      ];
      
      expect(actions[0].type).toBe(TennisActionType.SCORE_POINT);
      expect((actions[0] as ScorePointAction).payload.scorer).toBe('player2');
      
      expect(actions[1].type).toBe(TennisActionType.RESET_MATCH);
    });
  });
});
