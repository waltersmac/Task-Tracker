import logo from './logo.svg';
import './App.css';
import UserFetching from './components/UserFetching';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UserFetching />
      </header>
    </div>
  );
}

export default App;
