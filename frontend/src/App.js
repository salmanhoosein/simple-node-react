import logo from "./logo.svg";
import "./App.css";
import axios from "axios";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>hello world</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          onClick={() => {
            axios
              .get("http://localhost:8000/test")
              .then((res) => {
                console.log(res);
              })
              .catch((err) => console.log(err));
          }}
        >
          CHECK BACKEND
        </button>
      </header>
    </div>
  );
}

export default App;
