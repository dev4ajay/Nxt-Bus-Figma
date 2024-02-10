import React from 'react'
import { BiAbacus  ,BiAddToQueue  ,BiAtom ,BiBellPlus   ,BiAlarmAdd } from "react-icons/bi";
import Button from 'react-bootstrap/Button';
import { CiStar } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { IoIosApps } from "react-icons/io";
import { MdAddLocationAlt } from "react-icons/md";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
function CommanDeck() {
  return (
    <div className='col-lg-6 p-3 cols mb-3'>
    <div className="bg-white  p-3">
        <p>
            Upper Deck
        </p>
        <Box
         
          sx={{
            '& .MuiTextField-root': { m: 1, width: '5ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="2"
             
            />
          
          
              <TextField
              required
              id="outlined-required"
              label=""
            
            />
               <TextField
              required
              id="outlined-required"
              label="0"
            
            />
               <TextField
              required
              id="outlined-required"
              label="0"
            
            />
               <TextField
              required
              id="outlined-required"
              label="0"
            
            />
               <TextField
              required
              id="outlined-required"
              label="0"
            
            />
           
            
            </div>
            
            </Box>
    
            <Box
         
          sx={{
            '& .MuiTextField-root': { m: 1, width: '5ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
          
             
               <TextField
              required
              id="outlined-required"
              label=""
            
            />
               <TextField
              required
              id="outlined-required"
              label=""
            
            />
               <TextField
              required
              id="outlined-required"
              label="0"
            
            />
               <TextField
              required
              id="outlined-required"
              label="0"
            
            />
              <TextField
              required
              id="outlined-required"
              label="0"
            
            />
              <TextField
              required
              id="outlined-required"
              label="0"
            
            />
            </div>
            </Box>
       <div>
      
       </div>
       <div className='mt-4'>
       <Box
         
          sx={{
            '& .MuiTextField-root': { m: 1, width: '5ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
         
           
               <TextField
              required
              id="outlined-required"
              label=""
            
            />
               <TextField
              required
              id="outlined-required"
              label=""
            
            />
               <TextField
              required
              id="outlined-required"
              label="0"
            
            />
               <TextField
              required
              id="outlined-required"
              label="0"
            
            />
              <TextField
              required
              id="outlined-required"
              label="0"
            
            />
              <TextField
              required
              id="outlined-required"
              label="0"
            
            />
            </div>
            </Box>
       </div>
    </div>
    <div>
    </div>
    </div>
  )
}

export default CommanDeck