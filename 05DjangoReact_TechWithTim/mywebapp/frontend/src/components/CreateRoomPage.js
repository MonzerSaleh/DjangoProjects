import React, { Component } from 'react'
//import Button from "@material-ui/core/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { Form, Link, useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button, Grid2 } from '@mui/material';

export default class CreateRoomPage extends Component{
    defaultVotes = 2;
    
    constructor(props){
        super(props);
        this.state = {
            guestCanPause: true,
            votesToSkip: this.defaultVotes
        };
        this.handleRoomButtonPressed = this.handleRoomButtonPressed.bind(this);
        this.handleGuestCanPauseChange = this.handleGuestCanPauseChange.bind(this);
        this.handleVotesChange = this.handleVotesChange.bind(this);
    }
    handleVotesChange(e){
        this.setState({
            votesToSkip: e.target.value,
        });
    }
    handleGuestCanPauseChange(e){
        this.setState({
            guestCanPause: e.target.value === 'true' ? true : false,
        });
    }
    
    handleRoomButtonPressed(){
        {/* console.log(this.state) */}
        //const navigate = useNavigate();    
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                votes_to_skip: this.state.votesToSkip,
                guest_can_pause: this.state.guestCanPause
            })
        };

        
        fetch('/api/create-room', requestOptions)
            .then((response) => response.json())
            .then((data) => window.location.replace("/room/"+data.code))
            .catch(error => console.error(error));

        //navigate("/room/" + data.code);
        //.then((data) => this.props.history.push("/room/"+data.code))
        //.then((data) => this.context.history.push("/room/"+data.code))
        //.then((data,navigate) => navigate("/room/" + data.code))
        //.then((data) => console.log(data)) 
    }

    render(){ 
        return (

            <Grid2 container spacing={1}>
                <Grid2 xs={12} align="center">
                    <Typography component={'h4'} variant={'h4'}>
                        Create a Room
                    </Typography>
                    <FormControl component="fieldset">
                        <FormHelperText>
                            <span align='center'>
                                Guest Control of Playback State
                            </span>
                        </FormHelperText>
                        <RadioGroup row defaultValue='true' onChange={this.handleGuestCanPauseChange}>
                            <FormControlLabel value='true' control={<Radio color="primary" />} label="Play/Pause" labelPlacement='bottom' />
                            <FormControlLabel value='false' control={<Radio color="secondary" />} label="No Control" labelPlacement='bottom' />
                        </RadioGroup>
                        <Grid2 xs={12} align="center">
                            <FormControl>
                                <TextField required={true} 
                                            type="number" 
                                            onChange={this.handleVotesChange}
                                            defaultValue={this.defaultValue} 
                                            htmlinput={{min:1, style:{ textAlign: "center"}, }} 
                                />
                                <FormHelperText>
                                    <span align='center'>
                                        Votes Required to Skip Song
                                    </span>
                                </FormHelperText>
                            </FormControl>
                        </Grid2>
                        <Grid2 xs={12} align="center">
                            <Button color="secondary" variant="contained" onClick={this.handleRoomButtonPressed}>
                                Create A Room
                            </Button>
                        </Grid2>
                        <Grid2 xs={12} align="center">
                            <Button color="primary" variant="contained" to="/" component={Link}>
                                Back
                            </Button>
                        </Grid2>
                    </FormControl>
                </Grid2>
            </Grid2>
        )

        }
}

// Version 1
// render(){ return <p>This is the Create Room Page</p> }