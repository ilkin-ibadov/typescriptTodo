import { observer } from "mobx-react";
import React, { useState } from "react";
import { ToDoStoreObj } from "../ToDoStore";
import { toastCardEdited, toastFillInput } from "../toastMessages";

type Props = {};

const EditCard = observer(({}: Props) => {
  const [inputState, setInputState] = useState("");
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`editCard ${ToDoStoreObj.toggleEditCard.status}`}
    >
      <div className="closeModalPlaceholder">
        <div
          className="closeModal"
          onClick={() => {
            ToDoStoreObj.setToggleEditCard({
              ...ToDoStoreObj.toggleEditCard,
              status: "",
            });
            ToDoStoreObj.setWithOverlay("");
          }}
        ></div>
      </div>
      <span>EDIT CARD</span>
      <form action="">
        <div className="editCardTitlePlaceholder">
          <label htmlFor="editCardTitle">Title</label>
          <input
            value={ToDoStoreObj.editedCardTitle}
            onChange={(e) => {
              ToDoStoreObj.setEditedCardTitle(e.target.value);
            }}
            type="text"
            id="editCardTitle"
            className={`${inputState}`}
          />
        </div>
        <div className="editCardDescriptionPlaceholder">
          <label htmlFor="editCardDescription">Description</label>
          <input
            value={ToDoStoreObj.editedCardDescription}
            onChange={(e) => {
              ToDoStoreObj.setEditedCardDescription(e.target.value);
            }}
            type="text"
            id="editCardDescription"
            className={`${inputState}`}
          />
        </div>
        <div className="editCardBtns">
          <button
            type="button"
            onClick={() => {
              ToDoStoreObj.setToggleEditCard({
                ...ToDoStoreObj.toggleEditCard,
                status: "",
              });
              ToDoStoreObj.setWithOverlay("");
              setInputState("");
            }}
          >
            Close
          </button>
          <input
            onClick={() => {
              if (
                ToDoStoreObj.editedCardTitle &&
                ToDoStoreObj.editedCardDescription
              ) {
                ToDoStoreObj.editToDo();
                setInputState("");
                toastCardEdited();
              } else {
                setInputState("red");
                toastFillInput();
              }
            }}
            type="button"
            value={"Save"}
          />
        </div>
      </form>
    </div>
  );
});

export default EditCard;
