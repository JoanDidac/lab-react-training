import './App.css';
import IdCard from './components/IdCard';
import usersArray from './components/Data.jsx';
import Greeting from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreaditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import foto1 from './assets/images/P1046453.JPG';
import foto2 from './assets/images/P1046458.JPG';
import foto3 from './assets/images/P1046459.JPG';
import foto4 from './assets/images/P1046460.JPG';

function App() {
  return (
    <div className="App">
    <Greeting></Greeting>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <Rating>0</Rating>
      <Rating>1.19</Rating>
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
          owner="Jay Z"
          bgColor="#ffccac"
          color="black"
        />
      </>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />

      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://images.unsplash.com/photo-1625241152315-4a698f74ceb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />
      <>
        <LikeButton>Likes</LikeButton>
        <LikeButton>Likes</LikeButton>
        <LikeButton>Likes</LikeButton>
        
      </>
      <>
      <ClickablePicture imgList={[foto1,foto2,foto3,foto4]} />
        
      </>
    </div>
  );
}

export default App;
