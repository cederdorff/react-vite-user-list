import "./App.css";
import reactLogo from "./assets/react.svg";
import User from "./components/User";
import viteLogo from "/vite.svg";

function App() {
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
        <User
          name="John Doe"
          mail="john.doe@example.com"
          title="Software Engineer"
        />
        <User
          name="Jane Smith"
          mail="jane.smith@example.com"
          title="Project Manager"
        />
        <User
          name="Emily Johnson"
          mail="emily.johnson@example.com"
          title="Designer"
        />
        <User
          name="Michael Brown"
          mail="michael.brown@example.com"
          title="Developer"
        />
        <User
          name="Jessica Davis"
          mail="jessica.davis@example.com"
          title="Product Owner"
        />
      </div>
    </>
  );
}

export default App;
