import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNav = styled.nav`
    display: flex;
    font-size: 1.5rem;
    color: #fff;
    a{
        border: 1px solid #fff;
        border-radius: 3px;
        padding: 10px;
        margin-right: 10px;
        box-shadow: 0 0 10px rgba(255,255,255, 0);
        transition: all .1s ease-in-out;
        :hover{
            box-shadow: 0 0 10px rgba(255,255,255, .5);
        }
    }
`

const Navigation = () => {
    return <StyledNav>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="profile">Профиль</NavLink>
        <NavLink to="users">Пользователи</NavLink>
        <NavLink to="tasks">Мои задачи</NavLink>
    </StyledNav>
}
export default Navigation