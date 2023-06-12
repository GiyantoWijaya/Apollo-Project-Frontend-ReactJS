const TableData = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{item.user.username}</td>
          <td>{item.score}</td>
          <td>{item.time}</td>
          <td>{item.game.name}</td>
        </tr>
      ))}
    </>
  );
};

export default TableData;
