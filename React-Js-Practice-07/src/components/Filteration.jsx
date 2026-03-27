import React, { useState } from "react";

const Filteration = () => {
  const [filteration, setfilteration] = useState([10, 20, 30, 40, 50]);

  const filter = (index) => {
    setfilteration(() => {
      return filteration.filter((_, id) => id !== index);
    });
  };

  return (
    <>
      <div className="text-white text-5xl font-bold my-10">
        <hr />
        Practice Set 5
      </div>

      <p className="border py-10 px-10 bg-neutral-700 font-bold text-4xl">
        {filteration}
      </p>
      <button
        onClick={() => {
          filter(4);
        }}
        className="my-6 border bg-red-500 py-3 px-3 text-white"
      >
        Click ME
      </button>
    </>
  );
};

export default Filteration;
