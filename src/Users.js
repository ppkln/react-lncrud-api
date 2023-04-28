import React,{ useState } from 'react';
import axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import { ButtonGroup } from '@mui/material';
import UserUpdate from './UserUpdate';


export default function Users() {
  const [Items, setItems] = useState([]);

  /* เริ่ม fuction ลบข้อมูล*/
  const DeleteUser = (id) =>{

    /* แบบใช้ fetch */
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "id": id
    });

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://www.melivecode.com/api/users/delete", requestOptions)
      .then((response) => { return response.json()})
      .then(result => {
        console.log(result)
        alert(result['message']);
      })
      .catch(error => console.log('error', error));

    /* แบบใช้ axios แต่ยังไม่สำเร็จแบบ fetch ด้านบน
    axios.delete('https://www.melivecode.com/api/users/delete',{id:id})
    .then(()=>{
      alert("Delete user successfully");
    })
     สิ้นสุด fuction ลบข้อมูล axios  */

  }//จบ function deleteUser

  //เริ่ม function UserEdit
  const UserEdit = (id) =>{
    window.location = '/updateuser/'+id;
  }//จบ function UserEdit

  axios.get('https://www.melivecode.com/api/users').then((response)=>{
    setItems(response.data);
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{p:2}}>
        <Paper sx={{p:2}}>
          <Box display={'flex'}>
          <Box sx={{ flexGrow:1 }}> 
            <Typography variant="h6" gutterBottom>
            Users
          </Typography>
          </Box>
          <Box>
            <Link href="http://localhost:3000/create"> 
              <Button variant="contained">Create</Button>
            </Link>
          </Box>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">ID</TableCell>
                  <TableCell align="center">Avatar</TableCell>
                  <TableCell align="center">First Name</TableCell>
                  <TableCell align="center">Last Name</TableCell>
                  <TableCell align="center">username</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Items.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="center">
                      <Avatar alt={row.username} src={row.avatar} />
                    </TableCell>
                    <TableCell align="center">{row.fname}</TableCell>
                    <TableCell align="center">{row.lname}</TableCell>
                    <TableCell align="center">{row.username}</TableCell>
                    <TableCell align="center">
                      <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <Button onClick={()=>{UserEdit(row.id)}}>Edit</Button>
                        <Button onClick={()=>{DeleteUser(row.id)}}>del</Button>
                      </ButtonGroup>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </React.Fragment>
  );
}