import React from 'react'
import LoginImg from "../../assets/images/Group 4.png"
import LoginLogo from "../../assets/images/Group 38.png"
import Button from 'react-bootstrap/Button';
import {
    MDBContainer,
    MDBBtn,
   
  }
  from 'mdb-react-ui-kit';
  import Box from '@mui/material/Box';
  import TextField from '@mui/material/TextField';
import Commanbanner from '../Commanbanner';
function Forgotpassword() {
  return (
<div className='container mt-4'>
<div className='row'>
    <div className='col-lg-6 mb-3'>
    <img src={LoginLogo} className='login-logo' width={100} height={70} alt='logo-login'/>
    <p className='fs-2 ms-4 mt-5'>Forgot your password?</p>
            <p className='ms-3 mt-2'>Don’t worry, happens to all of us. Enter your email below to recover your password</p>
            <MDBContainer className="p-3 my-5 mt-4 d-flex flex-column w-100">
            <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
     
      </Box>
      <TextField id="outlined-basic" type="text" label="Email" variant="outlined" />
      <Button className="btn-s mb-4 mt-4">Submit</Button>
     
      <div className="text-center">
      
        <p >
            or sign up with:<hr/>
            </p>
        </div>
        <div className='d-flex flex-row mt-3 mb-5 justify-content-center'>
            <button className='btn-google'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" href='#' fill="none">
  <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107"/>
  <path d="M3.15332 7.3455L6.43882 9.755C7.32782 7.554 9.48082 6 12.0003 6C13.5298 6 14.9213 6.577 15.9808 7.5195L18.8093 4.691C17.0233 3.0265 14.6343 2 12.0003 2C8.15932 2 4.82832 4.1685 3.15332 7.3455Z" fill="#FF3D00"/>
  <path d="M12.0002 22C14.5832 22 16.9302 21.0115 18.7047 19.404L15.6097 16.785C14.5719 17.5742 13.3039 18.001 12.0002 18C9.39916 18 7.19066 16.3415 6.35866 14.027L3.09766 16.5395C4.75266 19.778 8.11366 22 12.0002 22Z" fill="#4CAF50"/>
  <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2"/>
</svg>
</button>
              </div>

      </MDBContainer> 
    </div>
    <div className='col-lg-6 mb-4'>
    <Commanbanner imgurl={LoginImg}/>

            </div>
</div>
</div>
  )
}

export default Forgotpassword