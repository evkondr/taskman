import React from "react";
import styled from "styled-components";
import { IChildren } from "../interfaces";
import Container from "./Container";

const StyledHeader = styled.header`
    position: absolute;
    width: 100%;
    background-color: var(--theme-color-1);
    padding: 10px;
`

const Header = ({ children }:IChildren) => {
    return <StyledHeader>
        <Container centered>
            {children}
        </Container>
    </StyledHeader> 
}
export default Header