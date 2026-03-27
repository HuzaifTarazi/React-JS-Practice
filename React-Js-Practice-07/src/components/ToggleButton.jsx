import React, { useState } from "react";

const ToggleButton = () => {
  const [boolean, setboolean] = useState(false);

  const toggleFun = () => {
    setboolean(!boolean);
    console.log(boolean)
  };
  return (
    <>
      <div className="text-white text-5xl font-bold my-10">
        <hr />
        Practice Set 2
      </div>

      <p
        style={{ color: boolean ? "green" : "red" }}
        className="border py-10 px-10 bg-neutral-700 font-bold text-4xl"
      >
        {boolean ? "ON" : "OFF"}
      </p>
      <button
        onClick={toggleFun}
        className="my-6 border bg-red-500 py-3 px-3 text-white"
      >
        Click ME
      </button>
    </>
  );
};
export default ToggleButton;
