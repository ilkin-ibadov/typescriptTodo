import React, { useEffect } from "react";
import { ToDoItem, ToDoStoreObj } from "../ToDoStore";
import { observer } from "mobx-react";

type Props = {
  todo: ToDoItem;
};

function ToDoCard({ todo }: Props) {
  return (
    <div className="card">
      <div className="cardTitle">{todo.title}</div>
      <div className="cardBody">{todo.description}</div>
      <div className="cardBtns">
        <button
          className="cardBtn"
          onClick={() => {
            ToDoStoreObj.setToggleEditCard({ status: "active", id: todo._id });
            ToDoStoreObj.setWithOverlay("active");
            ToDoStoreObj.setEditedCardTitle(todo.title);
            ToDoStoreObj.setEditedCardDescription(todo.description);
          }}
        >
          Edit
        </button>
        <button
          className="cardBtn"
          onClick={() => {
            ToDoStoreObj.setToggleDeleteCard({ status: "active", id: todo._id });
            ToDoStoreObj.setWithOverlay("active");
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoCard;
