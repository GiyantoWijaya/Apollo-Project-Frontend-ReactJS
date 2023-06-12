import { NavLink } from 'react-router-dom';
import './backButton.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';

const BackButton = ({ score }) => {
  return (
    <>
      <div className="mx-4">
        <NavLink to="/home" className="backtohome">
          <h1 className="d-inline nav">
            <FontAwesomeIcon icon={faCaretLeft} /> Back to home
          </h1>
        </NavLink>
      </div>
      <div className="text-center score">
        <h1 className="scorepoint">
          SCORE POINT <br />
        </h1>
        <h2 className="point">
          <span className="playerpoint">PLAYER : {score.playerScore} </span>
          <hr />
          <span className="computerpoint">COMPUTER : {score.computerScore}</span>
        </h2>
      </div>
    </>
  );
};

export default BackButton;
