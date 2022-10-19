import styled from "styled-components";
import { IChildren } from "../interfaces";

interface ICheckbox{
  completed: boolean
}
//STYLES
const CustomCheckbox = styled.div`
  width: 20px;
  position: relative;
  margin: 20px auto;
  label {
    width: 20px;
    height: 20px;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    border-bottom: 1px solid green;
   &:after {
      content: '';
      width: 25px;
      height: 10px;
      position: absolute;
      top: -10px;
      left: 0px;
      border: 5px solid green;
      border-top: none;
      border-right: none;
      background: transparent;
      opacity: 0.1;
      transform: rotate(-45deg);
    }
    &:hover::after {
      opacity: 0.5;
    }
  }
  input[type=checkbox] {
    visibility: hidden;
    &:checked + label:after {
      opacity: 1;
    }
  } 
`
//COMPONENT
const Checkbox = ({completed}:ICheckbox) => {
    return <CustomCheckbox>
        <input type="checkbox" id="customCheckbox" checked={completed}/>
        <label htmlFor="customCheckbox"></label>
    </CustomCheckbox>
}
export default Checkbox;