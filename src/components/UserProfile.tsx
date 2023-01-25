import styled from "styled-components";
import { IUser } from "../interfaces";
import Avatar from "./Avatar";
import Button from "./Button";
import Input from "./Input";

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr 2fr;
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
        padding: 2rem;
    }
    .profile-info__group{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
    .profile-info__subheader{
        width: 100%;
        color: var(--theme-color-2);
        font-size: 1.7rem;
        border-bottom: 1px solid var(--theme-color-2);
        padding: 0.5rem 0;
        margin-bottom: 1rem;
    }
    @media screen and (max-width: 768px){
        .profile-info__group{
            grid-template-columns: 1fr
        }
    }
    @media screen and (max-width: 540px){
        grid-template-columns: 1fr;
        width: 100%;
        .profile-side{
            width: 100%;
            justify-content: center;
        }
    }
`
interface IUserProfileProps{
    user: IUser | null
}
const UserProfile = ({user}:IUserProfileProps) => {
    const address = user?.address;
    const company = user?.company;
    return <Wrapper >
        <div className="profile-side">
            <div className="profile-side__avatar">
                <Avatar sz={200}/>
                <Button clickHandler={() => alert("Функция пока недоступна")}>Сменить фото</Button>
            </div>
        </div>
        <div className="profile-info">
            <form className="profile-info__form">
                <div className="profile-info__group">
                    <Input id="user-name" 
                        type="text" 
                        value={user?.name || ""} 
                        labelName="Имя:"
                        disabled={true}
                        error=""
                        onChangeHandler={(e) => console.log(e.target.value)}
                    />
                    <Input id="login" 
                        type="text" 
                        value={user?.username || ""} 
                        labelName="Логин:"
                        disabled={true}
                        error=""
                        onChangeHandler={(e) => console.log(e.target.value)}
                    />
                    <Input id="email" 
                        type="email" 
                        value={user?.email || ""} 
                        labelName="Почта:"
                        disabled={true}
                        error=""
                        onChangeHandler={(e) => console.log(e.target.value)}
                    />
                    <Input id="phone" 
                        type="text" 
                        value={user?.phone || ""} 
                        labelName="Телефон:"
                        disabled={true}
                        error=""
                        onChangeHandler={(e) => console.log(e.target.value)}
                    />
                </div>
                
                {/* Address */}
                <p className="profile-info__subheader">
                    Адрес
                </p>
                <div className="profile-info__group">
                    <Input id="city" 
                        type="text" 
                        value={address?.city || ""} 
                        labelName="Город:"
                        disabled={true}
                        error=""
                        onChangeHandler={(e) => console.log(e.target.value)}
                    />
                    <Input id="street" 
                        type="text" 
                        value={address?.street || ""} 
                        labelName="Улица:"
                        disabled={true}
                        error=""
                        onChangeHandler={(e) => console.log(e.target.value)}
                    />
                    <Input id="zipcode" 
                        type="text" 
                        value={address?.zipcode || ""} 
                        labelName="Индекс:"
                        disabled={true}
                        error=""
                        onChangeHandler={(e) => console.log(e.target.value)}
                    />
                    <Input id="suite" 
                        type="text" 
                        value={address?.suite || ""} 
                        labelName="Дом:"
                        disabled={true}
                        error=""
                        onChangeHandler={(e) => console.log(e.target.value)}
                    />
                </div>
                {/* Company */}
                <p className="profile-info__subheader">
                    Компания
                </p>
                <div className="profile-info__group">
                    <Input id="company" 
                        type="text" 
                        value={company?.name || ""} 
                        labelName="Название:"
                        disabled={true}
                        error=""
                        onChangeHandler={(e) => console.log(e.target.value)}
                    />
                    <Input id="bs" 
                        type="text" 
                        value={company?.bs || ""} 
                        labelName="Направление:"
                        disabled={true}
                        error=""
                        onChangeHandler={(e) => console.log(e.target.value)}
                    />
                </div>
            </form>
        </div>
    </Wrapper>
}

export default UserProfile