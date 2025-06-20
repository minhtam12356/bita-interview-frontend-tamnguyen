import React, { useState } from "react";

export const TaskItem = (props) => {
  const { item, onDeleteItem } = props;
  return (
    <li className="task-item flex">
      <div className="flex">
        <div className="task-item__checkbox">
          <input type="checkbox" />
        </div>
        <div className={`task-item__name ${item.isDeleted ? "deleted" : ""}`}>
          {item.name}
        </div>
      </div>
      <div className="task-item__x" onClick={() => onDeleteItem(item.id)}>
        X
      </div>
    </li>
  );
};

export default TaskItem;
