import React from "react";
import { useState } from "react";


const View = () => {
  const [arrayOfObjects, setArrayOfObjects] = useState(
    JSON.parse(localStorage.getItem("expenseData")) || []
  );

  const handleDelete = (index) => {
    const updateArray = arrayOfObjects.filter((_, i) => i !== index);
    setArrayOfObjects(updateArray);
    localStorage.setItem("expenseData", JSON.stringify(updateArray));
  };

  return (
    <div className="flex justify-center  min-h-screen bg-gray-100">
      <div className="mt-10 w-full max-w-4xl">
        {arrayOfObjects.length > 0 ? (
          <table className="min-w-full bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Title</th>
                <th className="py-3 px-6 text-left">Category</th>
                <th className="py-3 px-6 text-left">Amount</th>
                <th className="py-3 px-6 text-left">Date</th>
                <th className="py-3 px-6 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {arrayOfObjects.map((expense, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left">
                    {expense.expenseTitle}
                  </td>
                  <td className="py-3 px-6 text-left">{expense.category}</td>
                  <td className="py-3 px-6 text-left">₹{expense.amount}</td>
                  <td className="py-3 px-6 text-left">{expense.date}</td>
                  <td className="py-3 px-6 text-left">
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-500 hover:text-red-700"
                      title="Delete"
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-600 text-sm text-center">
            No expenses added yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default View;
