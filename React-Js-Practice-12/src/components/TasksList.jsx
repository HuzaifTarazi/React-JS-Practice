import React, { use, useState } from "react";

const TasksList = ({
  id,
  title,
  desc,
  priority,
  dueDate,
  useArr,
  SetObjArr,
}) => {
  const [checkbox, setcheckbox] = useState(false);

  const checkBoxChange = () => {
  const newValue = !checkbox;

  setcheckbox(newValue);

  const updatedArr = [...useArr];

  updatedArr[id] = {
    ...updatedArr[id],
    status: newValue,
  };

  SetObjArr(updatedArr);
};

  const deletion = (e) => {
    const copyArr = [...useArr];
    const arrSelected = e.target.dataset.set;
    copyArr.splice(arrSelected, 1);
    SetObjArr(copyArr);
  };

  return (
    <>
      <div
        className={`border rounded shadow-lg ${checkbox === true ? "bg-cyan-600" : "bg-cyan-700"} text-start py-2 px-4 my-3 flex flex-col justify-center items-center`}
      >
        <div className="w-full flex flex-col justify-start items-start">
          <div className="flex gap-3">
            <input onClick={checkBoxChange} data-set={id} type="checkbox" />

            <p
              className={`text-white py-2 ${checkbox === true ? "line-through" : ""} `}
            >
              {title}
            </p>
          </div>
          <hr className="text-gray-300 w-35 py-1 ms-6" />
          <p className="text-white pb-2 ms-6 ">{desc}</p>
          <div className="flex flex-row justify-center items-center ">
            <p
              className={`ms-6 border text-sm p-0.3 px-4 rounded // ${priority === "High" ? `bg-red-300` : priority === "Medium" ? `bg-orange-200` : "bg-green-200"} `}
            >
              {priority}
            </p>

            <p className="ms-2 text-white">{dueDate}</p>
            <p className="ms-2 text-white">
              {checkbox === true ? "Completed" : "Incomplete"}
            </p>
          </div>
        </div>

        <button
          onClick={deletion}
          className="bg-red-700 rounded mx-6 w-55 text-white py-1 m-3 active:bg-red-800"
          data-set={id}
        >
          DEL TASK
        </button>
      </div>
    </>
  );
};

export default TasksList;
