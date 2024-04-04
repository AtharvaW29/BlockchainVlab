import React, { Component } from "react";
import Routes from './Routes';
import NavBar from "./components/other/navbar/Navbar";

class App extends Component {
  render() {
    return (
      <>
      <div className="App">
        <Routes />
      </div>
      </>
    
    );
  }
}
   
export default App;
