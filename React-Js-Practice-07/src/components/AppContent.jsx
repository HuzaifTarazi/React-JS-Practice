import React, { useState } from "react";
import Practice1 from "./ToggleButton";
import ToggleButton from "./ToggleButton";
import ShowHide from "./ShowHide";
import AddItem from "./AddItem";
import Filteration from "./Filteration";
import LikeSystem from "./LikeSystem";

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
    <div className="h-full w-full flex flex-col items-center bg-gray-600">
      <div className="text-white text-5xl font-bold my-10">Practice Set 1</div>
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
      <ToggleButton />
      <ShowHide />
      <AddItem />
      <Filteration />
      <LikeSystem/>
    </div>
  );
};

export default AppContent;
