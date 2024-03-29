import React from "react";
import styled from "styled-components"
import Button from "./Button"
import { ITodo } from "../interfaces";
import Checkbox from "./Checkbox"
import { useAppDispatch } from "../hooks/reduxHooks";
import { deleteTodoAsync, toggleCompletedAsync } from "../Store/asyncActions";

interface ITodoProps{
    todo: ITodo
}
const StyledItem = styled.div`
    display: flex;
    align-items: center;
    width: 700px;
    font-size: 1.5rem;
    border-radius: 5px;
    box-shadow: 1px 1px 5px rgba(0,0,0, .5);
    padding: 20px;
    margin: 0 auto;
    margin-bottom: 20px;
    transition: all .2s ease-in-out;
    will-change: transform;
    &:hover{
        transform: scale(105%);
    }
`
const CheckboxBlock = styled.div`
    display: flex;
    margin-right: 20px;
`
const TextField = styled.div`
    flex-grow: 2;
`
const TextDone = styled.p`
    text-decoration: line-through;
`
const ControlField = styled.div`
    display: flex;
`
//Component
const TodoItem = ({todo}:ITodoProps) => {
    const {id, completed} = todo;
    const dispatch = useAppDispatch()
    return <StyledItem>
        <CheckboxBlock>
            <Checkbox completed={todo.completed} onChangeHandler={() => dispatch(toggleCompletedAsync({id,completed}))}/>
        </CheckboxBlock>
        <TextField>
            {todo.completed ? <TextDone>{todo.title}</TextDone> : todo.title}
        </TextField>
        <ControlField>
            <Button danger clickHandler={() => dispatch(deleteTodoAsync(id)) }>Удалить</Button>
            <Button success >Редактировать</Button>
        </ControlField>
    </StyledItem>
}
export default TodoItem;
