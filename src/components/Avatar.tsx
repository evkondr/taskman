import React from "react";
import styled from "styled-components";
import avatar from "../imgaes/Avatar.jpg";
interface AvatarProps{
    sz?:number,
    url?:string
}
const StyledAvatar = styled.div`
    ${(props:AvatarProps) => {
        return {
            width: `${props.sz}px`,
            height: `${props.sz}px`
        }
    }}
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0px 0 0 5px var(--theme-color-2);
    margin-bottom: 10px;
    overflow: hidden;
    img{
        transform: translateY(10px);
        width: 100%;
    }
`
const Avatar = ({sz = 150, url = avatar}:AvatarProps) => {
    console.log(sz, url)
    return <StyledAvatar sz={sz}>
        <img src={url} alt="" />
    </StyledAvatar>
}
export default Avatar;