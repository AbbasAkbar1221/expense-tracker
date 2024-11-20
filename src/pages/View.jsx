import React from "react";

const View = () => {
  const arrayOfObjects =  JSON.parse(localStorage.getItem("expenseData")) || [];

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
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {arrayOfObjects.map((expense, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left">{expense.expenseTitle}</td>
                  <td className="py-3 px-6 text-left">{expense.category}</td>
                  <td className="py-3 px-6 text-left">₹{expense.amount}</td>
                  <td className="py-3 px-6 text-left">{expense.date}</td>
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
