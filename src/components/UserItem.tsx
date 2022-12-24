import React from "react";
import styled from "styled-components";
import { IUser } from "../interfaces";
import Avatar from "./Avatar";
interface IUserItem{
    user:IUser
}
const StyledItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border: 1px solid rgba(0,0,0, .1);
    height: 230px;
    font-size: 1.5rem;
    box-shadow: 1px 1px 5px rgba(0,0,0, .5);
    padding: 10px;
    margin: 15px;
    text-align: center;
    cursor: pointer;
    transition: all .1s ease-in-out;
    &:hover{
        transform: scale(110%);
        box-shadow: 10px 10px 5px rgba(0,0,0, .5);;
    }
`

const UserItem = (props:IUserItem) => {
    const {user} = props
    return <StyledItem>
        <p>{user.name}</p>
        <Avatar />
    </StyledItem>
}
export default UserItem;