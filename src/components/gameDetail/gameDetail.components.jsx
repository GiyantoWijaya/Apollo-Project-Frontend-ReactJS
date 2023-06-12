import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

import TableGameDetail from "./table/table.components";

import "./gameDetail.styles.css";

const GameDetail = () => {
  return (
    <>
      <div className="container">
        <div className="titlegamedetail">
          <h1 className="trophy">
            <FontAwesomeIcon icon={faTrophy} />
          </h1>
          <h1 className="text-center title">Leaderboard</h1>
        </div>
        <div className="data-table">
          <TableGameDetail />
        </div>
      </div>
    </>
  );
};

export default GameDetail;
