import React, { useState } from "react";

const TaskStatus = ({ objArr, filterData }) => {
  

  return (
    <>
      <div className=" text-white my-10 flex flex-row gap-20">
        <div className="border w-50 text-center rounded bg-gray-600 ">
          <p className="text-lg py-3">TOTAL TASKS:</p>
          <h3 className="font-bold text-xl pb-3">{objArr.length}</h3>
        </div>
        <div className="border w-50 text-center rounded bg-gray-600 ">
          <p className="text-lg py-3">COMPLETED:</p>
          <h3 className="font-bold text-xl pb-3">{filterData.length}</h3>
        </div>
        <div className="border w-50 text-center rounded bg-gray-600 ">
          <p className="text-lg py-3">INCOMPETE:</p>
          <h3 className="font-bold text-xl pb-3">{objArr.length - filterData.length}</h3>
        </div>
      </div>
    </>
  );
};

export default TaskStatus;
