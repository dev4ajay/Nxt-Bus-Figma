import React from 'react'
import { BiAbacus  ,BiAddToQueue  ,BiAtom ,BiBellPlus   ,BiAlarmAdd } from "react-icons/bi";
import Button from 'react-bootstrap/Button';
import { CiStar } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { IoIosApps } from "react-icons/io";
import { MdAddLocationAlt } from "react-icons/md";
import { GoIssueClosed } from "react-icons/go";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { headerRoutes, tourRoutes } from "../../Routes/AllRoute";
import Filter from '../FilterSection/Filter';
import CommanBox from '../../CommanBox';
import CommanDeck from '../../CommanDeck';
import Header from '../HeaderSection/Header';


function Ticket3() {
  return (
   <section >
       
<Header/>
    <div className='container-fluid'>

      <div className='row'>
<div className='col-lg-3 '>
<Filter/>
</div>
<div className='col-lg-9'>
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
  <div className='header_all d-flex gap-3'>
<p className='mt-3' >Seat Price</p>
<Button variant="secondary "  className="btn text-dark bg-neutral-900 mt-2">All</Button>
<Button  className=" bg-white text-dark mt-2">410</Button>
<Button  className=" bg-white text-dark mt-2">510</Button>

        </div>
        <div>
        <p className="d-flex justify-content-end "><IoIosCloseCircleOutline className="fs-4"/></p>
        </div>
        <p className="text-white p-2 mt-2 w-50" style={{background:'#d84e55'}}>Click on an Available seat to proceed with your transaction </p>
       
        <div className='row'>
         
              
          

<CommanBox/>
<div className="col-lg-6 cols p-3 ">
          <div className="d-flex  mb-2  justify-content-center gap-4 ">
          
          </div>
          <div className="   bg-white mb-6 p-3">
            <div className=" py-5 px-2 ">
              <div className="tab-content tab-space">
                <div className='d-flex justify-content-between '>
                    <p>
                    Boarding & Dropping
                    </p>
                    <p className='text-info font-bold'>Change</p>
                </div>
                <div className='d-flex justify-content-between '>
                    <p>
                    Railway station
                    </p>
                    <p className=' font-bold'>04:30</p>
                </div>
                <div className='d-flex justify-content-between '>
                    <p>
                    Radisson Hotel Square
                    </p>
                    <p className='font-bold'>08:30</p>
                </div>
                <div className='d-flex justify-content-between '>
                    <p>
                  Seat No.
                    </p>
                    <p className='font-bold'>2</p>
                </div>
              <p>Fare Details</p>
              <div className='d-flex justify-content-between '>
              <p>Amount<br/>( Taxes will be calculated during payment )</p>
                    <h6 className='font-bold'>INR 4222.00<p className='text-danger'>Show Fare Details</p></h6>
                    
                    
                </div>
              </div>
            </div>
            <button type='button' className='w-100 btn btn-danger bg-danger' >
            Proceed to Book
            </button>
          </div>

        </div>
</div>
<CommanDeck/>
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

export default Ticket3