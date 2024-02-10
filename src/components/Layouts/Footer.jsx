import React from 'react'
import Img2 from "../../assets/images/Group 38.png"


import {

  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
function Footer() {
  return (
   <section className=' footer' >
    <div className='container'>
      <div className='row'>
        <div className='col-lg-4 mt-3 mb-2'>

          <Link to='/'><img   src={Img2} alt='footer_img'/></Link>
<p>Molestie ad feugiat est facilisi faucibus 
magnis. Convallis magna pellentesque 
odio fusce turpis elit.</p>
<div>
<div className='d-flex '>
  <p className='mt-2'>Follow Us :</p> 

          <MDBBtn
            floating
            className='m-1 mb-3'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            type='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1 mb-3'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            type='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>


          <MDBBtn
            floating
            className='m-1 mb-3'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
             type='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1 mb-3'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
             type='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

       
</div>
</div>
        </div>
        <div className='col-lg-2 mt-3 mb-2 '> 
<h4 className='fs-4 '>Company</h4>
<p>About Us</p>
<p>Leadership</p>
<p>Careers</p>
<p>Article & News</p>
<p>Legal Notice</p>
        </div>
        <div className='col-lg-2 mt-3 mb-2 '> 
<h4 className='fs-4 '>Services</h4>
<p>Safety Guarantee</p>
<p>Schedule on TIme</p>
<p>Online Booking</p>
<p>Professioinal Staff</p>
<p>FAQ & Support</p>
        </div>
        <div className='col-lg-4 mt-3 mb-2 '> 
<h4 className='ms-3 fs-4'>Get In Touch</h4>
<div className='d-flex'>
 
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="28" viewBox="0 0 28 28" fill="none">
  <g clip-path="url(#clip0_20_277)">
    <path d="M14 2.3335C9.49084 2.3335 5.83334 5.991 5.83334 10.5002C5.83334 16.6252 14 25.6668 14 25.6668C14 25.6668 22.1667 16.6252 22.1667 10.5002C22.1667 5.991 18.5092 2.3335 14 2.3335ZM14 13.4168C12.39 13.4168 11.0833 12.1102 11.0833 10.5002C11.0833 8.89016 12.39 7.5835 14 7.5835C15.61 7.5835 16.9167 8.89016 16.9167 10.5002C16.9167 12.1102 15.61 13.4168 14 13.4168Z" fill="#FFC014"/>
  </g>
  <defs>
    <clipPath id="clip0_20_277">
      <rect width="28" height="28" fill="white"/>
    </clipPath>
  </defs>
</svg>
<p >
Molestie ad feugiat est facilisi faucibus 
 
magnis. Convallis magna pellente</p></div>
<div className='d-flex gap-2'>
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M3.66407 8.13203C4.26563 8.44922 12.6219 13.0047 12.9336 13.1688C13.2453 13.3328 13.5625 13.4094 14.0547 13.4094C14.5469 13.4094 14.8641 13.3328 15.1758 13.1688C15.4875 13.0047 23.8438 8.44922 24.4453 8.13203C24.6695 8.01719 25.0469 7.80937 25.1289 7.57422C25.2711 7.15859 25.118 7 24.5109 7H14.0547H3.59844C2.99141 7 2.83829 7.16406 2.98048 7.57422C3.06251 7.81484 3.43985 8.01719 3.66407 8.13203Z" fill="#FFC014"/>
  <path d="M24.9211 8.37805C24.4727 8.60774 20.4477 11.4734 17.7844 13.196L22.2797 18.2546C22.3891 18.364 22.4383 18.4952 22.3781 18.5609C22.3125 18.621 22.1703 18.5882 22.0555 18.4843L16.6633 13.9343C15.8484 14.4593 15.2742 14.8202 15.1758 14.8749C14.7547 15.0882 14.4594 15.1156 14.0547 15.1156C13.65 15.1156 13.3547 15.0882 12.9336 14.8749C12.8297 14.8202 12.2609 14.4593 11.4461 13.9343L6.05391 18.4843C5.94453 18.5937 5.79688 18.6265 5.73125 18.5609C5.66563 18.5007 5.71484 18.364 5.82422 18.2546L10.3141 13.196C7.65078 11.4734 3.58203 8.60774 3.13359 8.37805C2.65234 8.13196 2.625 8.4218 2.625 8.64602C2.625 8.87024 2.625 19.857 2.625 19.857C2.625 20.3656 3.37422 20.9999 3.91016 20.9999H14.0547H24.1992C24.7352 20.9999 25.375 20.3601 25.375 19.857C25.375 19.857 25.375 8.86477 25.375 8.64602C25.375 8.41634 25.4078 8.13196 24.9211 8.37805Z" fill="#FFC014"/>
</svg>
  <p>Support@gmail.com</p>
</div>
<div className='d-flex gap-2'>
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <g clip-path="url(#clip0_20_289)">
    <path d="M7.72917 12.5942C9.40917 15.8958 12.11 18.5967 15.4175 20.2767L17.9842 17.7042C18.305 17.3833 18.7658 17.29 19.1683 17.4183C20.475 17.85 21.8808 18.0833 23.3333 18.0833C23.9808 18.0833 24.5 18.6025 24.5 19.25V23.3333C24.5 23.9808 23.9808 24.5 23.3333 24.5C12.3783 24.5 3.5 15.6217 3.5 4.66667C3.5 4.01917 4.025 3.5 4.66667 3.5H8.75C9.3975 3.5 9.91667 4.01917 9.91667 4.66667C9.91667 6.11917 10.15 7.525 10.5817 8.83167C10.71 9.23417 10.6167 9.695 10.2958 10.0158L7.72917 12.5942Z" fill="#FFC014"/>
  </g>
  <defs>
    <clipPath id="clip0_20_289">
      <rect width="28" height="28" fill="white"/>
    </clipPath>
  </defs>
</svg>
  <p>+91 0123456789</p>
</div>

        </div>
      </div>
    </div>
   </section>
  )
}

export default Footer