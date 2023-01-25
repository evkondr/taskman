import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Container from "./components/Container";
import Logo from "./components/Logo";
import logourl from "./imgaes/TASKMAN.png";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import Users from "./components/pages/Users";
import Tasks from "./components/pages/Tasks";
import Auth from "./components/pages/Auth";
import NotFound from './components/pages/NotFound';
import styled from "styled-components";
import {useAppSelector, useAppDispatch} from "./hooks/reduxHooks";
import { logout, login } from './Store/authSlice';
import SingleUser from './components/pages/SingleUser';


const Main = styled.main`
  height: 100%;
  color: #525252;
  padding: 70px 10px 10px;
`
const StyledLink = styled.div`
  display: flex;
  flex-grow: 2;
  font-size: 1.5rem;
  justify-content: flex-end;
  color: #fff;
`
const StyledLogout = styled.button`
  font-size: 1.5rem;
  color: #fff;
  border: none;
  background: none;
  cursor: pointer;
`
function App() {
  const {isAuth} = useAppSelector(state => state.isAuth)
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onClickHandler = () => {
    localStorage.removeItem("userID")
    dispatch(logout())
    navigate("/Authorization");
  }
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userID") as string)
    if(data){
        dispatch(login(data))
    }else{
      navigate("/Authorization");
    }
  }, [dispatch, navigate])
  return (
    <>
      <Header>
        <Logo>
          <img src={logourl} alt="logo taskman" />
        </Logo>
        <Navigation /> 
        <StyledLink>
          {isAuth && <StyledLogout onClick={onClickHandler}>Выйти</StyledLogout>}
        </StyledLink>
      </Header>
      <Main>
          <Container>
            <Routes>
                <Route path="/authorization" element={<Auth />}/>
                <Route path="*" element={<NotFound />} />
                {isAuth && <>
                  <Route path="/" element={<Home />}/>
                  <Route path="profile" element={<Profile />}/>
                  <Route path="users" element={<Users />}/>
                  <Route path="tasks" element={<Tasks />}/>
                  <Route path="users/:userID" element={<SingleUser />}/>
                </>}
              </Routes>
          </Container>
        </Main>
    </>
  );
}

export default App;
