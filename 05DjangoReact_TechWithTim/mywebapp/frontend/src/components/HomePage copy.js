import React, { useState, useEffect, Component } from "react";
import RoomJoinPage from "./RoomJoinPage"
import CreateRoomPage from "./CreateRoomPage"
import Room from "./Room"
import { Grid2, Button, ButtonGroup, Typography } from '@mui/material'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom"

function HomePage() {
    const [state, setState] = useState({
          roomCode: null,
      });

    // React will call this when the component is added (mounted) to the screen
    // async allows it to run in the background without blocking the page
    useEffect(() => {
          getRoomCode();
      }, []);
    
    const getRoomCode = () => {
    fetch('/api/user-in-room')
      .then((response) => response.json())
      .then((data) => {
        setState({
        roomCode: data.roomCode,
        });
      });
    }

    const renderHomePage = () => {
      return (
        <Grid2 container spacing={3}>
          <Grid2 xs={12} align="center">
            <Typography variant="h3" compact="h3">
              House Party App
            </Typography>
            <ButtonGroup disableElevation variant="contained" color="primary">
              <Button color="primary" to='/join' component={Link}>Join A Room</Button>
              <Button color="secondary" to='/create' component={Link}>Create A Room</Button>
            </ButtonGroup>
          </Grid2>
        </Grid2>
      );
    }
  
    return ( 
        <Router>
            <Routes>
                <Route path="/" element={<p>This is the home page</p>} />
                <Route path="/join" element={<RoomJoinPage />} />
                <Route path="/create" element={<CreateRoomPage />} />
                <Route path="/room/:roomCode" element={<Room />} />
                <Route path="*" element={<p>This is the Null page</p>} />
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