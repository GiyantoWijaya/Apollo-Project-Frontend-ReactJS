import "./result.styles.css";
const Result = ({ result }) => {
  return (
    <>
      <div className="col-lg-3 mx-auto my-auto">
        <h1 className={result ? "win vs" : "vs"} id="hasil">
          {result ? result : "VS"}
        </h1>
      </div>
    </>
  );
};

export default Result;
