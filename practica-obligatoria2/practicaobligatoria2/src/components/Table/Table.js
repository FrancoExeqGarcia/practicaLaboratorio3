import React from "react";

const Table = ({ servicios }) => {
  const totalIncome = servicios.reduce((total, item) => total + item.income, 0);
  const averageIncome = totalIncome / servicios.length;
  return (
    <div>
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>Marca</th>
              <th>Ingreso Neto</th>
            </tr>
          </thead>
          <tbody>
            {servicios.map((elemento, index) => (
              <tr key={index}>
                <td>{elemento.brand}</td>
                <td>$ {elemento.income}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>Promedio: {averageIncome} </p>
    </div>
  );
};

export default Table;
