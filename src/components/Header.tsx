import React from "react";
import styled from "styled-components";
import { IChildren } from "../interfaces";
import Container from "./Container";

const StyledHeader = styled.header`
    width: 100%;
    background-color: #3ea5ff;
    padding: 10px;
`

const Header = ({ children }:IChildren) => {
    return <StyledHeader>
        <Container>
            {children}
        </Container>
    </StyledHeader> 
}
export default Header