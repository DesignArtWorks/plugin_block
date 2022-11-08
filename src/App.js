import logo from './logo.svg';
import './App.css';
import Header from "./Header-component/Header";
import Counter from "./Counter/Counter";

function App() {
    const name = 'Wemerson'
  return (
    <div className="App">
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
      <main>
          <Header name={name}/><br/>
          <Counter/>
      </main>
    </div>
  );
}

export default App;
