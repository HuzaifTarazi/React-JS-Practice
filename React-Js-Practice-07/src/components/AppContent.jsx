import React, { useState } from "react";

const AppContent = () => {
  const [initialValue, setfirst] = useState(0);

  const increment = () => {
    return setfirst(initialValue + 1);
  };

  const decrement = () => {
    if (initialValue > 0) {
      return setfirst(initialValue - 1);
    }
  };
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-600">
      <input
        className="border w-40 h-30 text-center rounded-md bg-neutral-700 font-semibold text-7xl text-white"
        type="text"
        disabled
        value={initialValue}
      />
      <div className="flex my-3">
        <button
          onClick={increment}
          className="bg-green-500 py-3 px-3 rounded mx-3 shadow-md text-white active:bg-green-600"
        >
          Increase
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 py-3 px-3 mx-2 rounded shadow-md text-white active:bg-red-600"
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default AppContent;
