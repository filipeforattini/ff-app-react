import logo from './logo.svg';
import './App.css';

const {
  REACT_APP_MY_VAR = 'default'
} = process.env


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>MY_VAR</code> = {REACT_APP_MY_VAR}
        </p>
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
