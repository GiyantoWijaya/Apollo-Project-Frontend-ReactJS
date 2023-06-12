import "./reset.styles.css";

const Reset = ({ handleReset }) => {
  return (
    <>
      <div className="row d-flex">
        <div className="col-lg-12 refresh text-center">
          <img
            src="../img/refresh.png"
            alt="reset"
            className="reset"
            onClick={() => handleReset()}
          />
        </div>
      </div>
    </>
  );
};

export default Reset;
