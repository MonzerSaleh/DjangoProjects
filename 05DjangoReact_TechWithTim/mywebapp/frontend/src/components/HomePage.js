import React, { Component } from 'react'
import RoomJoinPage from "./RoomJoinPage"
import CreateRoomPage from "./CreateRoomPage"
import Room from "./Room"
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from "react-router-dom"

export default class HomePage extends Component{

    constructor(props){
        super(props)
    }
    render(){
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
}

{/* 
<Route path='/room/:roomCode' element={<Room />}></Route>
<Route path="/" element={<p>This is the home page</p>} />
<Route path="/join" element={<RoomJoinPage />}></Route>
<Route path="/create" element={<CreateRoomPage />}></Route>
<Route path="/room" element={<p>Room page</p>}></Route>
<Route path="*" element={<p>Path not resolved</p>}></Route> 
*/}
// Version 1
// render(){ return <p>This is the HomePage</p> }
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}