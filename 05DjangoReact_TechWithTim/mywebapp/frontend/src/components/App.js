import React, { Component } from "react";
// import { render } from "react-dom";
//import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (        
        <div>     
          <HomePage />
        </div>
      );
  }
}

const appDiv = ReactDOM.createRoot(document.getElementById("app"));
appDiv.render(<App />);

// return ( <h1>Testing React Code</h1> );
// https://stackoverflow.com/questions/71668256/deprecation-notice-reactdom-render-is-no-longer-supported-in-react-18
// render has been deprecated as of React18
// original code
// const appDiv = document.getElementById("app");
// render(<App />, appDiv);
