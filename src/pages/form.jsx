import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "Select Category",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // const existingExpense = localStorage.getItem("expenseData") || [];

    // const updateExpense = [...existingExpense, formData]

    localStorage.setItem("expenseData", JSON.stringify(formData));
    alert("Expense saved!")
      
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md space-y-4"
        onSubmit={handleSubmit}
      >
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Enter the title of expense:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter title of expense"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Enter the price:
          </label>
          <input
            type="number"
            name="price"
            id="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter number"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Select category:
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="select">Select Category</option>
            <option value="entertainment">Entertainment</option>
            <option value="bills">Bills</option>
            <option value="fees">Fees</option>
            <option value="grocery">Grocery</option>
            <option value="personal">Personal</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Enter date:
          </label>
          <input
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default Form;
