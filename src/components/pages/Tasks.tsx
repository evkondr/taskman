import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { fetchTodosByUserId } from "../../Store/asyncActions";
import TodoItem from "../TodoItem";

//#TODO: Do complete styles for items
const Tasks = () => {
    const { userID } = useAppSelector( state => state.isAuth);
    const {todos} =  useAppSelector( state => state.todosList);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchTodosByUserId(userID as string))
    },[dispatch, userID])
    return <div>
        {todos.map(todo => <TodoItem todo={todo} />)}
    </div>
}
export default Tasks;