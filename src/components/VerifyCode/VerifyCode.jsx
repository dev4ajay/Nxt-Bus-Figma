import React, { useState } from 'react';
import LoginImg from '../../assets/images/Group 4.png';
import LoginLogo from '../../assets/images/Group 38.png';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { MDBBtn } from 'mdb-react-ui-kit';
import Commanbanner from '../Commanbanner';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

function VerifyCode() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <section>
      <div className='container mt-4'>
        <Grid container spacing={3}>

          <Grid item xs={12} lg={6}>
            <img src={LoginLogo} className='login-logo' alt='logo-login' />
            <h4 className='fs-2 ms-4'>Verify code</h4>
            <p className='ms-3'>An authentication code has been sent to your email.</p>

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
        label=' Enter Code'
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

            <div className='mb-3 ms-2'>
              <p>
                Didn’t receive a code?{' '}
                <Link to={'/login'} className='text-danger'>
                  Resend
                </Link>
              </p>
            </div>

            <Button variant="contained" className="ms-2 mt-3" fullWidth>
              Verify
            </Button>
          </Grid>

          <Grid item xs={12} lg={6} >
          <Commanbanner imgurl={LoginImg}/>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default VerifyCode;
