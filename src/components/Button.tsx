import React from "react";
import styled, { css } from "styled-components";

interface IButton {
    children: React.ReactNode,
    clickHandler?: (e:React.MouseEvent<HTMLButtonElement>) => void;
    success?: boolean
}
const StyledButton = styled.button<IButton>`
    font-size: 1.3rem;
    border: 1px solid grey;
    padding: 15px;
    line-height: 0;
    cursor: pointer;
    ${props => props.success && css`
        background-color: #00c271;
        border-color: #00c271;;
        color: #fff;
    `}
`
const Button = (props:IButton) => {
    return <StyledButton type="button" onClick={props.clickHandler} {...props} />
}
export default Button;