import React from "react";
import Greeting from './Greetings';
import usersArray from './Data';


const IdCard = (props) => {
    console.log(props);
    const {user: {firstName,lastName, gender, height, birth, picture }} = props;
    
    
  

    return (
      <div className="IdCard">
        <img className="profile-image" src={picture} alt="ProfilePicture" />
        <div className="cardDetails">
        <h2> <Greeting language="fr">{firstName}</Greeting> </h2>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Gender: {gender}</p>
          <p>Height: {height}</p>
          <p>Birthdate: {birth}</p>
        </div>
      </div>
    );
  };

export default IdCard;

