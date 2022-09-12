import React from "react";
import styled, {keyframes} from "styled-components";

const PreloaderWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const StyledLoader = styled.div`
    width: 50px;
    height: 50px;
    border: 5px solid #3ea5ff;
    border-top-color: transparent;
    border-radius: 50%;
    animation: ${rotate} 1s linear infinite;
`
const Preloader = () => {
    return <PreloaderWrap>
        <StyledLoader />
    </PreloaderWrap>
}
export default Preloader;