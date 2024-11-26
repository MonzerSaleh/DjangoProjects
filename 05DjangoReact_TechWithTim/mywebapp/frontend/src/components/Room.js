//import React, { Component } from "react";
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

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
        fetch("/api/get-room" + "?code="+roomCode)
        .then((response) => response.json())
        .then((data) => {
            setState({
            votesToSkip: data.votes_to_skip,
            guestCanPause: data.guest_can_pause,
            isHost: data.is_host,
            });
        });
    };

    return (
        <div>
            <h3>{roomCode}</h3>
            <p>Votes: {state.votesToSkip}</p>
            <p>Guest Can Pause: {state.guestCanPause.toString()}</p>
            <p>Host: {state.isHost.toString()}</p>
        </div>
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