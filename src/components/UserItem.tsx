import React from "react";
import styled from "styled-components";
import { IUser } from "../interfaces";
interface IUserItem{
    user:IUser
}
const StyledItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 150px;
    height: 230px;
    font-size: 1.5rem;;
    border: 1px solid #3f3f3f;
    box-shadow: 1px 1px 5px rgba(0,0,0, .5);
    padding: 10px;
    margin: 15px;
    text-align: center;
    cursor: pointer;
    transition: all .1s ease-in-out;
    &:hover{
        transform: scale(110%);
        box-shadow: 15px 15px 5px rgba(0,0,0, .8);;
    }
`
const StyledAvatar = styled.div`
    width: 100%;
    height: 150px;
    background-color: #3f3f3f;
    margin-bottom: 10px;
`
const UserItem = (props:IUserItem) => {
    const {user} = props
    return <StyledItem>
        <StyledAvatar />
        <p>{user.name}</p>
    </StyledItem>
}
export default UserItem;