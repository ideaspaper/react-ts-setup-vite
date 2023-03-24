import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CounterPage from './pages/CounterPage';

function App(): JSX.Element {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <CounterPage />
    </div>
  );
}

export default App;
