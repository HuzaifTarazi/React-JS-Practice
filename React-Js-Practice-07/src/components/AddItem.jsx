import React, { useState } from "react";

const AddItem = () => {
  const [arr, setarr] = useState([10, 20, 30, 40]);

  const arrHandle = () => {
    const newArr = [...arr, "New ITEM!"];
    setarr(newArr);
  };

  return (
    <>
      <div className="text-white text-5xl font-bold my-10">
        <hr />
        Practice Set 4
      </div>

      <p className="border py-10 px-10 bg-neutral-700 font-bold text-4xl">
        {arr}
      </p>
      <button
        onClick={arrHandle}
        className="my-6 border bg-red-500 py-3 px-3 text-white"
      >
        Click ME
      </button>
    </>
  );
};

export default AddItem;
