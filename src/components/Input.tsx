import styled from "styled-components";

interface IInput{
    id:string,
    type: 'text' | 'email' | 'password' | 'number',
    value: string,
    error?: string,
    labelName: string;
    disabled: boolean,
    onChangeHandler: (e:React.ChangeEvent<HTMLInputElement>) => void
}
const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    label{
        font-weight: 700;
        margin-bottom: 0.5rem;
    }
    input{
        font-size: 1.5rem;
        color: var(--theme-color-3);
        border: 1px solid var(--theme-color-3);
        border-radius: 5px;
        padding: 0.5rem;
        outline: none;
    }
    .input__error{
        height: 1rem;
        font-size: 1.2rem;
        color: red;
        padding-left: 1rem;
    }
    
`
const Input = (props: IInput) => {
    const {id, labelName, type, value, error, disabled, onChangeHandler} = props
    return <InputWrapper>
        <label htmlFor={id}>{labelName}</label>
        <input id={id} type={type} value={value} onChange={onChangeHandler} disabled/>
        <div className="input__error">{error && error}</div>
    </InputWrapper>
}
export default Input