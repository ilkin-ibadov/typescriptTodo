import { observer } from "mobx-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToDoStoreObj } from "../ToDoStore";
import { toastFillInput } from "../toastMessages";

export const Login: React.FC = observer(() => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [submitBtn, setSubmitBtn] = useState("");
  const [emailInputState, setEmailInputState] = useState("");

  function checkIfValid() {
    if (email === "" || email.includes("@") === false) {
      setEmailInputState("red");
      toastFillInput();
    } else {
      ToDoStoreObj.setAuthor(email);
      navigate("/dashboard");
    }
  }

  function isValid() {
    if (email && email.includes("@")) {
      setEmailInputState("");
    }
  }

  useEffect(() => {
    if (email && email.includes("@")) {
      setSubmitBtn("active");
    } else {
      setSubmitBtn("");
    }
    isValid();
  }, [email]);

  return (
    <div className="mainContainer">
      <div className="loginCard">
        <span>LOGIN FORM</span>
        <form action="">
          <div className="emailInputPlaceholder">
            <label className={`${emailInputState}`} htmlFor="loginEmailInput">
              Email
            </label>
            <input
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              type="email"
              required
              id="loginEmailInput"
              className={`${emailInputState}`}
              value={email}
            />
          </div>
          <input
            onClick={checkIfValid}
            type="submit"
            value={"Submit"}
            className={`submitEmailBtn ${submitBtn}`}
          />
        </form>
      </div>
    </div>
  );
});
