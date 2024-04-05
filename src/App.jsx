import "./App.css";
import reactLogo from "./assets/react.svg";
import User from "./components/User";
import viteLogo from "/vite.svg";

function App() {
  // Array of user objects
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      title: "Software Engineer"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      title: "Project Manager"
    },
    {
      id: 3,
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      title: "Designer"
    },
    {
      id: 4,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      title: "Developer"
    },
    {
      id: 5,
      name: "Jessica Davis",
      email: "jessica.davis@example.com",
      title: "Product Owner"
    }
  ];

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

      <div>
        {users.map(user => (
          <User
            key={user.id}
            name={user.name}
            email={user.email}
            title={user.title}
          />
        ))}
      </div>
    </>
  );
}

export default App;
