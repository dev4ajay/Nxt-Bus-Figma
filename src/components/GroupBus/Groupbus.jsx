import React from 'react'
import Service from '../Services/OurService'


function Groupbus() {
  return (
    <>  
      <section className=" group-banner d-flex align-items-center mb-3  ">
    <div className="container  group_bg">
        <div className='d-flex align-items-center justify-content-center'>
        <div>
        <h6  className='text-center group-h6 mt-3' >PREMIUM BUS CHARTER</h6>
        <h2 className='text-white text-center group-h2 ' >Group Transportation Just Got<br></br> 
Easier With Our Bus Rental</h2>
<p className='text-center text-white p-2 mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper<br/> 
mattis, pulvinar dapibus leo.</p>
<div className='more_button d-flex justify-content-center mb-3'>
    <button className='more_btn font-bold' >Discover More</button>
</div>

        </div>
        </div>
    </div>
    </section>
    <Service/>

    </>

  )
}

export default Groupbus