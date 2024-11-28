import React, { useState, useEffect, Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";
import { Grid2, Button, ButtonGroup, Typography } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";


function HomePage() {
   const [state, setState] = useState({
        roomCode: null,
    });

    useEffect(() => {
        getRoomDetails();
    }, []);

   const getRoomDetails = () => {
    fetch("/api/user-in-room")
      .then((response) => response.json())
      .then((data) => {
        setState({
          roomCode: data.code,
        });
      });
  }

  const renderHomePage = () => {
    return (
      <Grid2 container spacing={3}>
        <Grid2 xs={12} align="center">
          <Typography variant="h3" compact="h3">
            House Party
          </Typography>
          <ButtonGroup disableElevation variant="contained" color="primary">
            <Button color="primary" to="/join" component={Link}>
              Join a Room
            </Button>
            
            <Button color="secondary" to="/create" component={Link}>
              Create a Room
            </Button>
          </ButtonGroup>
        </Grid2>
      </Grid2>
    );
  }

  // if the user is already in a room then redirect them
  const RoomRedirect = () => {
    return state.roomCode ? 
            (<Navigate to={`/room/${state.roomCode}`} />) : 
            (renderHomePage());
  }

  const clearRoomCode = () => {
    setState({
      roomCode: null,
    });
  }

  const LeaveRoomRedirect = (props) => {
    return <Room {...props} leaveRoomCallback={clearRoomCode} />;
  }


  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoomRedirect />} />
        <Route path="/join" element={<RoomJoinPage />} />
        <Route path="/create" element={<CreateRoomPage />} />
        <Route path="/room/:roomCode" element={<LeaveRoomRedirect />} />
      </Routes>
    </Router>
  );
}
export default HomePage;

// Version 1 
// render(){ return <p>This is the HomePage</p> }
// Version 2
// render(){
//   return ( 
//       <Router>
//           <Routes>
//               <Route path="/" element={<p>This is the home page</p>} />
//               <Route path="/join" element={<RoomJoinPage />} />
//               <Route path="/create" element={<CreateRoomPage />} />
//               <Route path="/room/:roomCode" element={<Room />} />
//               <Route path="*" element={<p>This is the Null page</p>} />
//           </Routes>
//       </Router>
//   );
// }