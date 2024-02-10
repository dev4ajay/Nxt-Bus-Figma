import React from "react";
import { BiAbacus  ,BiAddToQueue  ,BiAtom ,BiBellPlus   ,BiAlarmAdd } from "react-icons/bi";
import Button from 'react-bootstrap/Button';
import { CiStar } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { IoIosApps } from "react-icons/io";
import { MdAddLocationAlt } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { headerRoutes, tourRoutes } from "../../Routes/AllRoute";
import Box from '@mui/material/Box';
import { GoIssueClosed } from "react-icons/go";
import TextField from '@mui/material/TextField';
import CommanBox from "../../CommanBox";
import CommanDeck from "../../CommanDeck";
import Filter from "../FilterSection/Filter";
import Header from "../HeaderSection/Header";
function Ticketes
() {
  


  
  return (
    <section>
        <Header/>
<div className="container-fluid">


<div className="row">
  <div className="col-lg-3 ">
    <Filter/>
  </div>
  <div className="col-lg-9">
  <div class="d-flex flex-wrap justify-content-between align-items-center">
    <h5 class="flex-shrink-1 mb-3 mb-md-0">124 Buses found</h5>
    <p class="flex-shrink-1 mb-2 mb-md-0">Departure</p>
    <p class="flex-shrink-1 mb-2 mb-md-0">Duration</p>
    <p class="flex-shrink-1 mb-2 mb-md-0">Arrival</p>
    <p class="flex-shrink-1 mb-2 mb-md-0">Ratings</p>
    <p class="flex-shrink-1 mb-2 mb-md-0">Fare</p>
    <p class="flex-shrink-1 mb-2 mb-md-0">Seats Available</p>
</div>


<div class="main-class p-3 mt-4 mb-3">
    <div class="d-flex flex-wrap justify-content-between align-items-center">
      <h6>
        Ashok Travels Mandsaur<br/> Group
      </h6>
      <p class="flex-shrink-1">04:30</p>
      <p class="flex-shrink-1">04h 00m</p>
      <p class="flex-shrink-1">08:30</p>
      <button class="btn  flex-shrink-1 d-flex text-white " style={{background:'#59b97c'}}><span><CiStar style={{color:'#fff' }}/></span>50</button>
      <p class="flex-shrink-1">Starts from <br/>INR 410</p>
      <p class="flex-shrink-1">40 Seats<br/> available</p>
    </div>
    <div class="d-flex flex-wrap justify-content-between align-items-center">
      <p >NON AC Seater Sleeper 2 +1</p>
      <p class="flex-shrink-1">Chhotigaltoli</p>
      <p class="flex-shrink-1">Departure</p>
      <p class="flex-shrink-1">Lal Ghati</p>
      <p class="flex-shrink-1 d-flex"><span><LuUsers/></span>4</p>
      <p class="flex-shrink-1 d-flex"><span><IoIosApps style={{color:"danger"}}/></span>red Deal available</p>
      <p class="flex-shrink-1">12 Single</p>
    </div>
    <div class="d-flex flex-wrap justify-content-between align-items-center">
      <p><BiAbacus/></p>
      <p><GoIssueClosed/></p>
      <p><BiAddToQueue /></p>
     <p><GoIssueClosed/></p>
      <p><BiAtom /></p>
     <p><GoIssueClosed/></p>
      <p><BiAlarmAdd /></p>
   
     <p><GoIssueClosed/></p>
      <p class="flex-shrink-1 d-flex"><span><MdAddLocationAlt/></span>Live Tracking</p>
      <p class="text-danger flex-shrink-1">Return Trip redDeal :- Unlock min 10% OFF on return ticket</p>

    </div>
    <div className="d-flex justify-content-end align-items-end flex-wrap">
    <Button className="btn btn-primarys">View Details</Button> 
    </div>
  </div>

    <div className='container main-seat '>
    <div className='header_all d-flex gap-3'>
<p className='mt-3' >Seat Price</p>
<Button variant="secondary "  className="btn text-dark bg-neutral-900 mt-2">All</Button>
<Button  className=" bg-white text-dark mt-2">410</Button>
<Button  className=" bg-white text-dark mt-2">510</Button>

        </div>
        <div>
        <p className="d-flex justify-content-end "><IoIosCloseCircleOutline className="fs-4"/></p>
        </div>
        <p className="text-white p-2 mt-2 w-50 " style={{background:'#d84e55'}}>Click on an Available seat to proceed with your transaction </p>
       
        <div className='row'>
         
              
          

<CommanBox/>
<div className="col-lg-6 cols p-3 ">
      
        <h6>
          SEAT LEGEND
        </h6>
        <div >
        <Box
     
     sx={{
       '& .MuiTextField-root': { m: 1, width: '8ch' },
     }}
     noValidate
     autoComplete="off"
   >
     <div className="d-flex gap-2">
   
       <TextField
         required
         id="outlined-required"
         label="2"
        
       />
         <p className="mt-4">Available</p>
      
          <TextField
         required
         id="outlined-required"
         label="2"
        
       />
         <p className="mt-4">Unavailable</p>
       </div>
       </Box>
       

      

      </div>
      
            <Box
     className="d-flex gap-3"
     sx={{
       '& .MuiTextField-root': { m: 1, width: '8ch' },
     }}
     noValidate
     autoComplete="off"
   >
     
       <TextField
         required
         id="outlined-required"
         label="2"
        
       />
       <p className="mt-3">male</p>

        </Box>
        <div className="mt-3">
          <h6>GEDDEAL</h6>
          <p>Get 10% Extra OFF</p>
          <p>Terms and Conditions :</p>
          <p>Minmum ticket fare :- INR 1700
</p>
<p>Maximum discount limit :- INR 100</p>
        </div>
        </div>
    
      
        
        
</div>
<CommanDeck/>

      
      
    </div>
    <div class="main-class p-3 mt-4 mb-3">
    <div class="d-flex flex-wrap justify-content-between align-items-center">
      <h6>
        Ashok Travels Mandsaur<br/> Group
      </h6>
      <p class="flex-shrink-1">04:30</p>
      <p class="flex-shrink-1">04h 00m</p>
      <p class="flex-shrink-1">08:30</p>
      <button class="btn  flex-shrink-1 d-flex text-white " style={{background:'#59b97c'}}><span><CiStar style={{color:'#fff' }}/></span>50</button>
      <p class="flex-shrink-1">Starts from <br/>INR 410</p>
      <p class="flex-shrink-1">40 Seats<br/> available</p>
    </div>
    <div class="d-flex flex-wrap justify-content-between align-items-center">
      <p >NON AC Seater Sleeper 2 +1</p>
      <p class="flex-shrink-1">Chhotigaltoli</p>
      <p class="flex-shrink-1">Departure</p>
      <p class="flex-shrink-1">Lal Ghati</p>
      <p class="flex-shrink-1 d-flex"><span><LuUsers/></span>4</p>
      <p class="flex-shrink-1 d-flex"><span><IoIosApps style={{color:"danger"}}/></span>red Deal available</p>
      <p class="flex-shrink-1">12 Single</p>
    </div>
    <div class="d-flex flex-wrap justify-content-between align-items-center">
      <p><BiAbacus/></p>
      <p><GoIssueClosed/></p>
      <p><BiAddToQueue /></p>
     <p><GoIssueClosed/></p>
      <p><BiAtom /></p>
     <p><GoIssueClosed/></p>
      <p><BiAlarmAdd /></p>
   
     <p><GoIssueClosed/></p>
      <p class="flex-shrink-1 d-flex"><span><MdAddLocationAlt/></span>Live Tracking</p>
      <p class="text-danger flex-shrink-1">Return Trip redDeal :- Unlock min 10% OFF on return ticket</p>

    </div>
    <div className="d-flex justify-content-end align-items-end flex-wrap">
    <Button className="btn btn-primarys">View Details</Button> 
    </div>
  </div>
  <div class="main-class p-3 mt-4 mb-3">
    <div class="d-flex flex-wrap justify-content-between align-items-center">
      <h6>
        Ashok Travels Mandsaur<br/> Group
      </h6>
      <p class="flex-shrink-1">04:30</p>
      <p class="flex-shrink-1">04h 00m</p>
      <p class="flex-shrink-1">08:30</p>
      <button class="btn  flex-shrink-1 d-flex text-white " style={{background:'#59b97c'}}><span><CiStar style={{color:'#fff' }}/></span>50</button>
      <p class="flex-shrink-1">Starts from <br/>INR 410</p>
      <p class="flex-shrink-1">40 Seats<br/> available</p>
    </div>
    <div class="d-flex flex-wrap justify-content-between align-items-center">
      <p >NON AC Seater Sleeper 2 +1</p>
      <p class="flex-shrink-1">Chhotigaltoli</p>
      <p class="flex-shrink-1">Departure</p>
      <p class="flex-shrink-1">Lal Ghati</p>
      <p class="flex-shrink-1 d-flex"><span><LuUsers/></span>4</p>
      <p class="flex-shrink-1 d-flex"><span><IoIosApps style={{color:"danger"}}/></span>red Deal available</p>
      <p class="flex-shrink-1">12 Single</p>
    </div>
    <div class="d-flex flex-wrap justify-content-between align-items-center">
      <p><BiAbacus/></p>
      <p><GoIssueClosed/></p>
      <p><BiAddToQueue /></p>
     <p><GoIssueClosed/></p>
      <p><BiAtom /></p>
     <p><GoIssueClosed/></p>
      <p><BiAlarmAdd /></p>
   
     <p><GoIssueClosed/></p>
      <p class="flex-shrink-1 d-flex"><span><MdAddLocationAlt/></span>Live Tracking</p>
      <p class="text-danger flex-shrink-1">Return Trip redDeal :- Unlock min 10% OFF on return ticket</p>

    </div>
    <div className="d-flex justify-content-end align-items-end flex-wrap">
    <Button className="btn btn-primarys">View Details</Button> 
    </div>
  </div>
  <div class="main-class p-3 mt-4 mb-3">
    <div class="d-flex flex-wrap justify-content-between align-items-center">
      <h6>
        Ashok Travels Mandsaur<br/> Group
      </h6>
      <p class="flex-shrink-1">04:30</p>
      <p class="flex-shrink-1">04h 00m</p>
      <p class="flex-shrink-1">08:30</p>
      <button class="btn  flex-shrink-1 d-flex text-white " style={{background:'#59b97c'}}><span><CiStar style={{color:'#fff' }}/></span>50</button>
      <p class="flex-shrink-1">Starts from <br/>INR 410</p>
      <p class="flex-shrink-1">40 Seats<br/> available</p>
    </div>
    <div class="d-flex flex-wrap justify-content-between align-items-center">
      <p >NON AC Seater Sleeper 2 +1</p>
      <p class="flex-shrink-1">Chhotigaltoli</p>
      <p class="flex-shrink-1">Departure</p>
      <p class="flex-shrink-1">Lal Ghati</p>
      <p class="flex-shrink-1 d-flex"><span><LuUsers/></span>4</p>
      <p class="flex-shrink-1 d-flex"><span><IoIosApps style={{color:"danger"}}/></span>red Deal available</p>
      <p class="flex-shrink-1">12 Single</p>
    </div>
    <div class="d-flex flex-wrap justify-content-between align-items-center">
      <p><BiAbacus/></p>
      <p><GoIssueClosed/></p>
      <p><BiAddToQueue /></p>
     <p><GoIssueClosed/></p>
      <p><BiAtom /></p>
     <p><GoIssueClosed/></p>
      <p><BiAlarmAdd /></p>
   
     <p><GoIssueClosed/></p>
      <p class="flex-shrink-1 d-flex"><span><MdAddLocationAlt/></span>Live Tracking</p>
      <p class="text-danger flex-shrink-1">Return Trip redDeal :- Unlock min 10% OFF on return ticket</p>

    </div>
    <div className="d-flex justify-content-end align-items-end flex-wrap">
    <Button className="btn btn-primarys">View Details</Button> 
    </div>
  </div>
  </div>
</div>


  </div>
    </section>
  )
}

export default Ticketes
