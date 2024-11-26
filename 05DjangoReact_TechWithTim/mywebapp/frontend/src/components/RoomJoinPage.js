import React, { useState, Component } from 'react'
import { TextField, Button, Grid2, Typography, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom';

export default function RoomJoinPage(props) {
    const navigate = useNavigate();

    const[roomCode,setroomCode] = useState('');
    const[error,seterror] = useState('');


    const handleTextFieldChange = () => {
    setroomCode(event.target.value);
    };
    const roomButtonPressed = () => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        code: roomCode,
        }),
    };
    
    console.log(roomCode);

    fetch("/api/join-room", requestOptions)
        .then((response) => {
        if (response.ok) {
            navigate(`/room/${roomCode}`)
        } else {
            seterror("Room not found.");
        }
        })
        .catch((error) => {
        console.log(error);
        });
    };

    return(
        <Grid2 container spacing={1} alignItems="center">
            <Grid2 size={{ xs: 6, md: 8 }} align="center">
                <Typography variant="h4" component="h4">
                    Join a Room
                </Typography>
                <TextField
                    error={error.length > 0}
                    label="Code"
                    placeholder="Enter a Room Code"
                    value={roomCode}
                    helperText={error}
                    variant="outlined"
                    onChange={handleTextFieldChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 6, md: 8 }} align="center" onClick={roomButtonPressed}>
                <Button variant='contained' color='primary'>
                    Enter Room
                </Button>
            </Grid2>
            <Grid2 size={{ xs: 6, md: 8 }} align="center">
                <Button variant='contained' color='secondary' to="/" component={Link}>
                    Back
                </Button>
            </Grid2>
        </Grid2>
    )
}
// <Grid size={{ xs: 6, md: 8 }}>
// Version 1 
// render(){ return <p>This is the Room Join Page !!!!!!!!!</p> }