import React from "react";
import styled from "styled-components";
import { IChildren } from "../interfaces";
import Container from "./Container";

const StyledHeader = styled.header`
    width: 100%;
    background-color: #3ea5ff;
`

const Header = ({ children }:IChildren) => {
    return <StyledHeader>
        <Container>
            {children}
        </Container>
    </StyledHeader> 
}
export default Header