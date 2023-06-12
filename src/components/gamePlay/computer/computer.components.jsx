import "./computer.styles.css";

const Computer = ({ compChoose }) => {
  return (
    <>
      <div className="col-lg-2 my-auto mx-auto">
        <h1 className="mb-5 title">COMPUTER</h1>
        <div id="computer">
          <img
            src="/img/batu.png"
            data-type="batu"
            className={compChoose === "batu" ? "active" : ""}
            alt="batu"
          />
          <img
            src="/img/kertas.png"
            data-type="kertas"
            className={compChoose === "kertas" ? "active" : ""}
            alt="kertas"
          />
          <img
            src="/img/gunting.png"
            data-type="gunting"
            className={compChoose === "gunting" ? "active" : ""}
            alt="gunting"
          />
        </div>
      </div>
    </>
  );
};

export default Computer;
