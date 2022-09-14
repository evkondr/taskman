import React from "react";
import styled from "styled-components";
import { IChildren } from "../interfaces";

const StyledLogo = styled.div`
    margin-right: 20px;
`
const Logo = ({children}:IChildren) => {
    return <StyledLogo>
        {children}
    </StyledLogo>
}
export default Logo;
