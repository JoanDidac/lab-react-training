import './App.css';
import IdCard from './components/IdCard';
import usersArray from './components/Data.jsx';
import Greeting from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreaditCard';
import Rating from './components/Rating';

function App() {
  return (
    <div className="App">
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <Rating>4</Rating>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      {usersArray.map((elem) => {
        return <IdCard user={elem} />;
      })}
      <>
        <CreditCard
          type="Visa"
          number="0123456789012345"
          expirationMonth={12}
          expirationYear={2025}
          bank="Big Bank, Inc."
          owner="Joan Didac"
          bgColor="#1c1e21"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="9876543210987654"
          expirationMonth={3}
          expirationYear={2024}
          bank="Another Bank, Inc."
          owner="Infanta De Naranja"
          bgColor="#ffcccc"
          color="black"
        />
      </>
    </div>
  );
}

export default App;
