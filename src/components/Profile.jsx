import { useContext } from "react";
import UserContext from "../context/User/UserContext";

const Profile = () => {
  const { selectedUser } = useContext(UserContext);

  return (
    <div>
      <h1>Profile</h1>
      {selectedUser && (
        <div className="card" style={{ width: "18rem" }}>
          <img src={selectedUser.avatar} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              <div>
                <div>Name: {selectedUser.first_name}</div>
                <div>LastName: {selectedUser.last_name}</div>
                <div>E-Mail: {selectedUser.email}</div>
              </div>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
