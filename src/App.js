import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Form from './components/Form';
import Table from './components/Table';

function App() {
  const defaultExpenses = [
    {
      name: 'Ugali',
      description: "Last night's supper",
      category: 'Food',
      amount: 300,
      date: '2025-03-30',
    },
    {
      name: 'Matatu',
      description: 'Morning commute',
      category: 'Transport',
      amount: 100,
      date: '2025-04-01',
    },
    {
      name: 'Notebook',
      description: 'Coding notes',
      category: 'Stationery',
      amount: 150,
      date: '2025-04-05',
    },
  ];

  const [expenses, setExpenses] = useState(() => {
    const stored = localStorage.getItem('expenses');
    return stored ? JSON.parse(stored) : defaultExpenses;
  });

  const [searchTerm, setSearchTerm] = useState('');

  // Save to localStorage every time expenses change
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const handleAddExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const handleDelete = (indexToDelete) => {
    const updated = expenses.filter((_, index) => index !== indexToDelete);
    setExpenses(updated);
  };

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const handleSort = (field) => {
    const sorted = [...expenses].sort((a, b) =>
      a[field].toLowerCase().localeCompare(b[field].toLowerCase())
    );
    setExpenses(sorted);
  };

  const filteredExpenses = expenses.filter(
    (exp) =>
      exp.name.toLowerCase().includes(searchTerm) ||
      exp.description.toLowerCase().includes(searchTerm) ||
      exp.category.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <NavBar />
      <div className="main-content">
        <Form onAddExpense={handleAddExpense} />
        <div className="table-container">
          <Table
            expenses={filteredExpenses}
            onDelete={handleDelete}
            onSearch={handleSearch}
            onSort={handleSort}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
