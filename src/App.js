import "./App.css";
import Profile from "./components/Profile";
import UserList from "./components/UserList";

import UserState from "./context/User/UserState";

function App() {
  return (
    <div className="container">
      <UserState>
        <div className="container-body desktop">
          <UserList />
          <Profile />
        </div>
      </UserState>
    </div>
  );
}

export default App;
