import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../css/App.scss";

function App(){
    const value = "hello world";
    return(
      <div className="App">
        <h1> {value} </h1>
      </div>
    );
}

export default hot(module)(App);