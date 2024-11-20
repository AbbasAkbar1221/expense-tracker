import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [expenseTitle, setExpenseTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const expenseData = {
      expenseTitle: expenseTitle,
      category: category,
      amount: amount,
      date: date,
    };

    const data = JSON.parse(localStorage.getItem("expenseData") || "[]");
    data.push(expenseData);


    localStorage.setItem("expenseData", JSON.stringify(data));

    navigate('/view');

    setExpenseTitle("");
    setAmount(0);
    setCategory("");
    setDate("");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      
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
            value={expenseTitle}
            onChange={(e) => setExpenseTitle(e.target.value)}
            placeholder="Enter title of expense"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Enter the amount:
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={amount || ''}
            onFocus={()=> amount === 0 && setAmount('')}
            onBlur={()=> setAmount(amount===''?0: Number(amount))}
            onChange={(e) => setAmount(e.target.value === '' ? '' : Number(e.target.value))}
            placeholder="Enter number"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
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
            value={category}
            required
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled hidden>
              Select Category
            </option>
            <option value="entertainment">Entertainment</option>
            <option value="food">Food</option>
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
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
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
