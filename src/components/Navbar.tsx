import { observer } from "mobx-react";
import React from "react";
import { ToDoStoreObj } from "../ToDoStore";
import { useNavigate } from "react-router-dom";



type Props = {};

const Navbar = observer(({}: Props) => {
  const navigate = useNavigate();

  return (
    <div className="cardManagementNavbar">
      <div className="emailAndLogOut">
        <div className="cardManagementEmailPlaceholder">
          {ToDoStoreObj.author}
        </div>
        <button
          onClick={() => {
            ToDoStoreObj.setAuthor("");
            navigate("/");
          }}
          className="logOutBtn"
        >
          Log out
        </button>
      </div>
      <div className="createCardBtnPlaceholder">
        <button
          className="createCardBtn"
          onClick={() => {
            ToDoStoreObj.setToggleCreateCard("active");
            ToDoStoreObj.setWithOverlay("active");
          }}
        >
          Create card
        </button>
      </div>
    </div>
  );
});

export default Navbar;
