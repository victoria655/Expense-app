import React, { useState } from 'react';

function Form({ onAddExpense }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    amount: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense(formData);
    setFormData({
      name: '',
      description: '',
      category: '',
      amount: '',
      date: ''
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3><br />Add Expense</h3>
        <p>Enter your expense details</p>

        <input type="text" name="name" placeholder="Enter expense" value={formData.name} onChange={handleChange} />
        <br />
        <input type="text" name="description" placeholder="Enter expense description" value={formData.description} onChange={handleChange} />
        <br />
        <input type="text" name="category" placeholder="Enter expense category" value={formData.category} onChange={handleChange} />
        <br />
        <input type="number" name="amount" placeholder="Enter expense amount" value={formData.amount} onChange={handleChange} />
        <br />
        <input type="date" name="date" placeholder="Select date" value={formData.date} onChange={handleChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
