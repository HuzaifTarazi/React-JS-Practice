import React from "react";
import "../components/navbar.css";
const Navbar = () => {
  const item1 = "Home";
  const item2 = "About";
  const item3 = "Contact Us";
  const item4 = "Login";
  const item5 = "Sign Up";
  return (
    <>
      <div className="navbar">
        <ul>
          <li>{item1}</li>
          <li>{item2}</li>
          <li>{item3}</li>
          <li>{item4}</li>
          <li>{item5}</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
