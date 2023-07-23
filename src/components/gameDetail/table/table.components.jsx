import { useState, useEffect } from "react";
import TableData from "./tableData.components.jsx/tableData.components";

import "./table.styles.css";

const TableGameDetail = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:5001/api/gamePlay", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      setData(result.data.usersHistoryData);
    }
    getData();
  }, []);

  return (
    <table className="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">Rank</th>
          <th scope="col">User Name</th>
          <th scope="col">Score</th>
          <th scope="col">Time</th>
          <th scope="col">Game Name</th>
        </tr>
      </thead>
      <tbody>
        <TableData data={data} />
      </tbody>
    </table>
  );
};
export default TableGameDetail;
