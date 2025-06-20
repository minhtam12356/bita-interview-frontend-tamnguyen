import React, { useState } from "react";
import Task from "./task";

export const MainBody = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskValue, setNewTaskValue] = useState("");

  const onCreateTask = () => {
    setTasks((prev) =>
      prev.concat({
        id: tasks.length + 1,
        name: `${newTaskValue || "Ticket"} ${tasks.length + 1}`,
      })
    );

    setNewTaskValue("");
  };

  return (
    <div className="main-body">
      <div className="main-body__header">
        <h1>DASHBOARD</h1>

        <div className="flex">
          <div className="input">
            <input
              type="text"
              placeholder="New list"
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
            />
          </div>
          <button onClick={onCreateTask} type="button">
            Create
          </button>
        </div>
      </div>

      <div className="tasks">
        {tasks.map((t) => (
          <Task task={t} />
        ))}
      </div>
    </div>
  );
};

export default MainBody;
