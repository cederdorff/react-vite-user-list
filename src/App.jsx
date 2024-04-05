import { useEffect, useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import User from "./components/User";
import viteLogo from "/vite.svg";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://race-rest-default-rtdb.firebaseio.com/users.json"
      );
      const data = await response.json();

      const usersArray = Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      }));

      setUsers(usersArray);
    }
    fetchUsers();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="user-grid">
        {users.map(user => (
          <User
            key={user.id}
            name={user.name}
            mail={user.mail}
            title={user.title}
          />
        ))}
      </div>
    </>
  );
}

export default App;
