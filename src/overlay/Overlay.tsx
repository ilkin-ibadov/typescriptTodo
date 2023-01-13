import React, { useState, useEffect } from "react";
import { ToDoStoreObj } from "../ToDoStore";
import { observer } from "mobx-react";
import CreateCard from "./CreateCard";
import EditCard from "./EditCard";
import DeleteCard from "./DeleteCard";

const Overlay: React.FC = observer(() => {
  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.code === "Escape") {
        ToDoStoreObj.setToggleCreateCard("");
        ToDoStoreObj.setToggleEditCard({
          ...ToDoStoreObj.toggleEditCard,
          status: "",
        });
        ToDoStoreObj.setToggleDeleteCard({
          ...ToDoStoreObj.toggleDeleteCard,
          status: "",
        });
        ToDoStoreObj.setWithOverlay("");
      }
    }

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);

  return (
    <div
      onClick={() => {
        ToDoStoreObj.setToggleCreateCard("");
        ToDoStoreObj.setToggleEditCard({
          ...ToDoStoreObj.toggleEditCard,
          status: "",
        });
        ToDoStoreObj.setToggleDeleteCard({
          ...ToDoStoreObj.toggleDeleteCard,
          status: "",
        });
        ToDoStoreObj.setWithOverlay("");
      }}
      className={`overlay ${ToDoStoreObj.withOverlay}`}
    >
      <CreateCard />
      <EditCard />
      <DeleteCard />
    </div>
  );
});

export default Overlay;
