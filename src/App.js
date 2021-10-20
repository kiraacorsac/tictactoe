import logo from './logo.svg';
import './App.css';
import Clicker from "./components/Clicker"
import Paragraph from "./components/Paragraph"
function App() {



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Clicker></Clicker>
        <Paragraph></Paragraph>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
