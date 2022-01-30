import './App.css';
import Login  from './components/Login';
import Price from './components/Price'
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Price />
        <Login />
      </header>
    </div>
  );
}

export default App;
