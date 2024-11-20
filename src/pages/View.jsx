import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const View = () => {
  const [arrayOfObjects, setArrayOfObjects] = useState(
    JSON.parse(localStorage.getItem("expenseData")) || []
  );

  const [editIndex , setEditIndex] = useState(null);

  const handleDelete = (index) => {
    const updateArray = arrayOfObjects.filter((_, i) => i !== index);
    setArrayOfObjects(updateArray);
    localStorage.setItem("expenseData", JSON.stringify(updateArray));
  };

  const handleInputChange = (e, index)=>{
    const {name, value} = e.target;
    const updatedArray = arrayOfObjects.map((item, i) =>
      i === index ? { ...item, [name]: value } : item
    );
    setArrayOfObjects(updatedArray);
    localStorage.setItem("expenseData", JSON.stringify(updatedArray));
  }

  return (
    <div className="flex justify-center  min-h-screen bg-gray-50">
      <div className="mt-10 w-full max-w-5xl px-4">
        {arrayOfObjects.length > 0 ? (
          <table className="min-w-full bg-white shadow-xl rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700 text-sm uppercase">
              <tr>
                <th className="py-3 px-6 text-left font-medium">Title</th>
                <th className="py-3 px-6 text-left font-medium">Category</th>
                <th className="py-3 px-6 text-left font-medium">Amount</th>
                <th className="py-3 px-6 text-left font-medium">Date</th>
                <th className="py-3 px-6 text-left font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              {arrayOfObjects.map((expense, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-100 transition-all duration-200"
                >
                  {editIndex === index ? (
                    <>
                    <td className="py-3 px-6 text-left">
                        <input
                          type="text"
                          name="expenseTitle"
                          value={expense.expenseTitle}
                          onChange={(e) => handleInputChange(e, index)}
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                      </td>
                    
                    <td className="py-3 px-6 text-left">
                        <input
                          type="text"
                          name="category"
                          value={expense.category}
                          onChange={(e) => handleInputChange(e, index)}
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                      </td>
                      <td className="py-3 px-6 text-left">
                        <input
                          type="Number"
                          name="amount"
                          value={expense.amount}
                          onChange={(e) => handleInputChange(e, index)}
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                      </td>
                    <td className="py-3 px-6 text-left">
                        <input
                          type="date"
                          name="date"
                          value={expense.date}
                          onChange={(e) => handleInputChange(e, index)}
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                      </td>
                      <td className="py-3 px-6 text-left">
                        <button
                          onClick={() => setEditIndex(null)}
                          className="text-gray-500 hover:text-gray-700 transition-all duration-200"
                          title="Done"
                        >
                          Done
                        </button>
                      </td>
                    </>
                  ):(
                    <>
                  <td className="py-3 px-6 text-left">
                    {expense.expenseTitle}
                  </td>
                  <td className="py-3 px-6 text-left">{expense.category}</td>
                  <td className="py-3 px-6 text-left">₹{expense.amount}</td>
                  <td className="py-3 px-6 text-left">{expense.date}</td>
                  <td className="py-3 px-6 text-left">
                    <button
                      onClick={() => setEditIndex(index)}
                      className="text-blue-500 hover:text-blue-700 transition-all duration-200 mr-2"
                      title="Edit"
                    >
                      <FaEdit className="inline-block" />
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-500 hover:text-red-700 transition-all duration-200"
                      title="Delete"
                    >
                      <FaTrash className="inline-block" />
                    </button>
                  </td>
                  </>
                   )}
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
