import React, { useState } from "react";

function Table() {
  // create state to store the multiplication table data
  const [tableData, setTableData] = useState([]);

  // function to generate random multiplication table data
  const generateTableData = () => {
    const data = [];

    // generate random values for the table
    const min = 1;
    const max = 10;

    const num2 = Math.floor(Math.random() * (max - min + 1) + min);

    // create a 10 x 10 multiplication table based on the random values
    for (let i = 1; i <= 10; i++) {
      const row = {
        id: i,
        result: i * num2,
      };
      data.push(row);
    }

    return data;
  };

  // function to render the multiplication table rows
  const renderTableRows = () => {
    return tableData.map((row) => (
      <tr key={row.id}>
        <td>{row.result}</td>
      </tr>
    ));
  };

  // function to handle button click event
  const handleButtonClick = () => {
    const data = generateTableData();
    setTableData(data);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
      <button onClick={handleButtonClick}>Generate Table</button>
    </div>
  );
}

export default Table;
