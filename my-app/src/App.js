import logo from './logo.svg';
import './App.css';
import FucntionalGreetingWithProps from './components/functionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      <FucntionalGreetingWithProps name="Mike" age="32" greeting="Nice to meet you!" />
    </div>
  );
}

export default App;
