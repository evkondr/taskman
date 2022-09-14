import React from "react";
import styled from "styled-components";
import { IChildren } from "../interfaces";

interface ICenter extends IChildren{
    centered?: boolean | undefined
}
//STYLES
const StyledContainer = styled.div`
    display: flex;
    align-items: ${(props:ICenter) => props.centered?"center":"flex-start"};
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
`
//COMPONENT
const Container = ({children, centered}:ICenter) => {
    return <StyledContainer centered={centered}>
        {children}
    </StyledContainer>
}
export default Container;