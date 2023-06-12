import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import BackButton from './backButton/backButton.components';
import Player from './player/player.components';
import Computer from './computer/computer.components';
import Reset from './resetButton/reset.components';
import Result from './result/result.component';
import Cookies from 'js-cookie';

import './gamePlay.styles.css';

const GamePlay = () => {
  let { idgame } = useParams();
  const userId = Cookies.get('userId');
  const [playerChoose, setPlayerChoose] = useState(null);
  const [compChoose, setCompChoose] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState({ playerScore: 0, computerScore: 0 });

  useEffect(() => {
    function handleResult() {
      if (playerChoose === compChoose) {
        return 'Draw!!';
      } else if (
        (playerChoose === 'batu' && compChoose === 'kertas') ||
        (playerChoose === 'kertas' && compChoose === 'gunting') ||
        (playerChoose === 'gunting' && compChoose === 'batu')
      ) {
        setScore((prevScore) => ({
          ...prevScore,
          computerScore: prevScore.computerScore + 1,
        }));
        return 'Computer Win';
      } else {
        setScore((prevScore) => ({
          ...prevScore,
          playerScore: prevScore.playerScore + 1,
        }));
        return 'Player Win';
      }
    }

    if (playerChoose !== null && compChoose !== null) {
      setResult(handleResult());
    }
  }, [playerChoose, compChoose]);

  useEffect(() => {
    async function sentScore() {
      try {
        const currentTime = new Date();
        const secondsWithinMinute = `${currentTime.getMinutes()} minutes ${currentTime.getSeconds()} seconds`;
        const response = await fetch(`https://api-apollo.niceblue.my.id/api/gamePlay/${idgame}/${userId}`, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            score: score.playerScore,
            time: secondsWithinMinute,
          }),
        });

        const data = await response.json();
        console.log(data);
      } catch (Error) {
        console.log(Error.message);
      }
    }
    sentScore();
  }, [score.playerScore, idgame, userId]);

  function handlePlayerChoose(choice) {
    if (playerChoose !== null) {
      alert('Game Over Please Click Restart Button');
      return;
    }
    setPlayerChoose(choice);
    setCompChoose(getComputerChoose());
  }

  function getComputerChoose() {
    const computerChoices = ['batu', 'kertas', 'gunting'];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
  }

  function handleReset() {
    setPlayerChoose(null);
    setCompChoose(null);
    setResult(null);
  }
  return (
    <>
      <div className="gameplay">
        <BackButton score={score} />
        <div className="container gamecontent">
          <div className="row d-flex justify-content-center text-center">
            <Player handlePlayerChoose={handlePlayerChoose} playerChoose={playerChoose} />
            <Result result={result} />
            <Computer compChoose={compChoose} />
          </div>
          <Reset handleReset={handleReset} />
        </div>
      </div>
    </>
  );
};

export default GamePlay;
