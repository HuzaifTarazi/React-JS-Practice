import React, { useState } from "react";
import NotesDetail from "./NotesDetail";

const Form = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(false);

  const onChangeInput = (e) => {
    setTitle(() => {
      return e.target.value;
    });
  };

  const onChangeDetail = (e) => {
    setDetail(() => {
      return e.target.value;
    });
  };

  const formSubmition = (event) => {
    event.preventDefault();

    if (title === "" && detail === "") {
      setError(true);
      return;
    }
    setError(false);
    const detailArray = [...notes, { title, detail }];
    setNotes(detailArray);

    setTitle("");
    setDetail("");
  };

  return (
    <>
      <div className=" bg-cyan-700 shadow-xl py-20 px-15 h-screen w-1/2 ">
        <form
          onSubmit={formSubmition}
          action=""
          className="flex flex-col gap-5 justify-center"
        >
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-3xl font-bold text-center">Enter Notes</h1>
            <div
              className={`border ${error ? "bg-red-400" : "bg-gray-400"} rounded w-1/3 text-center py-2`}
            >
              {error ? "Error Found..!" : "Error Not Found..!"}
            </div>
          </div>

          <input
            onChange={onChangeInput}
            className="border py-4 px-3 rounded outline-none text-xl"
            type="text"
            placeholder="Enter Title.."
            value={title}
          />
          <textarea
            onChange={onChangeDetail}
            className="border p-3 h-55 outline-none text-lg"
            type="text"
            placeholder="Insert Details.."
            value={detail}
          />
          <button className="bg-gray-100 w-full h-1/2 text-black py-3 px-3 rounded active:bg-gray-200 text-lg font-semibold">
            Submit Now
          </button>
        </form>
      </div>
      <div className="flex flex-col w-1/2 bg-gray-200 text-black py-20 overflow-auto">
        <h1 className="text-3xl font-bold text-center">Take Notes</h1>
        {notes.map((elment, id) => {
          return (
            <NotesDetail key={id} title={elment.title} detail={elment.detail} />
          );
        })}
      </div>
    </>
  );
};

export default Form;
