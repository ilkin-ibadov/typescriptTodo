import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import ToDoCard from "./ToDoCard";
import { ToDoStoreObj } from "../ToDoStore";
import { ToDoItem } from "../ToDoStore";

type Props = {
  cards: ToDoItem[];
};

function ToDoCards({ cards }: Props) {
  return cards.length ? (
    <div className="cardsPlaceholder">
      {cards.map((todo) => {
        return <ToDoCard key={todo.id} todo={todo} />;
      })}
    </div>
  ) : (
    <div className="cardsEmptyPlaceholder">
      <img src={require("../images/spinning-loading.gif")} alt="" />
    </div>
  );
}

export default ToDoCards;
