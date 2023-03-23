import React, { useState } from 'react';
import './CustomerTable.css';

const CustomerTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const renderPageNumbers = (
    <div className="page-info">
      {currentPage} of {totalPages}
    </div>
  );

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Country</th>
            <th>Year Joined</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((customer) => (
            <tr key={customer.email}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.gender}</td>
              <td>{customer.age}</td>
              <td>{customer.country}</td>
              <td>{customer.yearJoined}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={handlePreviousClick}>Previous</button>
        {renderPageNumbers}
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default CustomerTable;

