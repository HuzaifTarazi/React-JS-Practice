import React, { useState } from "react";

const LikeSystem = () => {
  const [like, setlike] = useState(0);
  return (
    <>
      <div className="text-white text-5xl font-bold my-10">
        <hr />
        Practice Set 6
      </div>
      <button
        onClick={() => {
          like === 0 ? setlike((prev) => prev + 1) : setlike(0);
        }}
        className="my-6 border bg-red-500 py-3 px-9 text-white"
      >
        ♥ {like}
      </button>
    </>
  );
};

export default LikeSystem;
