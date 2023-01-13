import { action, makeAutoObservable, observable } from "mobx";
import { toastSomethingWentWrong } from "./toastMessages";
import { useNavigate } from "react-router-dom";

export type ToDoItem = {
  id?: number;
  title: string;
  description: string;
  author?: string;
};

type editObj = {
  status: string;
  id: number | undefined;
};

class ToDoStore {
  url: string = "https://l.study-link-demo.com/cards";

  author: string = JSON.stringify(localStorage.getItem("email"))
    .substring(1)
    .slice(0, -1);

  todos: ToDoItem[] = [];

  withOverlay: string = "";

  toggleCreateCard: string = "";

  toggleEditCard: editObj = { status: "", id: 0 };

  toggleDeleteCard: editObj = { status: "", id: 0 };

  editedCardTitle: string = "";

  editedCardDescription: string = "";

  constructor() {
    makeAutoObservable(this, {
      todos: true,
      author: true,
      url: true,
      withOverlay: true,
      toggleCreateCard: true,
      toggleEditCard: true,
      toggleDeleteCard: true,
      addToDo: true,
      setAuthor: true,
      setTodos: true,
      getAllToDos: true,
      editToDo: true,
      deleteToDo: true,
      setWithOverlay: true,
      setToggleCreateCard: true,
      setToggleEditCard: true,
      setToggleDeleteCard: true,
    });
  }

  setAuthor(prop: string) {
    localStorage.setItem("email", prop);
    const email = localStorage.getItem("email");
    if (email !== null) {
      this.author = email;
    }
  }

  setTodos(prop: ToDoItem[]) {
    this.todos = prop;
  }

  setWithOverlay(prop: string) {
    this.withOverlay = prop;
  }

  setToggleCreateCard(prop: string) {
    this.toggleCreateCard = prop;
  }

  setToggleEditCard(prop: editObj) {
    this.toggleEditCard = prop;
  }

  setToggleDeleteCard(prop: editObj) {
    this.toggleDeleteCard = prop;
  }

  setEditedCardTitle(prop: string) {
    this.editedCardTitle = prop;
  }

  setEditedCardDescription(prop: string) {
    this.editedCardDescription = prop;
  }

  addToDo(prop: ToDoItem) {
    fetch(this.url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prop),
    }).catch((err) => {
      console.log(err);
      toastSomethingWentWrong();
    });
    this.setToggleCreateCard("");
    this.setWithOverlay("");
    this.getAllToDos();
  }

  getAllToDos() {
    if (this.author) {
      fetch(this.url + "/" + this.author)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.setTodos(data);
        })
        .catch((err) => {
          toastSomethingWentWrong();
          console.log(err);
        });
    } else {
      console.log("no response");
      toastSomethingWentWrong();
    }
  }

  editToDo() {
    fetch(this.url + "/" + this.toggleEditCard.id, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: this.editedCardTitle,
        description: this.editedCardDescription,
      }),
    }).catch((err) => {
      console.log(err);
      toastSomethingWentWrong();
    });
    this.setToggleEditCard({ ...this.toggleEditCard, status: "" });
    this.setWithOverlay("");
    this.setEditedCardTitle("");
    this.setEditedCardDescription("");
    this.getAllToDos();
  }

  deleteToDo() {
    fetch(this.url + "/" + this.toggleDeleteCard.id, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((err) => {
      console.log(err);
      toastSomethingWentWrong();
    });
    this.setToggleDeleteCard({ ...this.toggleDeleteCard, status: "" });
    this.setWithOverlay("");
    this.getAllToDos();
  }
}

export const ToDoStoreObj = new ToDoStore();
