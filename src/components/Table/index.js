import React, { useEffect } from "react";
import "./index.scss";
function Table() {
  const [users, setUsers] = React.useState([]);

  useEffect(() => {
    fetch("https://636392ed37f2167d6f7ce510.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  return (
    <>
      <div className="container">
        <div className="row-1">
          <div className="col-3">
            <h5>#</h5>
            {users.map((item, idx) => {
              return (
                <h5 key={idx}>
                  <br />
                  {item.id}
                </h5>
              );
            })}
          </div>
          <div className="col-3">
            <h5>First name:</h5>
            {users.map((item, idx) => {
              return (
                <h5 key={idx}>
                  <br />
                  {item.firstname}
                </h5>
              );
            })}
          </div>
          <div className="col-3">
            <h5>Last name:</h5>
            {users.map((item, idx) => {
              return (
                <h5 key={idx}>
                  <br />
                  {item.lastname}
                </h5>
              );
            })}
          </div>
          <div className="col-3">
            <h5>Age:</h5>
            {users.map((item, idx) => {
              return (
                <h5 key={idx}>
                  <br />
                  {item.age}
                </h5>
              );
            })}
          </div>
          <div className="col-3">
            <h5>Status</h5>
            {users.map((item, idx) => {
              return (
                <h5 key={idx}>
                  <br />
                  {item.userStatus}
                </h5>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
