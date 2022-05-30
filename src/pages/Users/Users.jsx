import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Users.css";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [newUser, setNewUser] = useState({});
  const [editedUser, setEditedUser] = useState({});

  const getUsers = () => {
    setIsLoading(true);
    axios
      .get("api/v1/users")
      .then((response) => {
        setIsLoading(false);
        setUsers(response.data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  };
  const addUser = () => {
    setIsLoading(true);
    axios
      .post("api/v1/users", newUser)
      .then(() => {
        setIsLoading(false);
        getUsers();
        setNewUser({});
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  };
  const updateUser = (id) => {
    setIsLoading(true);
    axios
      .put(`api/v1/users/${id}`, editedUser)
      .then(() => {
        setIsLoading(false);
        getUsers();
        setEditedUser({});
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  };
  const deleteUser = (id) => {
    setIsLoading(true);
    axios
      .delete(`/api/v1/users/${id}`)
      .then(() => {
        setIsLoading(false);
        getUsers();
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div style={{ margin: "5px" }}>
      {isLoading && <div>Please wait loading</div>}
      {error && <div>Oops error</div>}
      {!isLoading && !error && (
        <div>
          <table style={{ background: "black" }}>
            <tbody style={{ background: "white" }}>
              <tr>
                <th>id</th>
                <th>first-name</th>
                <th>last-name</th>
                <th>action</th>
                <th>action</th>
              </tr>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.iin}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>
                    <button onClick={() => updateUser(user.id)}>update</button>
                  </td>
                  <td>
                    <button onClick={() => deleteUser(user.id)}>delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="addUser">
              <input
                style={{ margin: "5px 0px" }}
                value={newUser.id}
                placeholder="add user id"
                onChange={(event) =>
                  setNewUser({ ...newUser, id: event.target.value })
                }
              />
              <input
                style={{ margin: "5px 0px" }}
                value={newUser.iin}
                placeholder="add user iin"
                onChange={(event) =>
                  setNewUser({ ...newUser, iin: event.target.value })
                }
              />
              <input
                style={{ margin: "5px 0px" }}
                value={newUser.firstName}
                placeholder="add user firstName"
                onChange={(event) =>
                  setNewUser({ ...newUser, firstName: event.target.value })
                }
              />
              <input
                style={{ margin: "5px 0px" }}
                value={newUser.lastName}
                placeholder="add user lastName"
                onChange={(event) =>
                  setNewUser({ ...newUser, lastName: event.target.value })
                }
              />
              <button onClick={addUser}>add</button>
            </div>

            <div className="addUser" style={{ margin: "5px" }}>
              <input
                style={{ margin: "5px 0px" }}
                value={editedUser.id}
                placeholder="update user id"
                onChange={(event) =>
                  setEditedUser({
                    ...editedUser,
                    id: event.target.value,
                  })
                }
              />
              <input
                style={{ margin: "5px 0px" }}
                value={editedUser.iin}
                placeholder="update user iin"
                onChange={(event) =>
                  setEditedUser({
                    ...editedUser,
                    iin: event.target.value,
                  })
                }
              />
              <input
                style={{ margin: "5px 0px" }}
                value={editedUser.firstName}
                placeholder="update user firstName"
                onChange={(event) =>
                  setEditedUser({
                    ...editedUser,
                    firstName: event.target.value,
                  })
                }
              />
              <input
                style={{ margin: "5px 0px" }}
                value={editedUser.lastName}
                placeholder="update user lastName"
                onChange={(event) =>
                  setEditedUser({
                    ...editedUser,
                    lastName: event.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default UsersPage;
