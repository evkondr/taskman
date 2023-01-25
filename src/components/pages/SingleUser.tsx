import React, {useEffect} from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchUserById } from "../../Store/asyncActions";

const Wrapper = styled.section`
    width: 100%;
`
const SingleUser = () => {
    const {userID} = useParams();
    const dispatch = useAppDispatch();
    const {currentUser} = useAppSelector(state => state.usersList)
    console.log(currentUser)
    useEffect(() => {
        dispatch(fetchUserById(userID as string))
    }, [dispatch, userID])
    return <Wrapper>
        <h1>Single {userID}</h1>
    </Wrapper>
}
export default SingleUser;