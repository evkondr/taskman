import styled from "styled-components";
import { IChildren } from "../interfaces";

interface ICheckbox{
  completed: boolean,
  onChangeHandler: (e:React.ChangeEvent<HTMLInputElement>) => void
}
const Wrapper = styled.div`
  display: flex;
`  
//COMPONENT
const Checkbox = ({completed, onChangeHandler}:ICheckbox) => {
    return <Wrapper>
        <input type="checkbox" id="customCheckbox" checked={completed} onChange={onChangeHandler}/>
    </Wrapper>
}
export default Checkbox;
