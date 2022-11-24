import React from "react";
import { useState } from "react";
import { Navbar } from "react-bootstrap";
import "./index.scss";
import { Link, Router } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Form from "../Input";
import Table from "../Table";
import { ROUTER } from "../../routes/consts";

function Home() {
  return (
    <>
      <div className="container">
        <Navbar>
          <ul>
            <li className="nav-list">
              <h3>Home Page</h3>
            </li>
            <li className="nav-lis">
              <Link to={ROUTER.USER.DETAILS}>Get Users</Link>
            </li>
            <li className="nav-lis">
              <Link to={ROUTER.USER.PATH}>Set a User</Link>
            </li>
          </ul>
        </Navbar>
      </div>
    </>
  );
}

export default Home;

{
  /* {isShowResult ? (
  <Form
    inputsValue={inputsValue}
    setInputsValue={setInputValue}
    setIsShowResult={setIsShownResult}
  />
) : (
  <>
    <Table />
  </>
)} */
}
