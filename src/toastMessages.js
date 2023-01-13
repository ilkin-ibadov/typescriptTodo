import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastCardAdded = () => {
  toast.success("New card successfully added!", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 1000,
  });
};

export const toastFillInput = () => {
  toast.error("Please fill the input fields properly!", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 1000,
  });
};

export const toastCardDeleted = () => {
  toast.success("Card successfully deleted!", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 1000,
  });
};

export const toastCardEdited = () => {
  toast.success("Card successfully edited!", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 1000,
  });
};

export const toastSomethingWentWrong = () => {
  toast.error("Something went wrong. Please try again", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 1000,
  });
};
