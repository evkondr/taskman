import React from "react";
import styled, { css } from "styled-components";

interface IButton {
    children: React.ReactNode,
    clickHandler?: (e:React.MouseEvent<HTMLButtonElement>) => void;
    success?: boolean,
    danger?: boolean
}
const StyledButton = styled.button<IButton>`
    font-size: 1.3rem;
    border: 1px solid var(--theme-color-3);
    border-radius: 5px;
    background: transparent;
    padding: 15px;
    line-height: 0;
    cursor: pointer;
    margin-right: 5px;
    &:last-child{
        margin-right: 0;
    }
    ${props => props.success && css`
        background-color: #00c271;
        border-color: #00c271;;
        color: #fff;
    `}
    ${props => props.danger && css`
        background-color: #e90000;
        border-color: #e90000;
        color: #fff;
    `}
`
const Button = (props:IButton) => {
    return <StyledButton type="button" onClick={props.clickHandler} {...props} />
}
export default Button;