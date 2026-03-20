import React from "react";
import "../components/Card.css";
const Card = ({ userName, age, img }) => {
  return (
    <div className="card">
      <img src={img} alt="elt" />
      <h1>
        {userName}, {age}
      </h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sit in eius
        dolores impedit facilis excepturi consectetur sunt et suscipit?
      </p>
    </div>
  );
};

export default Card;
