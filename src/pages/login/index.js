import React,{useState} from 'react';
import { Grid,Paper, Avatar, TextField} from '@material-ui/core';
import LoginIcon from '@mui/icons-material/Login';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';    
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';

import './login.scss';

const Login=()=>{

    const paperStyle={padding :200,height:'70vh',width:310, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#9d1bbd'}

    const [showPassword] = useState(false);

    //const[currentUserData] =useState([])
    const [email, setEmail] = useState("");
    const [paswword, setPassword] = useState([]);


    return(
        <Grid >
            <form onSubmit="" className="" >
                <Paper elevation={10} style={paperStyle} className="card">
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LoginIcon/></Avatar>
                        <h2>Iniciar Sesion</h2>
                    </Grid>
                    <div className="text login">
                        <div>
                            <ListItemIcon><SupervisedUserCircleIcon className="icons"/> </ListItemIcon>
                            <TextField variant="outlined" id="user" name="user" label="Username" type="email" onChange={e => setEmail(e.target.value)}/>
                                
                                 
                        </div>
                        <br></br>
                        <div >
                            <ListItemIcon><VpnKeyOutlinedIcon className="icons"/> </ListItemIcon>
                            <FormControl className="" variant="outlined" >
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput fullWidth label="Password"
                                    id="outlined-adornment-password-login"
                                    type={showPassword? 'text' : 'password'}
                                    name="password"
                                    autoComplete="off"
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </FormControl>
                        </div >
                    </div>
                    <br/><br/><br/>
                    <IconButton aria-label="fingerprint" color="success">
                        <Fingerprint /> Sign in
                    </IconButton>
                </Paper>
            </form>
        </Grid>
    )
}

export default Login;