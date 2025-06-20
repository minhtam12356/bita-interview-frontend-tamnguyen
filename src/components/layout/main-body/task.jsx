import React, { useState } from "react";
import TaskItem from "./task-item";

export const Task = (props) => {
  const { task } = props;
  const [isShowAddTask, setIsShowAddTask] = useState(false);
  const [newTaskValue, setNewTaskValue] = useState("");
  const [taskItems, setTaskItems] = useState([]);

  const onShowAddTask = () => {
    setIsShowAddTask(true);
  };

  const onHideAddTask = () => {
    setIsShowAddTask(false);
    setNewTaskValue("");
  };

  const onAddTask = () => {
    setTaskItems((prev) =>
      prev.concat({
        id: taskItems.length + 1,
        name: newTaskValue,
        isDeleted: false,
      })
    );
    onHideAddTask();
  };

  const onKeyDown = (e) => {
    switch (e.key) {
      case "Enter":
        onAddTask();
        break;

      case "Escape":
        onHideAddTask();
        break;

      default:
        break;
    }
  };

  const onDeleteItem = (id) => {
    setTaskItems((prev) => {
      const target = prev.find((p) => p.id === id);

      return [
        ...prev.filter((p) => p.id !== id),
        {
          ...target,
          isDeleted: true,
        },
      ];
    });
  };

  return (
    <div className="task">
      <div className="task__header flex">
        <div className="task__header--name">{task.name}</div>
        <div className="task__header--add-icon" onClick={onShowAddTask}>
          +
        </div>
      </div>

      <div className="task__body">
        {isShowAddTask ? (
          <div className="input">
            <input
              type="text"
              placeholder="New Item"
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
              onKeyDown={(e) => onKeyDown(e)}
            />
          </div>
        ) : (
          <></>
        )}

        {taskItems
          .sort((a, b) => a.id - b.id)
          .map((t) => (
            <ul>
              <TaskItem onDeleteItem={onDeleteItem} item={t} />
            </ul>
          ))}
      </div>
    </div>
  );
};

export default Task;
