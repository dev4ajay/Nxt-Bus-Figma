import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MdOutlineMailOutline } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { MDBRadio } from 'mdb-react-ui-kit';

function PassengerDetails() {
  return (
    <div className='container mt-4'>
        <div className='main-passenger p-2 mt-2'>
      <div >
        <h4 className='text-center '>Passenger Details</h4>
        <hr className='mt-2'/>
      </div>
      <div className='d-flex gap-2 mt-2'>
        <h6  className='d-flex gap-2'><span className='p-1' style={{background:"#71c8b5" ,borderRadius:'50%' }}><CiUser/></span>Passenger 1</h6>
        |
        <h6>Seat 2</h6>
      </div>
    
     <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label className='mt-2'>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name"  className='p-2 mt-1' />
      
      </Form.Group>

<div className='row'>
    <div className='col-lg-8 mt-2'>
    <h6>Gender</h6>
    <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='male' inline />
      <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='female' inline />
    </div>
  
        
        <div className="mt-2  col-lg-4  " id="Name">
        <h6>Age</h6>
      <Form.Control type="text" placeholder="Enter Your Age" name="age" className="p-2 mt-1"    />
    </div>
    <div > 
<div className='mt-2'>
    <h6>City Of Residence *</h6>
    <Form.Control type="text"  name="city" className="p-2 mt-1"    /> 
    </div>
    <div className='mt-2'>
    <h6>State Of Residence *</h6>
    <Form.Control type="text"  name="state" className="p-2 mt-1"    /> 
    </div>
    
</div>
</div>
</Form>

</div> 
<hr/>

<div className='mt-3 mb-2'>
    <h4 className='d-flex gap-2' ><span className='p-1 ms-2' style={{background:'#f2bc62', borderRadius:'50%' }}><MdOutlineMailOutline/></span> Contact Details</h4>
</div>
<hr/>
<div className='main-passenger p-2'>
<Form.Text className="text-muted  p-2" style={{background:'#fbf180'}}>
         We'll never share your email with anyone else.
        </Form.Text>
<Form>
      <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" className='p-2' />
      
      </Form.Group>
    
      <div className="form-grop">

            <div className="input-group mb-2">
             
                <div className="input-group-text">   <select id="inputState" className="form-control">
        <option selected>+91</option>
        <option>+92</option>
        <option>+65</option>
      </select></div>
             
              <input
                type="number"
                className="form-control"
                id="inlineFormInputGroup"
                placeholder="Enter Mobile Number"
              />
            </div>
          </div>
          <div className="form-group">
    <div className="form-check mt-2">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
      I have a GST number 
      </label>
    </div>
  </div>
  <div className="row">
    <div className="col">
        <h6>GSTIN</h6>
      <input type="text" className="form-control p-2 mt-1" placeholder="GSTIN"/>
    </div>
    <div className="col">
    <h6>Business Name</h6>
      <input type="text" className="form-control p-2 mt-1" placeholder="Business Name"/>
    </div>
  </div>
  <div className="row">
    <div className="col">
        <h6>Business Address</h6>
      <input type="text" className="form-control p-2 mt-1" placeholder="Business Address"/>
    </div>
    <div className="col">
    <h6>Business Email</h6>
      <input type="text" className="form-control p-2 mt-1" placeholder="Business Email"/>
    </div>
  </div>
  <b className='mt-4 mb-2'>In case of invaild/cancelled GSTIN, this booking shall be considered as personal (B2C ) booking</b>
  <hr className='mt-2'/>
  <p className='mt-2'>By clicking on proceed, I agree that I have read and understood the <span className='text-info'>TnCs </span> and the <span className='text-info'> Privacy Policy</span></p>
     <div className='Ammount d-flex gap-2 mt-3'>

        <h5>Total Amount :            </h5>
        <h5> INR410.00</h5>
        </div>
        <div className='d-flex justify-content-end mb-3'>
        <Button style={{background:'red'}}>Proceed to Pay</Button>
        </div>
       
        
     
      </Form>
    
</div>
     
    </div>
  )
}

export default PassengerDetails
