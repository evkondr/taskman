import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Navigation from './components/Navigation';
import Container from './components/Container';
import Logo from './components/Logo';
import logourl from "./TASKMAN.png";
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Users from './components/pages/Users';
import Tasks from './components/pages/Tasks';

function App() {
  return (
    <>
      <Header>
        <Logo>
          <img src={logourl} alt="logo taskman" />
        </Logo>
        <Navigation /> 
      </Header>
      <main>
          <Container>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="profile" element={<Profile />}/>
                <Route path="users" element={<Users />}/>
                <Route path="tasks" element={<Tasks />}/>
              </Routes>
          </Container>
        </main>
    </>
  );
}

export default App;
