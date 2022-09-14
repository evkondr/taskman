import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchUsers } from "../../Store/asyncActions";
import Preloader from "../Loader";
import UserItem from "../UserItem";

const StyledPage = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`
const Users = () => {
    const {users, isLoading,  error} = useAppSelector(state => state.usersList)
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(fetchUsers())
    }, [dispatch])
    return <StyledPage>
        {error && <p>error</p>}
        {isLoading?<Preloader />:users.map(user=> <NavLink key={user.id} to={`${user.id}`}><UserItem key={user.id} user={user} /></NavLink>)}
    </StyledPage>
}
export default Users;