import React, { useState } from "react";
import dropdownIcon from "../../../img/dropdown.svg";

export const SidebarItem = (props) => {
  const { item } = props;
  const [sidebarMenuItem, setSidebarMenuItem] = useState(item);

  const onClickSidebarParent = () => {
    setSidebarMenuItem((prev) => {
      return {
        ...prev,
        active: !prev.active,
      };
    });
  };

  return (
    <>
      <div className="sidebar-item" onClick={onClickSidebarParent}>
        <div className="sidebar-item__name">{sidebarMenuItem.name}</div>
        <div
          className={`sidebar-item__icon ${
            sidebarMenuItem.active ? "active" : ""
          }`}
        >
          <img src={dropdownIcon} alt="dropdown-icon" />
        </div>
      </div>

      <ul
        style={{ display: sidebarMenuItem.active ? "block" : "none" }}
        className="sidebar-item-children"
      >
        {sidebarMenuItem.children.map((c) => (
          <li>{c.name}</li>
        ))}
      </ul>
    </>
  );
};

export default SidebarItem;
