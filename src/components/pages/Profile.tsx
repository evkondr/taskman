import React, {useEffect} from "react";
import { fetchUserById } from "../../Store/asyncActions";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import UserProfile from "../UserProfile";

const Profile = () => {
    const dispatch = useAppDispatch()
    const {userID} = useAppSelector(state => state.isAuth)
    const {currentUser, isLoading, error} = useAppSelector(state => state.usersList)
    useEffect(() => {
        dispatch(fetchUserById(userID as string))
    }, [dispatch, userID])
    return <UserProfile user={currentUser}/>
}
export default Profile;