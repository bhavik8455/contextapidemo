import './App.css';
import Input from "./components/input";
import Button from "./components/button";
import Card from './components/card';




function App() {



  return (
    <div className="App">
      <h1>Weather  App</h1>
      <Input />
      <Button value="Search" />
      <Card />
      <Button value="Refresh" />


    </div>
  );
};

export default App;
