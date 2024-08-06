import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { addUser } from "../redux/actions";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
function mapStateToProps(state) {
    return {
        usersList: state.users.usersList,
    };
}
export default connect(mapStateToProps)(function Login(props) {
    const newNavigate = useNavigate();
    const { usersList, dispatch } = props;
    let FirstName = useRef('');
    let LastName = useRef('');
    let Tel = useRef('');
    let Email = useRef('');
    let Password = useRef('');
    useEffect(function () {
        console.log("usersList", usersList)
    }, [, usersList]);
    const login = async () => {
        if (FirstName.current.value != "" && LastName.current.value != "" && Tel.current.value != "" && Email.current.value != "" && Password.current.value != "") {
            try {
                const newUser = {
                    firstName: FirstName.current.value,
                    lastName: LastName.current.value,
                    tel: Tel.current.value,
                    email: Email.current.value,
                    password: Password.current.value
                };
                debugger
                const response = await axios.post('http://localhost:5000/user', newUser);
                if (response.status == 200) {
                    dispatch(addUser(newUser))
                    alert(`hello ${FirstName.current.value} ${LastName.current.value}`);
                    return newNavigate('/yourTaskList', { state: { userCurrent: Password.current.value } });
                }
            }
            catch (error) {
                console.error(error)
            }
        } else {
            alert('You must fill in all the fields!');
        }

    }

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch', color: 'black' },
                    alignItems: 'center',
                    padding: "3%",
                    display: 'flex',
                    flexDirection: 'column',
                    '& .MuiTextField-root': { width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <h1>Login</h1>
                <TextField type="text" id="standard-basic" label="First Name" variant="standard" inputRef={FirstName} />
                <TextField type="text" id="standard-basic" label="Last Name" variant="standard" inputRef={LastName} />
                <TextField type="tel" id="standard-basic" label="Tel" variant="standard" inputRef={Tel} />
                <TextField type="email" id="standard-basic" label="Email" variant="standard" inputRef={Email} />
                <TextField type="password" id="standard-basic" label="Password" variant="standard" inputRef={Password} /><br />
                <Button onClick={login} variant="text">Save</Button>
            </Box>
        </>
    )
})