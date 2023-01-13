import React, { useEffect, useState } from "react";
import { ToDoStoreObj } from "../ToDoStore";
import { observer } from "mobx-react";
import ToDoCards from "../components/ToDoCards";
import Overlay from "../overlay/Overlay";
import Navbar from "../components/Navbar";

const Dashboard: React.FC = observer(() => {
  useEffect(() => {
    ToDoStoreObj.getAllToDos();
  }, []);

  return (
    <div className={`cardManagement ${ToDoStoreObj.withOverlay}`}>
      <Navbar />
      <ToDoCards cards={ToDoStoreObj.todos} />
      <Overlay />
    </div>
  );
});

export default Dashboard;
