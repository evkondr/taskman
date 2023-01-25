import { BsGear } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineGlobal } from "react-icons/ai"
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from '../hooks/reduxHooks';
import Avatar from './Avatar';

const ProfileBlock = styled.article`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px;
    border: 1px solid rgba(0, 0, 0, .1);
    border-radius: 5px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
    .profile__name{
        width: 100%;
    font-size: 2rem;
    text-align: center;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    .profile__info{
        width: 100%;
        font-size: 1.3rem;
        align-self: flex-start;
        padding: 1rem 0;
        margin-bottom: 1rem;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
        p{
            margin-bottom: 5px;
        }
    }
    .profile__diagramm{
        align-self: flex-start;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5px;
        font-size: 1.3rem;
        span{
            color: green;
            text-decoration: underline;
        }
    }
`
const ProfileCard = () => {
    const {todos} = useAppSelector(state => state.todosList);
    const {currentUser} = useAppSelector(state => state.usersList)
    const doneTodosCount = todos.reduce((count, todo) => {
        if(todo.completed){
            count++;
        }
        return count
    }, 0)
    return <ProfileBlock>
        <NavLink to="/profile">
            <BsGear style={{position: "absolute", left: "20px", transform: "scale(200%)", color: "#00b9c2"}} />
        </NavLink>
        <Avatar />
        <p className='profile__name'>{currentUser?.name}</p>
        <div className='profile__info'>
            <p><AiOutlineMail style={{"marginRight": "5px", "verticalAlign":"middle", transform: "scale(130%)"}}/>{currentUser?.email}</p>
            <p><AiOutlineGlobal style={{"marginRight": "5px", "verticalAlign":"top", transform: "scale(130%)"}}/>{currentUser?.website}</p>
        </div>
        <div className='profile__diagramm'>
            <p>Всего задач:</p><span>{todos.length}</span>
            <p>Выполнено:</p><span>{doneTodosCount}</span>
        </div>
    </ProfileBlock> 
}
export default ProfileCard