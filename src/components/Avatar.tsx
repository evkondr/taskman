import React from "react";
import styled from "styled-components";
import avatar from "../imgaes/Avatar.jpg";

const StyledAvatar = styled.div`
    width: 100%;
    height: 150px;
    background-color: #3f3f3f;
    background: url(${avatar}) center no-repeat;
    background-size: cover;
    margin-bottom: 10px;
`
const Avatar = () => {
    return <StyledAvatar />
}
export default Avatar;