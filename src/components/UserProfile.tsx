import styled from "styled-components";
import { IUser } from "../interfaces";
import Avatar from "./Avatar";
import Button from "./Button";
const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr, 2fr;
    .profile-side{
        display: flex;
        width: 300px;
        .profile-side__avatar{
            display: flex;
            flex-direction: column;
            padding: 2rem;
            align-items: center;
        }
    }
    .profile-info{
        
    }
`
interface IUserProfileProps{
    currentUser: IUser | null
}
const UserProfile = ({currentUser}:IUserProfileProps) => {
    //#TODO: Do complete styles for this item
    return <Wrapper >
        <div className="profile-side">
            <div className="profile-side__avatar">
                <Avatar sz={200}/>
                <Button clickHandler={() => alert("Функция пока недоступна")}>Сменить фото</Button>
            </div>
        </div>
        <div className="profile-info">
            <form className="profile-info__form">
                
            </form>
        </div>
    </Wrapper>
}

export default UserProfile