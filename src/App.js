import Counter from './components/button';
import './App.css';
import { useContext } from 'react';
import { Countercontext } from "./context/Counter";


function App() {

  const CounterState = useContext(Countercontext);
  return (
    <div className="App">

      <h1>Counter is {CounterState.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />


    </div>
  );
}

export default App;
