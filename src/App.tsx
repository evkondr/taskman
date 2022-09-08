import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import logourl from "./TASKMAN.png";

function App() {
  return (
    <>
      <Header>
        <Logo>
          <img src={logourl} alt="" />
        </Logo>
        <Navigation /> 
      </Header>
    </>
  );
}

export default App;
