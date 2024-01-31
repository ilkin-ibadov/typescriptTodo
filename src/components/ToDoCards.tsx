import ToDoCard from "./ToDoCard";
import { ToDoItem } from "../ToDoStore";

type Props = {
  cards: ToDoItem[];
};

function ToDoCards({ cards }: Props) {
  return cards.length ? (
    <div className="cardsPlaceholder">
      {cards.map((todo) => {
        return <ToDoCard key={todo._id} todo={todo} />;
      })}
    </div>
  ) : (
    <div className="cardsEmptyPlaceholder">
      <p>No cards available</p>
    </div>
  );
}

export default ToDoCards;
