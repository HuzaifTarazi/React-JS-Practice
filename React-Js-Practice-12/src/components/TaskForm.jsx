import React, { useState } from "react";
import TaskStatus from "./TaskStatus";
import TasksList from "./TasksList";

const TaskForm = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setDesc] = useState("");
  const [taskPriority, setPriority] = useState("High");
  const [taskDueDate, setDueDate] = useState("");
  const [objArr, setObjArr] = useState([]);
  

  const getFormData = (e) => {
    const { id, value } = e.target;

    switch (id) {
      case "taskTitle":
        setTaskTitle(value);
        break;
      case "desc":
        setDesc(value);
        break;
      case "priority":
        setPriority(value);
        break;
      case "dueDate":
        setDueDate(value);
        break;
    }
  };

  const formChange = (e) => {
    e.preventDefault();

    const taskListData = {
      title: taskTitle,
      desc: taskDesc,
      priority: taskPriority,
      duedate: taskDueDate,
      status: false,
    };

    setObjArr([...objArr, taskListData]);
    console.log(objArr)
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold my-10 underline text-white">
        Task Manager System
      </h1>

      <div className="border h-full py-5 rounded px-5 bg-gray-600 ">
        <form onSubmit={formChange} className="flex flex-col gap-2">
          <label className="text-white" htmlFor="taskTitle">
            Task Title:
          </label>

          <input
            onChange={getFormData}
            id="taskTitle"
            className="border rounded p-2 w-xl bg-gray-300 border-none transition-all duration-300 outline-none focus:ring-3 focus:ring-white/30"
            type="text"
            placeholder="Enter Task title.."
            value={taskTitle}
          />

          <label className="text-white" htmlFor="desc">
            Description:
          </label>
          <textarea
            onChange={getFormData}
            className="bg-gray-300 rounded h-25 p-2 outline-none border-none transition-all duration-300 focus:ring-3 focus:ring-white/30"
            placeholder="Enter Task Description"
            name="Description"
            id="desc"
            value={taskDesc}
          ></textarea>

          <div className="flex flex-row gap-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="priority" className="text-white">
                Priority:{" "}
              </label>

              <select
                onChange={getFormData}
                name=""
                id="priority"
                className="bg-gray-300 rounded  w-71 p-2 outline-none border-none transition-all duration-300 focus:ring-3 focus:ring-white/30 "
                value={taskPriority}
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white" htmlFor="taskTitle">
                Task Title:
              </label>

              <input
                onChange={getFormData}
                id="dueDate"
                className="border rounded p-2 w-71  bg-gray-300 border-none transition-all duration-300 outline-none focus:ring-3 focus:ring-white/30"
                type="date"
                placeholder="Enter Task title.."
              />
            </div>
          </div>

          <button className="border py-2 rounded mt-5 bg-gray-200 font-bold active:bg-gray-700 active:text-white ">
            ADD TASK
          </button>
        </form>
      </div>

      <TaskStatus objArr={objArr} filterData={objArr.filter(element => element.status === true)} />

      <div className="border p-3  w-4xl text-center bg-gray-300 rounded ">
        {objArr.map((element, idx) => (
          <TasksList
            key={idx}
            id={idx}
            useArr={objArr}
            SetObjArr={setObjArr}
            title={element.title}
            desc={element.desc}
            priority={element.priority}
            dueDate={element.duedate}

          />
        ))}
      </div>
    </div>
  );
};

export default TaskForm;
