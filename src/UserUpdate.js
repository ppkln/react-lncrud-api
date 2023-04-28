import React, { useState,useEffect} from 'react';
import { useParams } from 'react-router-dom'; //เพื่อให้สามารถดึงข้อมูลตัวสุดท้ายที่ต่อท้าย url ที่ส่งมา
import axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

export default function UserUpdate() {
    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [avatar,setAvatar] = useState("");

    const {id} = useParams();

    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://www.melivecode.com/api/users/"+id, requestOptions)
            .then(response => response.json())
            .then(result => {
                if(result['status'] === 'ok'){
                    setFname(result['user']['fname'])
                    setLname(result['user']['lname'])
                    setUsername(result['user']['username'])
                    setEmail(result['user']['email'])
                    setAvatar(result['user']['avatar'])
                }
            })
            .catch(error => console.log('error', error));
    },[id])

    const handleSubmit = (event)=>{
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        /* เขียนแบบ fetch 
        var raw = JSON.stringify({
            "id":id,
            "fname": fname,
            "lname": lname,
            "username": username,
            "password": "1234",
            "email": email,
            "avatar": avatar
        });

        var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://www.melivecode.com/api/users/update", requestOptions)
        .then(response => response.json())
        .then(result => {
            alert(result['message']);
            if(result['status'] === "ok"){
                window.location.href='/';
            }
        })
        .catch(error => console.log('error', error)); */
        
        /* เขียนแบบใช้ axios */
        axios.put('https://www.melivecode.com/api/users/update',{
            id:id,
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
            Update Users
        </Typography>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <TextField id="fname" label="First Name" variant="outlined" 
                    fullWidth required onChange={(e)=> setFname(e.target.value)} 
                    value={fname}/>
                </Grid>
                <Grid item xs={12} >
                    <TextField id="lname" label="Last Name" variant="outlined" 
                    fullWidth required onChange={(e)=> setLname(e.target.value)} 
                    value={lname}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="username" label="UserName" variant="outlined" 
                    fullWidth required onChange={(e)=> setUsername(e.target.value)} 
                    value={username}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="email" label="E-mail" variant="outlined" 
                    onChange={(e)=> setEmail(e.target.value)}fullWidth required 
                    value={email}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField id="avatar" label="Avatar" variant="outlined" 
                    onChange={(e)=> setAvatar(e.target.value)}fullWidth required 
                    value={avatar}/>
                </Grid>
                <Grid item xs={12} >
                    <Button type="submit" variant="contained" fullWidth>Update</Button>
                </Grid>
            </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
}
