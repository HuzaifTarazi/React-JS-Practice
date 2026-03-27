import React, { useState } from "react";

const ShowHide = () => {
  const [visible, setvisible] = useState(false);

  return (
    <>
      <div className="text-white text-5xl font-bold my-10">
        <hr />
        Practice Set 3
      </div>

      <p className="border py-10 px-10 bg-neutral-700 font-bold text-4xl">
        {visible && <span className="text-green-500">WOW!</span>}
      </p>
      <button
        onClick={() => {
          setvisible(!visible);
        }}
        className="my-6 border bg-red-500 py-3 px-3 text-white"
      >
        Click ME
      </button>
    </>
  );
};

export default ShowHide;
