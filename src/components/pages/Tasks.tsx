import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { fetchTodosByUserId } from "../../Store/asyncActions";
import Preloader from "../Loader";
import TodoItem from "../TodoItem";

const StyledWrap = styled.div`
    width: 100%;
`
//#TODO: Do complete styles for items
const Tasks = () => {
    const { userID } = useAppSelector( state => state.isAuth);
    const {todos, isLoading, error} =  useAppSelector( state => state.todosList);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchTodosByUserId(userID as string))
    },[dispatch, userID])
    return <StyledWrap>
        {isLoading && <Preloader/>}
        {error && <p>{error}</p>}
        {todos.map(todo => <TodoItem todo={todo} />)}
    </StyledWrap>
}
export default Tasks;