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
    border-radius: 5px;
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
    h5{
        margin-bottom: 20px;
    }
`

const UserItem = (props:IUserItem) => {
    const {user} = props
    return <StyledItem>
        <h5>{user.name}</h5>
        <Avatar />
    </StyledItem>
}
export default UserItem;