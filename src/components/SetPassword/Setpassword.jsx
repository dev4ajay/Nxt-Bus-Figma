import React ,{useState} from 'react'
import LoginImg from "../../assets/images/Group 4.png"
import { BiSolidHide  ,BiSolidShow} from "react-icons/bi";
import LoginLogo from "../../assets/images/Group 38.png"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
  import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Commanbanner from '../Commanbanner';
  
function SetPassword() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <>
    <section >
 <div className='container mt-5 mb-4'>
 <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <img src={LoginLogo} className="login-logo" width={100} height={70} alt="logo-login" />
            <p className="fs-2 mt-5 ms-4">Set a password</p>
            <p className="ms-3 mt-2">
              Your previous password has been reset. Please set a new password
              for your account.
            </p>

            <Box
      sx={{
        '& > :not(style)': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete='off'
    >
      <TextField
        id='outlined-basic'
        type={showPassword ? 'text' : 'password'}
        label='Create Password'
        variant='outlined'
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleTogglePassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>

    <Box
      sx={{
        '& > :not(style)': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete='off'
    >
      <TextField
        id='outlined-basic'
        type={showPassword ? 'text' : 'password'}
        label='Re-enter password'
        variant='outlined'
        InputProps={{
          endAdornment: ( 
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleTogglePassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>

            <Button variant="contained" className="ms-2 mt-3" fullWidth>
              Set Password
            </Button>
          </Grid>

          <Grid item xs={12} lg={6} >
          <Commanbanner imgurl={LoginImg}/>

          </Grid>
        </Grid>
      </div>
    </section>
    </>
  )
}

export default SetPassword
