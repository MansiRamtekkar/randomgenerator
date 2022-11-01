import React from "react";
import Footer from "./components/Footer";

function App() {

  function getNewColor(){
    let symbols = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color = color + symbols[Math.floor(Math.random() * 16)];
    }
    document.getElementById("hex").innerHTML = color;
    document.body.style.background = color;
  }
  function getNewNumber(){
    document.getElementById("num").innerHTML = Math.floor(Math.random() * 11);
  }
  
  return (
    <div className="App">
      <div className="color">
        <span id="hex"></span>
        <button onClick={getNewColor}>get random color</button>
      </div>
      <div className="number">
        <span id="num"></span>
        <button onClick={getNewNumber}>get random number</button>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
