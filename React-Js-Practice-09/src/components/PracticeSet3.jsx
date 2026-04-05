import React, { useEffect, useState } from "react";

const PracticeSet3 = () => {
  const [theme, setTheme] = useState(()=>{return localStorage.getItem("theme") || "white"});

  useEffect(() => {
    const set = localStorage.getItem("theme");

    if (set) {
      setTheme(set);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  
  }, [theme]);

  return (
    <div className="py-3">
      <hr />
      <h2 className="py-6">Practice Set - 3</h2>
      <div
        className={`border w-1/3 h-15 flex justify-center items-center bg-${theme} text-black`}
      >
        I AM DIV
      </div>

      <button
        onClick={() => {
          setTheme(() => (theme === "white" ? "red-500 text-white" : "white"));
        }}
        className="my-3 border py-2 px-4 rounded bg-emerald-600 font-semibold "
      >
        CHANGE BG
      </button>
    </div>
  );
};

export default PracticeSet3;
