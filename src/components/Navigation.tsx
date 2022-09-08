import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
    display: flex;
    font-size: 1.5rem;
    color: #fff;
    a{
        padding: 10px;
        box-shadow: 0px 0px 2px rgba(0,0,0, 0.7);
        margin-right: 10px;
    }
`

const Navigation = () => {
    return <StyledNav>
        <Link to="/">Главная</Link>
        <Link to="profile">Профиль</Link>
        <Link to="users">Пользователи</Link>
        <Link to="users">Мои задачи</Link>
    </StyledNav>
}
export default Navigation