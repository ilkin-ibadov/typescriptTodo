import React, { useState, useEffect } from "react";
import { ToDoStoreObj } from "../ToDoStore";
import { observer } from "mobx-react";
import { toastCardAdded, toastFillInput } from "../toastMessages";

const CreateCard: React.FC = observer(() => {
  const [newCardTitle, setNewCardTitle] = useState("");
  const [newCardDescription, setNewCardDescription] = useState("");
  const [inputState, setInputState] = useState("");

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`createCard ${ToDoStoreObj.toggleCreateCard}`}
    >
      <div className="closeModalPlaceholder">
        <div
          className="closeModal"
          onClick={() => {
            ToDoStoreObj.setToggleCreateCard("");
            ToDoStoreObj.setWithOverlay("");
          }}
        ></div>
      </div>
      <span>CREATE CARD</span>
      <form action="">
        <div className="createCardTitlePlaceholder">
          <label className={`${inputState}`} htmlFor="createCardTitle">
            Title
          </label>
          <input
            value={newCardTitle}
            onChange={(e) => {
              setNewCardTitle(e.target.value);
            }}
            type="text"
            id="createCardTitle"
            className={`${inputState}`}
          />
        </div>
        <div className="createCardDescriptionPlaceholder">
          <label htmlFor="createCardDescription" className={`${inputState}`}>
            Description
          </label>
          <input
            type="text"
            value={newCardDescription}
            onChange={(e) => {
              setNewCardDescription(e.target.value);
            }}
            id="createCardDescription"
            className={`${inputState}`}
          />
        </div>
        <div className="createCardBtns">
          <button
            type="button"
            onClick={() => {
              ToDoStoreObj.setToggleCreateCard("");
              ToDoStoreObj.setWithOverlay("");
              setInputState("");
            }}
          >
            Close
          </button>
          <input
            type="button"
            onClick={() => {
              if (newCardTitle && newCardDescription) {
                ToDoStoreObj.addToDo({
                  title: newCardTitle,
                  description: newCardDescription,
                  author: ToDoStoreObj.author,
                });
                setInputState("");
                ToDoStoreObj.setToggleCreateCard("");
                ToDoStoreObj.setWithOverlay("");
                setNewCardTitle("");
                setNewCardDescription("");
                ToDoStoreObj.getAllToDos();
                toastCardAdded();
              } else {
                setInputState("red");
                toastFillInput();
              }
            }}
            value={"Create"}
          />
        </div>
      </form>
    </div>
  );
});

export default CreateCard;
