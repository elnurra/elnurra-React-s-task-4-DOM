import React from "react";
import { sendRequest } from "../../actions/sendRequest.js";
import { useHistory } from "react-router";
import "./index.scss";
import { ROUTER } from "../../routes/consts.js";
function Form({ inputsValue, setInputsValue, setIsShowResult }) {
  const handleChangeInputValue = (e) => {
    const { name, value } = e.target;
    setInputsValue({ ...inputsValue, [name]: value });
    console.log(e.target.value);
  };
  const handleSubmit = (submit) => submit.preventDefault();
  const handleClickButton = () => {
    if (
      inputsValue.firstname.trim().length &&
      inputsValue.lastname.trim().length &&
      Number(inputsValue.age)
    ) {
      sendRequest(inputsValue);
    } else {
      console.log("error");
    }
  };
  const handleShowButton = () => {
    const { push } = useHistory();
    push(ROUTER.USER.DETAILS);
  };
  return (
    <>
      <div className="container">
        <div className="table-form">
          <form method="get" onSubmit={handleSubmit}>
            <label htmlFor="firstname">Fisrt name: </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              defaultValue={inputsValue.firstname}
              onChange={handleChangeInputValue}
            ></input>
            <br />
            <label htmlFor="lastname">Last name: </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              defaultValue={inputsValue.lastname}
              onChange={handleChangeInputValue}
            ></input>
            <br />
            <label htmlFor="user-age">Age: </label>
            <input
              type="text"
              id="user-age"
              className="user-age"
              name="age"
              defaultValue={inputsValue.age}
              onChange={handleChangeInputValue}
            ></input>
            <br />
            <select
              id="user-status"
              className="user-status"
              name="userStatus"
              defaultValue={inputsValue.userStatus}
              onClick={handleChangeInputValue}
            >
              <option name="Students">student</option>
              <option name="Teachers">teacher</option>
            </select>
            <br />

            <button className="show-list" onClick={handleShowButton}>
              Show list
            </button>
            <button className="add-list" onClick={handleClickButton}>
              Add User
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
