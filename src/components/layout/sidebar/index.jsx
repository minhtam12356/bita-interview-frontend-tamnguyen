import React from "react";
import sidebarMenu from "../../../data/sidebar-menu";
import SidebarItem from "./sidebar-item";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      {sidebarMenu.map((s) => (
        <SidebarItem key={s.id} item={s} />
      ))}
    </div>
  );
};

export default Sidebar;
