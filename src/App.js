
import './App.css';
import IdCard from './components/IdCard';
import usersArray from './components/Data.jsx';
import Greeting from './components/Greetings';

function App() {
  return (
    <div className="App">
    
    {usersArray.map(elem => {
      
    

      return <IdCard user={elem} />
    })}
      
    </div>
  );
}

export default App;
