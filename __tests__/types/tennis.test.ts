import { POINTS, GamePoints, Match, Player, PlayerKey, Set } from '../../app/types/tennis';

describe('Tennis Types', () => {
  test('Player interface should be correctly typed', () => {
    const player: Player = {
      name: 'Rafael Nadal',
      avatar: 'rafael.jpg'
    };
    
    expect(player.name).toBe('Rafael Nadal');
    expect(player.avatar).toBe('rafael.jpg');
    
    // Test optional avatar
    const playerNoAvatar: Player = {
      name: 'Roger Federer'
    };
    
    expect(playerNoAvatar.name).toBe('Roger Federer');
    expect(playerNoAvatar.avatar).toBeUndefined();
  });

  test('GamePoints interface should be correctly typed', () => {
    const gamePoints: GamePoints = {
      player1: 2, // 30
      player2: 3  // 40
    };
    
    expect(gamePoints.player1).toBe(2);
    expect(gamePoints.player2).toBe(3);
  });

  test('Set interface should be correctly typed', () => {
    const set: Set = {
      player1: 6,
      player2: 4
    };
    
    expect(set.player1).toBe(6);
    expect(set.player2).toBe(4);
  });

  test('Match interface should be correctly typed', () => {
    const match: Match = {
      sets: [
        { player1: 6, player2: 4 },
        { player1: 7, player2: 6 }
      ],
      currentSet: 1,
      points: { player1: 0, player2: 0 },
      matchWinner: 'player1'
    };
    
    expect(match.sets.length).toBe(2);
    expect(match.currentSet).toBe(1);
    expect(match.points.player1).toBe(0);
    expect(match.matchWinner).toBe('player1');
  });

  test('PlayerKey type should only accept valid values', () => {
    const player1: PlayerKey = 'player1';
    const player2: PlayerKey = 'player2';
    
    expect(player1).toBe('player1');
    expect(player2).toBe('player2');
    
    // TypeScript compilation error if uncommented:
    // const invalidPlayer: PlayerKey = 'player3';
  });

  test('POINTS constant should have correct values', () => {
    expect(POINTS).toEqual(['0', '15', '30', '40', 'Adv']);
    expect(POINTS.length).toBe(5);
    expect(POINTS[0]).toBe('0');
    expect(POINTS[1]).toBe('15');
    expect(POINTS[2]).toBe('30');
    expect(POINTS[3]).toBe('40');
    expect(POINTS[4]).toBe('Adv');
  });
});
