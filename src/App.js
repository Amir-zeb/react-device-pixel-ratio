import logo from './logo.svg';
import './App.css';
import useDevicePixelRatio from './hooks/useDevicePixelRatio';

function App() {
  // Use the hook to handle device pixel ratio adjustments.
  // The logic inside the hook will run only if the screen width is >= 768px.
  useDevicePixelRatio(); // Use the hook and specify the min screen width if needed

  return (
    <div className="App" id="main-content">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
