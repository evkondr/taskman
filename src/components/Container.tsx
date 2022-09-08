import React from "react";
import styled from "styled-components";
import { IChildren } from "../interfaces";

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
`
const Container = ({ children }:IChildren) => {
    return <StyledContainer>
        {children}
    </StyledContainer>
}
export default Container;