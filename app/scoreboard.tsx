'use client';
import { useState } from 'react';

const POINTS = ['0', '15', '30', '40', 'Adv'];

export default function Scoreboard() {
  const [sets, setSets] = useState([{ player1: 0, player2: 0 }]);
  const [currentSet, setCurrentSet] = useState(0);
  const [points, setPoints] = useState({ player1: 0, player2: 0 });
  const [matchWinner, setMatchWinner] = useState(null);

  const handleScore = (scorer) => {
    if (matchWinner) return;

    const opponent = scorer === 'player1' ? 'player2' : 'player1';
    let p1 = points.player1;
    let p2 = points.player2;

    // Convert current points
    if (POINTS[p1] === '40' && POINTS[p2] === '40') {
      if (scorer === 'player1') {
        if (POINTS[p1] === 'Adv') {
          winGame('player1');
        } else if (POINTS[p2] === 'Adv') {
          setPoints({ player1: 3, player2: 3 }); // back to deuce
        } else {
          setPoints({ player1: 4, player2: 3 }); // Adv player1
        }
      } else {
        if (POINTS[p2] === 'Adv') {
          winGame('player2');
        } else if (POINTS[p1] === 'Adv') {
          setPoints({ player1: 3, player2: 3 }); // back to deuce
        } else {
          setPoints({ player1: 3, player2: 4 }); // Adv player2
        }
      }
      return;
    }

    if (points[scorer] < 3) {
      setPoints({ ...points, [scorer]: points[scorer] + 1 });
    } else if (points[scorer] === 3 && points[opponent] < 3) {
      winGame(scorer);
    } else if (points[scorer] === 3 && points[opponent] === 4) {
      // opponent has adv, back to deuce
      setPoints({ player1: 3, player2: 3 });
    } else if (points[scorer] === 3 && points[opponent] === 3) {
      // move to adv
      setPoints({ ...points, [scorer]: 4 });
    } else if (points[scorer] === 4) {
      // win game from adv
      winGame(scorer);
    }
  };

  const winGame = (scorer) => {
    const updatedSets = [...sets];
    updatedSets[currentSet][scorer] += 1;

    const p1Games = updatedSets[currentSet].player1;
    const p2Games = updatedSets[currentSet].player2;

    // Check for set winner
    const isSetWon =
      (p1Games >= 6 || p2Games >= 6) && Math.abs(p1Games - p2Games) >= 2;

    if (isSetWon) {
      if (checkMatchWin(updatedSets)) return;

      // Start new set
      updatedSets.push({ player1: 0, player2: 0 });
      setCurrentSet(currentSet + 1);
    }

    setSets(updatedSets);
    setPoints({ player1: 0, player2: 0 });
  };

  const checkMatchWin = (updatedSets) => {
    const p1Sets = updatedSets.filter((s) => s.player1 > s.player2).length;
    const p2Sets = updatedSets.filter((s) => s.player2 > s.player1).length;

    if (p1Sets === 2) {
      setMatchWinner('Player 1');
      return true;
    }
    if (p2Sets === 2) {
      setMatchWinner('Player 2');
      return true;
    }
    return false;
  };

  const resetMatch = () => {
    setSets([{ player1: 0, player2: 0 }]);
    setCurrentSet(0);
    setPoints({ player1: 0, player2: 0 });
    setMatchWinner(null);
  };

  const renderSetScores = () =>
    sets.map((set, index) => (
      <div key={index}>
        <strong>Set {index + 1}:</strong> Player 1: {set.player1} – Player 2:{' '}
        {set.player2}
      </div>
    ));

  const renderMatchWinner = () => {
    if (!matchWinner) return null;

    return (
      <div>
        <h2>Ganador del partido</h2>
        <p>{matchWinner === 'Player 1' ? 'Player 1' : 'Player 2'}</p>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      {matchWinner && renderMatchWinner()}
      <h1>Tennis Match Scoreboard</h1>

      <div>
        <h2>Current Game</h2>
        <p>Player 1: {POINTS[points.player1] || '0'}</p>
        <p>Player 2: {POINTS[points.player2] || '0'}</p>
      </div>

      <div>
        <h2>Set Scores</h2>
        {renderSetScores()}
      </div>

      <div style={styles.controls}>
        <button onClick={() => handleScore('player1')} disabled={!!matchWinner}>
          Player 1 Scores
        </button>

        <button onClick={() => handleScore('player2')} disabled={!!matchWinner}>
          Player 2 Scores
        </button>
        <button onClick={resetMatch}>Reset Match</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
  },
  controls: {
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
};
