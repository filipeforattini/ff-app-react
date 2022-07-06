import logo from './logo.svg';
import './App.css';

const {
  REACT_APP_MY_VAR = 'default',
  REACT_APP_A = 'default',
  REACT_APP_B = 'default',
  REACT_APP_C = 'default',
} = process.env


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>MY_VAR</code> = {REACT_APP_MY_VAR}
        </p>
        <p>A={REACT_APP_A || ''} | B={REACT_APP_B || ''} | C={REACT_APP_C || ''}</p>
      </header>
    </div>
  );
}

export default App;
