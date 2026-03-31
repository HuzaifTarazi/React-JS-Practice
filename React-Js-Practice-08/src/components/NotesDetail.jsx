import React from "react";

const NotesDetail = ({ title, detail }) => {
  return (
    <div className="px-12">
      <div className=" my-3 py-3 px-5 flex flex-col justify-between rounded bg-gray-600 text-white shadow-md">
        <h3 className="font-semibold text-xl">{title}</h3>
        <p className="mt-3 text-md text-lg">{detail}</p>
      </div>
    </div>
  );
};

export default NotesDetail;
