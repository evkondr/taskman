import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { fetchTodosByUserId, fetchUserById } from "../../Store/asyncActions"
import { setPages, togglePage } from "../../Store/todoSlice";
import Preloader from "../Loader";
import TodoItem from "../TodoItem";
import ProfileCard from "../ProfileCard"; 
import Button from "../Button";
import {BsArrowLeftSquare, BsArrowRightSquare} from "react-icons/bs";
import { pagination } from "../../utils";

const Tasks = () => {
    const { userID } = useAppSelector( state => state.isAuth);
    const {todos, isLoading, error, page, pages} =  useAppSelector( state => state.todosList);
    const dispatch = useAppDispatch();
    //set items per page
    const paginatedTodos = pagination(todos, 5);
    //set total pages
    dispatch(setPages(paginatedTodos.length))
    //useEffects
    useEffect(() => {
        dispatch(fetchTodosByUserId(userID as string))
    },[dispatch, userID])
    useEffect(() => {
        dispatch(fetchUserById(userID as string))
    },[dispatch, userID])
    //return component
    return <Wrapper>
        <ProfileSide>
        {!isLoading && <ProfileCard />}
        </ProfileSide>
        <TodoSection>
            <ButtonGroup>
                <div>
                    <Button success >Добавить</Button>
                </div>
            </ButtonGroup> 
            {isLoading && <Preloader/>}
            {error && <p>{error}</p>}
            {paginatedTodos.length == 0?<>Пока нет задач</>:paginatedTodos[page].map(todo => <TodoItem key={todo.id} todo={todo} />)}
            <PaginationGrpoup>
                <button type="button" onClick={() => dispatch(togglePage("prev"))}><BsArrowLeftSquare style={paginationBtn}/></button>
                <p>{page + 1} из {pages}</p>
                <button type="button" onClick={() => dispatch(togglePage("next"))}><BsArrowRightSquare style={paginationBtn}/></button>
            </PaginationGrpoup>
        </TodoSection>
    </Wrapper>
}
//styles
const Wrapper = styled.div`
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
    padding: 0 2rem;
`
const ButtonGroup = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid rgba(0,0,0, .3);
`
const PaginationGrpoup = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    button{
        height: 0;
        border: none;
        background: none;
        cursor: pointer;
    }
    p{
        font-size: 1.5rem;
        padding: 0 1rem;
    }
`
const paginationBtn ={
    width: "2rem",
    height: "2rem",
    color: "#00c271",
}
export default Tasks;