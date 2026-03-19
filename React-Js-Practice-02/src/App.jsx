import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Card from "./components/card";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="displayFlex">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      
    </>
  );
};

export default App;
