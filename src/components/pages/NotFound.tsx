import React from "react";
import styled from "styled-components";

const StyledError = styled.p`
    width: 100%;
    font-size: 2rem;
    text-align: center;
    margin-top: 30px;
`
const NotFound = () => {
    return <StyledError>
        Страницы не найдены
    </StyledError>
}
export default NotFound