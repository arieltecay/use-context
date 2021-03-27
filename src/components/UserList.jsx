import { useContext, useEffect } from "react";
import UserContext from "../context/User/UserContext";

const UserList = () => {
  const { getUsers, getProfile, users } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  const selectProfile = (id) => {
    getProfile(id);
  };
  return (
    <div>
      <h1>User List</h1>
      <table class="table table-bordered " style={{ width: "300px" }}>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        {users &&
          users.map((user) => (
            <tbody onClick={() => selectProfile(user.id)}>
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.first_name}</td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
};

export default UserList;
