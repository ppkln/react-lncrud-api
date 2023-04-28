import React, { useState} from 'react';
import axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

export default function InsertUser() {

    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [avatar,setAvatar] = useState("");

    const handleSubmit = (event)=>{
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        /* เขียนแบบ fetch ธรรมดา
        var raw = JSON.stringify({
        "fname": fname,
        "lname": lname,
        "username": username,
        "email": email,
        "avatar": avatar
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };
        
        fetch("https://www.melivecode.com/api/users/create", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            alert(result['message']);
            if(result['status'] === "ok"){
                window.location.href='/';
            }
        })
        .catch(error => console.log('error', error));
        */

        /* เขียนแบบใช้ axios */
        axios.post('https://www.melivecode.com/api/users/create',{
            fname: fname,
            lname: lname,
            username: username,
            email: email,
            avatar: avatar
        }).then((response)=>{
            console.log(response.data);
            alert(response.data['message']);
            if(response.data['status'] === "ok"){
                window.location.href='/';
            }
        }).catch(error => console.log('error', error)); 
    }
    

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm p-3">
        <Typography variant="h6" gutterBottom>
            Create Users
        </Typography>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <TextField id="fname" label="First Name" variant="outlined" 
                    fullWidth required onChange={(e)=> setFname(e.target.value)} />
                </Grid>
                <Grid item xs={12} >
                    <TextField id="lname" label="Last Name" variant="outlined" 
                    fullWidth required onChange={(e)=> setLname(e.target.value)} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="username" label="UserName" variant="outlined" 
                    fullWidth required onChange={(e)=> setUsername(e.target.value)} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="email" label="E-mail" variant="outlined" 
                    onChange={(e)=> setEmail(e.target.value)}fullWidth required />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="avatar" label="Avatar" variant="outlined" 
                    onChange={(e)=> setAvatar(e.target.value)}fullWidth required />
                </Grid>
                <Grid item xs={12} >
                    <Button type="submit" variant="contained" fullWidth>Create</Button>
                </Grid>
            </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
}
