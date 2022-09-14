import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {useAppSelector, useAppDispatch} from "../../hooks/reduxHooks";
import { fetchUsers } from "../../Store/asyncActions";
import Button from "../Button";
import { login } from "../../Store/authSlice";
import { useNavigate } from "react-router-dom";

const StyledWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`
const StyledForm = styled.div`
    h5{
        font-size: 1.3rem;
        color: #fff;
        background-color: #00c271;
        text-align: center;
        padding: 10px;
    }
    form{
        width: 300px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 20px;
        align-items: center;
        border: 1px solid #00c271;
        select{
            font-size: 1.5rem;
            padding: 5px;
            margin-bottom: 10px;
        }
    }
`
const Auth = () => {
    const {users} = useAppSelector(state => state.usersList);
    const dispatch = useAppDispatch();
    const [selectedUser, setSelectedUser] = useState<string | undefined>(undefined);
    const navigate = useNavigate();
    const onChangeHandler = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedUser(e.target.value);
    }
    const clickHandler = () => {
        if(selectedUser){
            localStorage.setItem("userID", selectedUser)
            dispatch(login(selectedUser))
            navigate("/");
        }
    }
    useEffect(()=>{
        dispatch(fetchUsers())
    },[dispatch])
    return <StyledWrap>
        <StyledForm>
            <h5>Вход в систему</h5>
            <form>
                <select value={selectedUser} onChange={onChangeHandler}>
                    <option value={undefined}>Выбрать пользователя</option>
                    {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
                </select>
                <Button success clickHandler={clickHandler}>Войти</Button>
            </form>
        </StyledForm>
    </StyledWrap>
}
export default Auth;