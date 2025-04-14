import React from 'react';

function Table({ expenses, onDelete, onSearch, onSort }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search expenses..."
        onChange={(e) => onSearch(e.target.value)}
        style={{ marginBottom: '10px', padding: '8px', width: '100%' }}
      />
      <table>
        <thead>
          <tr>
            <th>Expense</th>
            <th onClick={() => onSort('description')} style={{ cursor: 'pointer' }}>
              Description 🔽
            </th>
            <th onClick={() => onSort('category')} style={{ cursor: 'pointer' }}>
              Category 🔽
            </th>
            <th>Amount</th>
            <th>Date</th>
            <th>❌</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp, index) => (
            <tr key={index}>
              <td>{exp.name}</td>
              <td>{exp.description}</td>
              <td>{exp.category}</td>
              <td>{exp.amount}</td>
              <td>{exp.date}</td>
              <td>
                <span
                  onClick={() => onDelete(index)}
                  style={{ color: 'red', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  x
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
