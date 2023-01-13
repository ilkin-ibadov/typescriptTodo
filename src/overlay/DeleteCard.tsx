import { observer } from "mobx-react";
import React, { useState } from "react";
import { ToDoStoreObj } from "../ToDoStore";
import { toastCardDeleted } from "../toastMessages";

type Props = {};

const DeleteCard = observer(({}: Props) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`deleteCard ${ToDoStoreObj.toggleDeleteCard.status}`}
    >
      <span>DELETE CARD</span>
      <p>Are you sure you want to delete card?</p>
      <div className="deleteCardBtns">
        <button
          type="button"
          onClick={() => {
            ToDoStoreObj.setToggleDeleteCard({
              ...ToDoStoreObj.toggleDeleteCard,
              status: "",
            });
            ToDoStoreObj.setWithOverlay("");
          }}
        >
          Close
        </button>
        <input
          type="button"
          value={"Delete"}
          onClick={() => {
            ToDoStoreObj.deleteToDo();
            ToDoStoreObj.setToggleDeleteCard({
              ...ToDoStoreObj.toggleDeleteCard,
              status: "",
            });
            ToDoStoreObj.setWithOverlay("");
            toastCardDeleted()
          }}
        />
      </div>
    </div>
  );
});

export default DeleteCard;
