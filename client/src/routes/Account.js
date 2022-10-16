import React from "react";
import { useEffect } from "react"; 
import Login from "../components/Login";
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../components/accountSlice";


function Account () {
  // const [user, setUser] = useState(null);
  // console.log(user)

  const testUser = useSelector(state => state)
  console.log(testUser)

  function onLogin(data) {
    console.log(data)
    dispatch(setUser(data.user));
    localStorage.setItem("jwt", data.jwt);
  }

  const user = useSelector((state) => state.account.currentUser)
  const dispatch = useDispatch();

  // console.log(user)
  
  // useEffect(() => {
  //   dispatch(getMe());
  // }, [dispatch]);

  if (user) {
    return <Typography>Welcome, {user.username}!</Typography>;
  } else {
    return <Login onLogin={onLogin}/>;
  }
}

export default Account;