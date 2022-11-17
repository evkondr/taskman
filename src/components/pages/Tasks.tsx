import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { fetchTodosByUserId } from "../../Store/asyncActions";
import Preloader from "../Loader";
import TodoItem from "../TodoItem";
import ProfileCard from "../ProfileCard"; 

const StyledWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`
const ProfileSide = styled.aside`
    width: 300px;
    flex: 1;
`

const TodoSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 3;
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
        <ProfileSide>
            <ProfileCard />
        </ProfileSide>
        <TodoSection>
            {isLoading && <Preloader/>}
            {error && <p>{error}</p>}
            {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </TodoSection>
    </StyledWrap>
}
export default Tasks;