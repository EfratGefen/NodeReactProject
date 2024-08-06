import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import Login from "./login";
import YourTaskList from "./yourTaskList";
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { addTask, getUserList } from "../redux/actions";
import axios from 'axios';
import Pictures from './image';
import image1 from '../picture/IMG_1113.jpg';
import image2 from '../picture/IMG_1118.jpg';
import image3 from '../picture/IMG_1168.jpg';
import image4 from '../picture/IMG_1169.jpg';
import image5 from '../picture/IMG_1302.jpg';
import image6 from '../picture/IMG_1313.jpg';
import image7 from '../picture/IMG_1315.jpg';
import image8 from '../picture/IMG_1336.jpg';
function mapStateToProps(state) {
    return {
        usersList: state.users.usersList,
    };
}
export default connect(mapStateToProps)(function Entry(props) {
    const newNavigate = useNavigate();
    const { usersList, dispatch } = props;
    let FirstName = useRef('');
    let Password = useRef('');
    let flag = 1;
    const [flag1, SetFlag1] = useState(false);
    const [picture,setpicture]=useState(false);
    const connected = async () => {
        
        if (FirstName.current.value != "" && Password.current.value != "") {
            try {
                const response = await axios.get('http://localhost:5000/user');

                if (response.status == 200) {
                    dispatch(getUserList(response.data));
                    for (var i in response.data) {
                        if (flag == 1 && response.data[i].firstName == FirstName.current.value && response.data[i].password == Password.current.value) {
                            alert(`wellcome ${FirstName.current.value}`);
                            flag = 0;
                            debugger
                            newNavigate('/yourTaskList', { state: { userCurrent: Password.current.value } });
                        }
                    }
                    if (flag == 1) {
                        alert(`You not exsist`);
                        SetFlag1(true);
                        newNavigate('/login');
                    }
                }
            }
            catch (error) {
                console.error(error);
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
                    '& > :not(style)': { m: 1, width: '25ch', color: 'black', fontFamily: '' },
                    alignItems: 'center',
                    padding: "3%",
                    display: 'flex',
                    flexDirection: 'column',
                    '& .MuiTextField-root': { width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <h1>Connect</h1>
                <TextField type="text" inputRef={FirstName} id="standard-basic" label="First Name" variant="standard" color="info" /><br></br>
                <TextField type="password" inputRef={Password} id="standard-basic" label="Password" variant="standard" /><br /><br />
                <Button onClick={connected} variant="text">Connect</Button>
                <Button onClick={()=>setpicture(!picture)}variant="text">pictures</Button>
            </Box>
           
               { picture&&<Pictures >
                <img src={image1} width={200}></img>
                <img src={image2} width={200}></img>
                <img src={image3} width={200}></img>
                <img src={image4} width={200}></img>
                <img src={image5} width={200}></img>
                <img src={image6} width={200}></img>
                <img src={image7} width={200}></img>
                </Pictures>
               }

        </>
    );

})