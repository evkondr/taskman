import React from "react";
import styled from "styled-components";
import { IUser } from "../interfaces";
import Avatar from "./Avatar";

const StyledWrap = styled.div`
    display: flex;
    height: 100%;
    box-shadow: 1px 1px 3px rgba(0,0,0, .7);
`
const AvatarSide = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
`
const AvatarWrap = styled.div`
    width: 150px;
`
const InfoSide = styled.aside`
    display: flex;
`
interface IUserProfileProps{
    currentUser: IUser | null
}
const UserProfile = ({currentUser}:IUserProfileProps) => {
    //#TODO: Доделать Стили
    return <StyledWrap>
        <AvatarSide>
            <AvatarWrap>
            <Avatar/>
            </AvatarWrap>
            <p>{currentUser?.name}</p>
            <p>{currentUser?.phone}</p>
            <p>{currentUser?.company.name}</p>
        </AvatarSide>
    </StyledWrap>
}

export default UserProfile