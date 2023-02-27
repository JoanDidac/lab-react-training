
import './App.css';
import IdCard from './components/IdCard';
import usersArray from './components/Data.jsx';
import Greeting from './components/Greetings';
import Random from './components/Random';

function App() {
  return (
    <div className="App">
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
    {usersArray.map(elem => {
      
    

      return <IdCard user={elem} />
    })}
      
    </div>
  );
}

export default App;
