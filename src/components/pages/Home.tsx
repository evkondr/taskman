import React from "react";
import styled from "styled-components";

const StyledAbout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 2rem;
    *{
        margin-bottom: 15px;
    }
    h1{
        width: 550px;
        text-align: center;
        border-top: 1px solid #525252;
        border-bottom: 1px solid #525252;
        color: #3ea5ff;
        padding-top: 5px;
        margin-bottom: 20px;
    }
    h2{
        font-size: 2rem;
    }
    li{
        margin-bottom: 10px;
    }
`
const Home = () => {
    const steck = ["React", "Функциональные компоненты, React-hooks", "styled-components", "Роутинг React-router-dom", 
    "Redux/ReduxToolKit. Асинхронные экшены Redux-thunk", "Работа с API с помощью клиента Axios", "Открытое API http://jsonplaceholder.typicode.com"]
    return <StyledAbout>
        <h1>TASKMAN</h1>
        <h2>SPA приложени к итоговому заданию на стажировку Lad.</h2>
        <p>- Стек -</p>
        <ul>
            {steck.map(item => <li>- {item}</li>)}
        </ul>  
    </StyledAbout>
}
export default Home;