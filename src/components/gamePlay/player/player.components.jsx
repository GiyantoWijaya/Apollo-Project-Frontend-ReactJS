import "./player.styles.css";

const Player = ({ handlePlayerChoose, playerChoose }) => {
  return (
    <>
      <div className="col-lg-2 my-auto mx-auto">
        <h1 className="mb-5 title">PLAYER</h1>
        <div id="player">
          <img
            src="/img/batu.png"
            data-type="batu"
            className={playerChoose === "batu" ? "active" : ""}
            alt="batu"
            onClick={() => handlePlayerChoose("batu")}
          />
          <img
            src="/img/kertas.png"
            data-type="kertas"
            className={playerChoose === "kertas" ? "active" : ""}
            alt="kertas"
            onClick={() => handlePlayerChoose("kertas")}
          />
          <img
            src="/img/gunting.png"
            data-type="gunting"
            className={playerChoose === "gunting" ? "active" : ""}
            alt="gunting"
            onClick={() => handlePlayerChoose("gunting")}
          />
        </div>
      </div>
    </>
  );
};

export default Player;
