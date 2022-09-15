import React from "react";
import styled from "styled-components"
import Button from "./Button"
import { ITodo } from "../interfaces";

interface ITodoProps{
    todo: ITodo
}
const StyledItem = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    border: 1px solid gray;
    padding: 10px;
    margin-bottom: 10px;
`
const CheckBox = styled.div`
    display: flex;
    border: 1px solid gray;
    padding: 10px;
    margin-right: 15px;
`
const TextField = styled.div`
    flex-grow: 2;
`
const ControlField = styled.div`
    display: flex;
`
const TodoItem = (props:ITodoProps) => {
    const {todo} = props;
    return <StyledItem>
        <CheckBox>
            <input type="checkbox" name="done" checked={todo.completed} />
        </CheckBox>
        <TextField>
            <p>
                {todo.title}
            </p>
        </TextField>
        <ControlField>
            <Button danger >Удалить</Button>
        </ControlField>
    </StyledItem>
}
export default TodoItem;
