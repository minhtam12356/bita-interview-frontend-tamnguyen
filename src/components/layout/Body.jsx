import React from "react";
import Sidebar from "./sidebar";
import MainBody from "./main-body";

export const Body = () => {
  return (
    <div className="body">
      <Sidebar />
      <MainBody />
    </div>
  );
};

export default Body;
