//import React, { Component } from "react";
import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { Grid2, Button, Typography, Grid } from "@mui/material";

function Room() {
    const { roomCode } = useParams();   
    
    const [state, setState] = useState({
        votesToSkip: 2,
        guestCanPause: false,
        isHost: false,
    });
    
    useEffect(() => {
        getRoomDetails();
    }, []);

    const getRoomDetails = () => {
        return fetch("/api/get-room" + "?code="+roomCode)
        .then((response) => {            
            if (!response.ok){
                leaveRoomCallback();
                window.location.replace("/")
            }
            return response.json()
        })
        .then((data) => {
            setState({
            votesToSkip: data.votes_to_skip,
            guestCanPause: data.guest_can_pause,
            isHost: data.is_host,
            });
            //console.log(data);
            //console.log(state);
        });
    }

    const leaveButtonPressed = () => {
        const requestOptions = {
            method: "POST",
            headers: {'Content-Type': 'application/json'}
        }
        fetch("/api/leave-room", requestOptions)
            .then((response) => {
                leaveRoomCallback();
                window.location.replace("/")
            });
    }

    return (
        <Grid2 container spacing={1}>
            <Grid2 xs={12} align="center">
                <Typography variant="h5" component="h5">
                    Code: {roomCode}
                </Typography>
                <Typography variant="h6" component="h6">
                    Votes: {state.votesToSkip}
                </Typography>
                <Typography variant="h6" component="h6">
                    Guest Can Pause: {state.guestCanPause.toString()}
                </Typography>            
                <Typography variant="h6" component="h6">
                    Host: {state.isHost.toString()}
                </Typography>
                <Button variant="contained" color="secondary" onClick={leaveButtonPressed}>
                    Leave Room
                </Button>
            </Grid2>
            
        </Grid2>
    );
}
export default Room;

// getRoomDetails() {
//     fetch("/api/get-room" + "?code=" + this.roomCode)
//         .then((response) => response.json())
//         .then((data) => {
//             setState({
//             votesToSkip: data.votes_to_skip,
//             guestCanPause: data.guest_can_pause,
//             isHost: data.is_host,
//             });
//     });
// }

// This will work but is very bad
// useEffect is called after every render and each state update will trigger a render
// so you can get an infinite loop of rendering
// useEffect(() => {
//     fetch("/api/get-room" + "?code="+roomCode)
//     .then((response) => response.json())
//     .then((data) => {
//         setState({
//         votesToSkip: data.votes_to_skip,
//         guestCanPause: data.guest_can_pause,
//         isHost: data.is_host,
//         });
// });
// });